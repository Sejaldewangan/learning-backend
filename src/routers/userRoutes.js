import Router from 'express'

const uR = Router()

uR.get("/",getAllUsers)
uR.get("/",createUsers)
uR.get("/id:",getOneUser)
// uR.get("/",getAllUsers)

