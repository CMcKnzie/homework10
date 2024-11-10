import Employee from "../model/employeeModel.js"

export const create = async (req, res) => {
    try{
        const employeeData = new Employee(req.body)
        const {userName} = employeeData
        const employeeExists = await Employee.findOne({userName})

        if(employeeExists) {
            return res.status(200).json({message: "Employee already exists"})
        }

        const savedEmployee = await employeeData.save ();
        res.status(200).json(savedEmployee)

    } catch(error) {
        res.status(500).json({error: "Internal Server Error "})

    }

}



export const fetch = async(req, res) => {
    try {
        //res.json("Hello World")
        const employees = await Employee.find()

        if(employees.length== 0){
            return res.status(404).json({message: "Employees not found"})
        }
        res.status(200).json(employees)

    } catch(error) {
        res.status(500).json({error: "Internal Server Error" })
    }
}