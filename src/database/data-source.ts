import 'reflect-metadata'
import { DataSource } from 'typeorm'
import UserModel from '@models/User'
import AddressModel from '@models/Address'

export default new DataSource({
    type: 'mysql',
    host: 'db',
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
