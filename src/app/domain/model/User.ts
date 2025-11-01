import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import AddressModel from '../model/Address'

@Entity('users')
export default class User {

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ type: 'varchar', length: 100 })
    private name: string

    @Column({ type: 'varchar', length: 100 })
    private lastName: string

    @Column()
    private age: number

    @Column()
    private birthData: Date 

    @Column({ type: 'varchar', length: 14 })
    private cpf: string 

    @Column({ type: 'varchar', length: 10 })
    private genre: string
    
    @Column({ type: 'varchar', length: 10 })
    private civilState: string

    @Column({ type: 'varchar', length: 200 })
    private email: string

    @Column({ type: 'varchar', length: 255 })
    private password: string

    @OneToMany(() => AddressModel, address => address.user)
    public addresses: AddressModel[]
    
    @CreateDateColumn({ name: 'created_at' })
    created_at: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}