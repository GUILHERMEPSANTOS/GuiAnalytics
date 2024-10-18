import { ErrorType } from './errorType.js';

class Error {
    code;
    description;
    type;

    static None = new Error('', '', 'Failure');
    static NullValue = new Error('Error.NullValue', 'Null value was provided', 'Failure');

    constructor({ code, description, type }) {
        this.code = code;
        this.description = description;
        this.type = type;
    }

    static NotFound(code, description) {
        return new Error(code, description, ErrorType.NotFound);
    }

    static Validation(code, description) {
        return new Error(code, description, ErrorType.Validation);
    }

    static Failure(code, description) {
        return new Error(code, description, ErrorType.Failure);
    }

    static Conflict(code, description) {
        return new Error(code, description, ErrorType.Conflict);
    }

    equals(other) {
        if (!other) return false;

        return this.code === other.code && this.description === other.description && this.type === other.type;
    }
}

export { Error }