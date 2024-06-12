import StatusCode from './httpcode/statusCodes.js'
import ReasonStatusCode from './httpcode/reasonPhrases.js'



class SuccessResponse {
    constructor({message,statusCode = StatusCode.OK, reasonStatusCode = ReasonStatusCode.OK, metadata = {}}) {
        this.statusCode = statusCode;
        this.message = !message ? reasonStatusCode : message;
        this.metadata = metadata;
    }

    send(res, headers = {}) {
        return res.status(this.statusCode).json(this);
    }
}

class OK extends SuccessResponse {
    constructor({message, metadata}) {
        super({message, metadata})
    }
}

class CREATED extends SuccessResponse {
    constructor({message, statusCode = StatusCode.CREATED, reasonStatusCode = ReasonStatusCode.CREATED , metadata, options = {}}) {
        super({message: message, statusCode: statusCode, reasonStatusCode: reasonStatusCode, metadata: metadata})
        this.options = options;
    }
}

export { SuccessResponse, OK, CREATED };