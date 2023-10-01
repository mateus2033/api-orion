import UserModel from '../../../domain/models/UserModel'
import UserMessage from '../../../utils/messages/user/UserMessage'

export default class CreateUserValidationService extends UserModel {
    public execute (user: any) {
        const response = this.mountUser(user)
    }

    private mountUser (user: any) {

        const minhaLista = [{
            name: this._name(user.name),
            lastName: this._lastName(user.lastName),
            age: this._age(user.age),
            birthData: this._birthData(user.birthData),
            genre: this._genre(user.genre),
            civilState: this._civilState(user.civilState),
            email: this._email(user.email),
            password: this._password(user.password)
        }]
        console.log(minhaLista)

    }

    /**
     * 
     * @param name string
     * @returns string
     */
    private _name (name: string): string | null {

        if (name === undefined) {
            return UserMessage.REQUIRED
        }

        if (typeof name !== 'string') {
            return UserMessage.ONLY_STRING
        }

        this.setName(name)
        return null
    }   

    /**
     * 
     * @param lastName string
     * @returns string
     */
    private _lastName (lastName: string): string | null {

        if (lastName === undefined) {
            return UserMessage.REQUIRED
        }

        if (typeof lastName !== 'string') {
            return UserMessage.ONLY_STRING
        }

        this.setLastName(lastName)
        return null
    }   

    /**
     * 
     * @param age number
     * @returns string|null
     */
    private _age (age: number): string | null {

        if (age === undefined) {
            return UserMessage.REQUIRED
        }

        if (typeof age !== 'number') {
            return UserMessage.ONLY_STRING
        }

        this.setAge(age)
        return null
    }   

    /**
     * 
     * @param birthData Date
     * @returns string|null
     */
    private _birthData (birthData: Date): string | null {

        if (birthData === undefined) {
            return UserMessage.REQUIRED
        }

        if (typeof birthData !== 'string') {
            return UserMessage.ONLY_STRING
        }

        this.setBirthData(birthData)
        return null
    }   

    /**
     * 
     * @param cpf string
     * @returns string|null
     */
    private _cpf (cpf: string): string | null {

        if (cpf === undefined) {
            return UserMessage.REQUIRED
        }

        if (typeof cpf !== 'string') {
            return UserMessage.ONLY_STRING
        }

        this.setCpf(cpf)
        return null
    }   

    /**
     * 
     * @param genre string
     * @returns string|null
     */
    private _genre (genre: string): string | null {

        if (genre === undefined) {
            return UserMessage.REQUIRED
        }

        if (typeof genre !== 'string') {
            return UserMessage.ONLY_STRING
        }

        this.setGenre(genre)
        return null
    }   

    /**
     * 
     * @param civilState string
     * @returns string|null
     */
    private _civilState (civilState: string): string | null {

        if (civilState === undefined) {
            return UserMessage.REQUIRED
        }

        if (typeof civilState !== 'string') {
            return UserMessage.ONLY_STRING
        }

        this.setCivilState(civilState)
        return null
    }  

    /**
     * 
     * @param email string
     * @returns string|null
     */
    private _email (email: string): string | null {

        if (email === undefined) {
            return UserMessage.REQUIRED
        }

        if (typeof email !== 'string') {
            return UserMessage.ONLY_STRING
        }

        this.setEmail(email)
        return null
    }   

    /**
     * 
     * @param password string
     * @returns string|null
     */
    private _password (password: string): string | null {
        
        if (password === undefined) {
            return UserMessage.REQUIRED
        }

        if (typeof password !== 'string') {
            return UserMessage.ONLY_STRING
        }

        if (password.length < 8) {
            return UserMessage.INVALID_NUMBER_OF_CHARACTERS
        }

        this.setPassword(password)
        return null
    }   
}
