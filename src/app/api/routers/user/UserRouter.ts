import { Router } from 'express'
import UserController from '@controllers/UserController'

const UsersRouter = Router()
const userController = new UserController()

//UsersRouter.post('/', userController.save)
//UsersRouter.get('/', userController.show)
//UsersRouter.put('/', userController.update)
//UsersRouter.delete('/', userController.delete)

export default UsersRouter