import AddressModel from '../../../domain/models/AddressModel'
import { ShowAddressApplicationInterface } from '../../interfaces/address/ShowAddressApplicationInterface'

export default class ShowAddressApplicationService implements ShowAddressApplicationInterface<AddressModel> {
    public execute (user: any) {
        console.log(user, 'veio t')
    }
}
