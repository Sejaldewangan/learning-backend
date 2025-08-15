import Router from 'express'
import { getAllUsers,createUsers,getOneUser } from '../controllers/userController.js'

export const uR = Router()

uR.get("/",getAllUsers)
uR.post("/",createUsers)
uR.get("/:id",getOneUser)
// uR.get("/",getAllUsers)

