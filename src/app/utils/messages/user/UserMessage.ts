export default class UserMessage {
    
    /**
    * User not found.
    */
    public static readonly USER_NOT_FOUND = 'user not found'

    /**
     * used when information is required
     */
    public static readonly REQUIRED = 'required'

    /**
     * used when information must be string
     */
    public static readonly ONLY_STRING = 'only string'

    /**
     * used when information must be numeric
     */
    public static readonly ONLY_NUMERIC = 'only numeric'

    /**
     * used when cpf is invalid
     */
    public static readonly INVALID_CPF = 'invalid cpf'

    /**
     * used when cpf is invalid
     */
    public static readonly INVALID_EMAIL = 'invalid email'

    /**
     * used when password contain at least eight characters
     */
    public static readonly INVALID_NUMBER_OF_CHARACTERS = 'must contain at least eight characters'
}
