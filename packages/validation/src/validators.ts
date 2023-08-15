import { ValidationFailure } from "./validation-failure";
import { ValidationResult } from "./validation-result";
import { IValidator } from "./validator";

export class MinValidator implements IValidator<number> {

    public constructor(private min: number) { }

    validate(value: number): ValidationResult {
        const result = ValidationResult.create();
        if (value < this.min) {
            result.add(ValidationFailure.create().withCode("min"));
        }
        return result;
    }
}

export class MaxValidator implements IValidator<number> {

    public constructor(private max: number) { }

    validate(value: number): ValidationResult {
        const result = ValidationResult.create();
        if (value > this.max) {
            result.add(ValidationFailure.create().withCode("max"));
        }
        return result;
    }
}

export class MinLengthValidator implements IValidator<string> {

    public constructor(private min: number) { }

    validate(value: string): ValidationResult {
        const result = ValidationResult.create();
        if (value.length < this.min) {
            result.add(ValidationFailure.create().withCode("minlength"));
        }
        return result;
    }
}

export class MaxLengthValidator implements IValidator<string> {

    public constructor(private max: number) { }

    validate(value: string): ValidationResult {
        const result = ValidationResult.create();
        if (value.length > this.max) {
            result.add(ValidationFailure.create().withCode("maxlength"));
        }
        return result;
    }
}

export class RangeLengthValidator implements IValidator<string> {

    public constructor(private min: number, private max: number) { }

    validate(value: string): ValidationResult {
        const result = ValidationResult.create();
        if (value.length < this.min) {
            result.add(ValidationFailure.create().withCode("minlength"));
        }
        if (value.length > this.max) {
            result.add(ValidationFailure.create().withCode("maxlength"));
        }
        return result;
    }
}

export class Validators {

    public static min(min: number): IValidator<number> {
        return new MinValidator(min);
    };

    public static max(max: number): IValidator<number> {
        return new MaxValidator(max);
    };

    public static minLength(min: number): IValidator<string> {
        return new MinLengthValidator(min);
    };

    public static maxLength(max: number): IValidator<string> {
        return new MaxLengthValidator(max);
    };

    public static lengthString(min: number, max: number): IValidator<string> {
        return new RangeLengthValidator(min, max);
    };
}