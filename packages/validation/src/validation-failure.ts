export class ValidationFailure {
    public errorMessage: string = "";
    public errorCode: string = "";

    private constructor() { }

    public static create(): ValidationFailure {
        return new ValidationFailure();
    }

    public withCode(code: string): ValidationFailure {
        this.errorCode = code;
        return this;
    }

    public withMessage(message: string): ValidationFailure {
        this.errorMessage = message;
        return this;
    }
}