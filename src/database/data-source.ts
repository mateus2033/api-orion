import 'reflect-metadata'
import { DataSource } from 'typeorm'
import UserModel from '../app/domain/model/User'
import AddressModel from '../app/domain/model/Address'

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
        AddressModel,
        UserModel
    ],
    migrations: ['./src/database/migrations/*.ts'],
    subscribers: []
})
