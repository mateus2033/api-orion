import UserModel from '../../../domain/models/UserModel'
import { DeleteUserApplicationInterface } from '../../interfaces/user/DeleteUserApplicationInterface'

export default class DeleteUserApplicationService implements DeleteUserApplicationInterface<UserModel> {
    
    public execute = async (user: any) => {
        console.log(user, 'veio t')
    }
}
