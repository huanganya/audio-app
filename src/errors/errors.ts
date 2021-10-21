export interface ValidationErrorResponse {
  id: string;
  type: string;
  invalidParams: InvalidParam[];
}

export type InvalidParam = {
  name: string;
  reason: string;
}

export type ValidationErrors = {
  [name: string]: string[];
}

export class TimeoutError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class AuthorisationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
  }
}




