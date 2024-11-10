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

        res.json("Hello World")
    } catch(error) {
        res.status(500).json({error: "Internal Server Error" })
    }
}