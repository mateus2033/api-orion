import AddressModel from '../../../domain/models/AddressModel'
import { CreateAddressApplicationInterface } from '../../interfaces/address/CreateAddressApplicationInterface'

export default class CreateAddressApplicationService implements CreateAddressApplicationInterface<AddressModel> {
    public execute (user: any) {
        console.log(user, 'veio t')
    }
}
