console.log("BoundedStringValidateState");

export enum BoundedStringValidateState {
    valid = 'valid',
    minlength = 'minlength',
    maxlength = 'maxlength'
}

export class Pair {
    public min: number = 0;
    public max: number = 0;
}

export type ValidationErrors = {
    [key: string]: any;
};

export interface Validator<T> {
    validate(value: T): ValidationErrors | null;
}

export class BoundedStringValidator implements Validator<string>{
    validate(value: string): ValidationErrors | null {
        throw new Error("Method not implemented.");
    }
}