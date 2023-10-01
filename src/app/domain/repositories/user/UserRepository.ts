import { EntityRepository, Repository } from 'typeorm'
import UserModel from '../../models/UserModel'
import AppDataSource from '../../../../database/data-source'

@EntityRepository(UserModel)
export class UserRepository {

  private respository: Repository<UserModel>

  constructor () {
    this.respository = AppDataSource.getRepository(UserModel)
  }

  public create = async (user: UserModel) => {
    const newUser = await this.respository.insert(user)
    console.log(newUser)
    return newUser
  }
}
