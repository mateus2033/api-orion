import { Router } from 'express'
import UsersController from '../../controllers/user/UserController'

const UsersRouter = Router()
const userController = new UsersController()

UsersRouter.post('/', userController.save)
UsersRouter.get('/', userController.show)
UsersRouter.put('/', userController.update)
UsersRouter.delete('/', userController.delete)

export default UsersRouter
