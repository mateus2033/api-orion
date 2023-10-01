import CreateAddressApplicationService from '../../../application/services/address/CreateAddressApplicationService'
import DeleteAddressApplicationService from '../../../application/services/address/DeleteAddressApplicationService'
import ShowAddressApplicationService from '../../../application/services/address/ShowAddressApplicationService'
import UpdateAddressApplicationService from '../../../application/services/address/UpdateAddressApplicationService'

export default class AddressController {

    private createAddressService: CreateAddressApplicationService
    private deleteAddressService: DeleteAddressApplicationService
    private showAddressService: ShowAddressApplicationService
    private updateAddressService: UpdateAddressApplicationService

    constructor () {
        this.createAddressService = new CreateAddressApplicationService()
        this.deleteAddressService = new DeleteAddressApplicationService()
        this.showAddressService = new ShowAddressApplicationService()
        this.updateAddressService = new UpdateAddressApplicationService()
    }

    public save (req: Request, res: Response) {
        const rsponse = this.createAddressService.execute(req.body)
    }

    public show (req: Request, res: Response) {
        const response = this.showAddressService.execute(req.body)
    }

    public update (req: Request, res: Response) {
        const response = this.updateAddressService.execute(req.body)
    }

    public delete (req: Request, res: Response) {
        const response = this.deleteAddressService.execute(req.body)
    }
}
