export enum BoundedStringValidateState {
    valid = 'valid',
    minlength = 'minlength',
    maxlength = 'maxlength'
}

export class BoundedString {
    public static readonly MAX_SIZE: number = 50;
    public static readonly MIN_SIZE: number = 3;
    //public static readonly Empty: ProductName = new ProductName('');

    public readonly value: string;

    protected constructor(value: string) {
        this.value = value;
    }

    public equals(object: BoundedString): boolean {
        return this.value === object.value;
    }

    public static create(value: string): [BoundedStringValidateState, BoundedString | undefined] {
        const isValid = BoundedString.validate(value);
        return [isValid, (isValid === BoundedStringValidateState.valid) ? new BoundedString(value) : undefined];
    }

    public static validate(value: string): BoundedStringValidateState {
        if (value.length < this.MIN_SIZE) return BoundedStringValidateState.minlength;
        if (value.length > this.MAX_SIZE) return BoundedStringValidateState.maxlength;
        return BoundedStringValidateState.valid;
    }
}