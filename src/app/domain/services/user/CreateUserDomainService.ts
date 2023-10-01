import { CreateUserDomainInterface } from '../../interfaces/user/CreateUserDomainInterface'
import UserModel from '../../models/UserModel'

export default class CreateUserDomainService implements CreateUserDomainInterface<UserModel> {
    public async execute (user: any) {
        console.log('CreateUserDomainService')
    }
}
