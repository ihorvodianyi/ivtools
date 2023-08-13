import { ValidationErrors, Validator } from "./index";

export enum UnitValidateState {
    valid = 'valid',
    minlength = 'minlength',
    maxlength = 'maxlength'
}

export class UnitName {
    public static readonly MIN_SIZE_NAME: number = 1;
    public static readonly MAX_SIZE_NAME: number = 15;

    public readonly value: string;

    private static validators: Validator<string>[] = [];

    private constructor(value: string) {
        this.value = value;
    }

    public static create(value: string): UnitName | undefined {
        if (UnitName.validate(value) === null) {
            return new UnitName(value);
        }
        return undefined;
    }

    public equals(object: UnitName): boolean {
        return this.value === object.value;
    }

    public static validate(value: string): ValidationErrors | null {
        const errors: ValidationErrors = [];
        for (const i of this.validators) {
            errors.cat(i.validate(value));
        }
        return errors.length === 0 ? null : errors;
    }

    // public static validate(value: string): UnitValidateState {
    //     if (value.length < this.MIN_SIZE_NAME) return UnitValidateState.minlength;
    //     if (value.length > this.MAX_SIZE_NAME) return UnitValidateState.maxlength;
    //     return UnitValidateState.valid;
    // }

    // public static validator(control: AbstractControl): ValidationErrors | null {
    //     const validateState = UnitName.validate(control.value);
    //     if (validateState === UnitValidateState.valid) {
    //         return null;
    //     }
    //     else {
    //         const errors: ValidationErrors = [];
    //         errors[validateState] = true;
    //         return errors;
    //     }
    // }
}