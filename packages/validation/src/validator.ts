import { ValidationResult } from "./validation-result";

export interface IValidator<T> {
    validate(value: T): ValidationResult;
}

export class Validator<T> implements IValidator<T> {

    public readonly validators: IValidator<T>[];

    public constructor(validators: IValidator<T>[] = []) {
        this.validators = validators;
    }

    public validate(value: T): ValidationResult {
        const errors = ValidationResult.create();
        for (const validator of this.validators) {
            errors.push(validator.validate(value));
        }
        return errors;
    }
}