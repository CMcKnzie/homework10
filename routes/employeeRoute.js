import express from "express"
import { create, fetch, findEmployee, update} from "../controller/employeeController.js"

const route = express.Router()

route.post("/create", create)
route.get("/fetch", fetch)
route.put("/update/:id", update)
//route.delete("/delete/:id", deleteEmployee)
route.get("/fetch/:id", findEmployee)
export default route