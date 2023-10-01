import { Router } from 'express'
import AddressController from '../../controllers/address/AddressController'

const AddressRouter = Router()
const addressController = new AddressController()

AddressRouter.get('/', addressController.show)
AddressRouter.post('/', addressController.save)
AddressRouter.put('/', addressController.update)
AddressRouter.delete('/', addressController.delete)

export default AddressRouter
