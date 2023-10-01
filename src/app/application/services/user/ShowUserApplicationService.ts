import UserModel from '../../../domain/models/UserModel'
import { ShowUserApplicationInterface } from '../../interfaces/user/ShowUserApplicationInterface'

export default class ShowUserApplicationService implements ShowUserApplicationInterface<UserModel> {
    
    public execute = async (user: any) => {
        console.log(user, 'veio t')
    }
}
