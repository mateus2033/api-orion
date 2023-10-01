import AddressModel from '../../models/AddressModel'
import AppDataSource from '../../../../database/data-source'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(AddressModel)
export class AddressRepository {

  private respository: Repository<AddressModel>

  constructor () {
    this.respository = AppDataSource.getRepository(AddressModel)
  }

  public create = async (address: AddressModel) => {
    const newAddress = await this.respository.insert(address)
    return newAddress
  }
}
