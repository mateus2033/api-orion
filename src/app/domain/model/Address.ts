import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import User from '../model/User'

@Entity('addresses')
export default class Address { 

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ type: 'varchar', length: 150 })
    private street: string

    @Column({ type: 'varchar', length: 10 })
    private number: string

    @Column({ type: 'varchar', length: 150 })
    private city: string

    @Column({ type: 'varchar', length: 2 })
    private uf: string

    @Column({ type: 'varchar', length: 20 })
    private cep: string

    @ManyToOne(() => User, user => user.addresses)
    public user: User

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}