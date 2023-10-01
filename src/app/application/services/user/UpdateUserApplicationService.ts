import UserModel from '../../../domain/models/UserModel'
import { UpdateAddressApplicationInterface } from '../../interfaces/address/UpdateAddressApplicationInterface'

export default class UpdateUserApplicationService implements UpdateAddressApplicationInterface<UserModel> {
    
    public execute = async (user: any) => {
        console.log(user, 'veio t')
    }
}
