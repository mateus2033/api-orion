import AddressModel from '../../../domain/models/AddressModel'
import { DeleteAddressApplicationInterface } from '../../interfaces/address/DeleteAddressApplicationInterface'

export default class DeleteAddressApplicationService implements DeleteAddressApplicationInterface<AddressModel> {
    public execute (user: any) {
        console.log(user, 'veio t')
    }
}
