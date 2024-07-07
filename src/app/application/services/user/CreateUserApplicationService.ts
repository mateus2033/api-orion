import UserModel from '../../../domain/models/UserModel'
import CreateUserDomainService from '../../../domain/services/user/CreateUserDomainService'
import { CreateUserApplicationInterface } from '../../interfaces/user/CreateUserApplicationInterface'
import CreateUserValidationService from '../../validation/user/CreateUserValidationService'

export default class CreateUserApplicationService implements CreateUserApplicationInterface<UserModel> {

    private createUserValidationService: CreateUserValidationService
    private createUserDomainService: CreateUserDomainService

    constructor () {
        this.createUserValidationService = new CreateUserValidationService()
        this.createUserDomainService = new CreateUserDomainService()
    }

    public execute = async (user: any) => {

        try {
            const test = this.createUserValidationService.execute(user)
            console.log(test)
        } catch (erro) {
            console.error('Ocorreu um erro:', erro.message)
        }
    }
}
