class AppError extends Error {
  public readonly statusCode: number;
  public readonly errorType?: string;

  constructor(
    statusCode: number,
    message: string,
    options?: {
      stack?: string;
      errorType?: string;
      isOperational?: boolean;
    }
  ) {
    super(message);

    this.statusCode = statusCode;
    this.errorType = options?.errorType;

    if (options?.stack) {
      this.stack = options.stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
