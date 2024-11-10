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

export const update = async (req, res) => {

    try {
        const id = req.params.id
        const employeeExists = await Employee.findOne({_id:id})

        if(!employeeExists) {
            return res.status(404).json({message: "Employee not found"})
        }

        const updateEmployee = await Employee.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json(updateEmployee)
    } catch (error) {
        res.status(500).json ({error: "Internal Sever Error"})
    }
}

// export const deleteEmployee = async (req, res) => {
//     try {
//         const id = req.params.id
//         const employeeExists = await Employee.findOne({_id:id})

//         if(!employeeExists){
//             return res.status(404).json({message: "Employee not found"})
//         }

//         await Employee.findByIdAndDelete(id)
//         res.status(201).json({message: "Employee record deleted"})
//     } catch (error) {
//         res.status(500).json ({error: "Internal Sever Error"})
//     }

// }