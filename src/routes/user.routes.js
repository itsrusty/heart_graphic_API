import { Router } from "express";
import { createUser, showUsers } from "../controllers/user.controllers.js";
import cacheInit from "../middlewares/cache.config.js"

const routerUser = Router()
const userPath = "/api"

routerUser.post(`${userPath}/create`,createUser)
routerUser.get(`${userPath}/users`, cacheInit, showUsers)

export default routerUser