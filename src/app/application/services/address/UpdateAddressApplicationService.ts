import AddressModel from '../../../domain/models/AddressModel'
import { UpdateAddressApplicationInterface } from '../../interfaces/address/UpdateAddressApplicationInterface'

export default class UpdateAddressApplicationService implements UpdateAddressApplicationInterface<AddressModel> {
    public execute (user: any) {
        console.log(user, 'veio t')
    }
}
