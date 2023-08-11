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