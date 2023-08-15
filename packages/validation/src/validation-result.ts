import { ValidationFailure } from "./validation-failure";

export class ValidationResult {

    public readonly errors: ValidationFailure[] = [];

    public get isValid(): boolean {
        return this.errors.length === 0;
    }

    private constructor() { }

    public static create(): ValidationResult {
        return new ValidationResult();
    }

    public push(result: ValidationResult): void {
        this.errors.concat(result.errors);
    }

    public add(error: ValidationFailure): void {
        this.errors.push(error);
    }
}