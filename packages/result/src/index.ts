export enum ResultState {
    FAIL,
    OK
}

export abstract class ResultBase {

    private _state: ResultState;

    protected constructor(state: ResultState) {
        this._state = state;
    }

    public get isFailed(): boolean {
        return this._state == ResultState.FAIL;
    }
    public get isSuccess(): boolean {
        return this._state == ResultState.OK;
    }
}

export class Result extends ResultBase {

    private constructor(state: ResultState) {
        super(state);
    }

    public static ok(): Result {
        return new Result(ResultState.OK);
    }

    public static fail(): Result {
        return new Result(ResultState.FAIL);
    }    
}

export class ResultValue<T> extends ResultBase {

    private _value: T | undefined;
    public get value(): T | undefined {
        return this._value;
    }

    private constructor(state: ResultState, value: T | undefined) {
        super(state);
        this._value = value;
    }

    public static ok<T>(value: T): ResultValue<T> {
        return new ResultValue<T>(ResultState.OK, value);
    }

    public static fail<T>(): ResultValue<T> {
        return new ResultValue<T>(ResultState.FAIL, undefined);
    }
}