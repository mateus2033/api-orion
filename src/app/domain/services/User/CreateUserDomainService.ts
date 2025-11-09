import User from '@models/User';

export default class CreateUserDomainService implements CreateUserDomainInterface<User> {
    public async execute (user: any) {
        console.log('CreateUserDomainService')
    }
}