import { handleAxiosError } from "./handleAxiosError";

export const catchAsync = <Args extends unknown[], Return>(
  fn: (...args: Args) => Promise<Return>,
  errorMessage = "An unexpected error occurred"
) => {
  return async (...args: Args): Promise<Return | void> => {
    try {
      return await fn(...args);
    } catch (error: unknown) {
      handleAxiosError(error, errorMessage);
    }
  };
};
