import { Request, Response } from 'express'
import CreateUserApplicationService from '../../../application/services/user/CreateUserApplicationService'
import DeleteUserApplicationService from '../../../application/services/user/DeleteUserApplicationService'
import ShowUserApplicationService from '../../../application/services/user/ShowUserApplicationService'
import UpdateUserApplicationService from '../../../application/services/user/UpdateUserApplicationService'

export default class UserController {

    private createUserApplication: CreateUserApplicationService
    private showUserApplication: ShowUserApplicationService
    private updateUserApplication: UpdateUserApplicationService
    private deleteUserApplication: DeleteUserApplicationService

    constructor () {
        this.createUserApplication = new CreateUserApplicationService()
        this.showUserApplication = new ShowUserApplicationService()
        this.updateUserApplication = new UpdateUserApplicationService()
        this.deleteUserApplication = new DeleteUserApplicationService()
    }

    public save = async (req: Request, res: Response) => {
        const response = await this.createUserApplication.execute(req.body)
    }

    public show = async (req: Request, res: Response) => {
        const response = this.showUserApplication.execute(req.body)
    }

    public update = async (req: Request, res: Response) => {
        const response = this.updateUserApplication.execute(req.body)
    }

    public delete = async (req: Request, res: Response) => {
        const response = this.deleteUserApplication.execute(req.body)
    }
}
