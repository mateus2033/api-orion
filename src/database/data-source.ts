import 'reflect-metadata'
import { DataSource } from 'typeorm'
import UserModel from '../app/domain/models/UserModel'
import AddressModel from '../app/domain/models/AddressModel'

export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'dev',
    password: '123456',
    database: 'database',
    synchronize: true,
    logging: false,
    entities: [
        UserModel,
        AddressModel
    ],
    migrations: ['./src/database/migrations/*.ts'],
    subscribers: []
})
