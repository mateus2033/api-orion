import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm'
import UserModel from './UserModel'

@Entity('addresses')
export default class AddressModel { 

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

    @ManyToOne(() => UserModel, user => user.addresses)
    user: UserModel

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    public getId (): number {
        return this.id
    } 

    public getStreet (): string {
        return this.street
    }

    public getNumber (): string {
        return this.number
    }

    public getCity (): string {
        return this.city
    }

    public getUf (): string {
        return this.uf
    }

    public getCep (): string {
        return this.cep
    }

    public setId (id: number): void {
        this.id = id
    }

    public setStreet (street: string): void {
        this.street = street
    }

    public setNumber (number: string): void {
        this.number = number
    }

    public setCity (city: string): void {
        this.city = city
    }

    public setUf (uf: string): void {
        this.uf = uf
    }

    public setCep (cep: string): void {
        this.cep = cep
    }
}
