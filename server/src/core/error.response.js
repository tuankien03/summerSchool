
import StatusCode from './httpcode/statusCodes.js'
import ReasonStatusCode from './httpcode/reasonPhrases.js'



class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.statusCode = status;
  }

}

class ConflictRequestError extends ErrorResponse {
  constructor(message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.CONFLICT) {
    super(message, statusCode);
  }

}

class BadRequestError extends ErrorResponse {
    constructor(message = ReasonStatusCode.FORBIDDEN, statusCode = StatusCode.FORBIDDEN) {
      super(message, statusCode);
    } 
}

class AuthFailureError extends ErrorResponse {
  constructor(message = ReasonStatusCode.UNAUTHORIZED, statusCode = StatusCode.UNAUTHORIZED) {
    super(message, statusCode);
  }
}

class NotFoundError extends ErrorResponse {
  constructor(message = ReasonStatusCode.NOT_FOUND, statusCode = StatusCode.NOT_FOUND) {
    super(message, statusCode);
  }
}

export { ErrorResponse, ConflictRequestError, BadRequestError, AuthFailureError, NotFoundError };