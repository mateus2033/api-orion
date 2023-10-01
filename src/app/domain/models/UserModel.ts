import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm'
import AddressModel from './AddressModel'

@Entity('users')
export default class UserModel {

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
    addresses: AddressModel[]
    
    @CreateDateColumn({ name: 'created_at' })
    created_at: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    public getId (): number {
        return this.id
    }

    public getName (): string {
        return this.name
    }

    public getLastName (): string {
        return this.lastName
    }

    public getAge (): number {
        return this.age
    }

    public getBirthData (): Date {
        return this.birthData
    }

    public getGenre (): string {
        return this.genre
    }

    public getCpf (): string {
        return this.cpf
    }

    public getCivilState (): string {
        return this.civilState
    }

    public getEmail (): string {
        return this.email
    }

    public getPassword (): string {
        return this.password
    }

    public setId (id: number): void {
        this.id = id
    }

    public setName (name: string): void {
        this.name = name
    }

    public setLastName (lastName: string): void {
        this.lastName = lastName
    }

    public setAge (age: number): void {
        this.age = age
    }

    public setBirthData (birthData: Date): void {
        this.birthData = birthData
    }

    public setCpf (cpf: string): void {
        this.cpf = cpf
    }

    public setGenre (genre: string): void {
        this.genre = genre
    }

    public setCivilState (civilState: string): void {
        this.civilState = civilState
    }

    public setEmail (email: string): void {
        this.email = email
    }

    public setPassword (password: string): void {
        this.password = password
    }
}
