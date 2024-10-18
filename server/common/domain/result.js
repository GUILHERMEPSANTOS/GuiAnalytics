class Error {
    static None = new Error('', '', 'Failure');
    static NullValue = new Error('Error.NullValue', 'Null value was provided', 'Failure');
}

class Result {
    constructor(isSuccess, error) {
        if ((isSuccess && error !== Error.None) || (!isSuccess && error === Error.None)) {
            throw new Error("Invalid error.");
        }

        this.isSuccess = isSuccess;
        this.error = error;
    }

    get IsSuccess() {
        return this.isSuccess;
    }

    get IsFailure() {
        return !this.isSuccess;
    }

    static SuccessWithValue(value) {
        return new ResultWithValue(value, true, Error.None);
    }
    
    static Success() {        
        return new Result(true, Error.None);
    }

    static Failure(error) {
        return new Result(false, error);
    }

    static Create(value) {
        return value != null ? Result.Success(value) : Result.Failure(Error.NullValue);
    }
}

class ResultWithValue extends Result {
    constructor(value, isSuccess, error) {
        super(isSuccess, error);
        this._value = value;
    }

    get Value() {
        if (this.IsSuccess) {
            return this._value;
        } else {
            throw new Error("The value of a failure result cannot be accessed.");
        }
    }

    static create(value) {
        return Result.Create(value);
    }

    static fromValue(value) {
        return ResultWithValue.create(value);
    }
}

export { Result };