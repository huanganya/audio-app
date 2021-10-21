export type ValidatorType = (string) => undefined | string;

export enum errorMessage {
  missingRequired = "Please fill in the required field.",
  invalidUsername = "Invalid username",
  invalidEmail = "Invalid email",
  invalidPassword = "Invalid password",
}

const isEmpty = (value: string | string[]): boolean =>
  !value || value.length === 0;

export const generateValidator =
  (isMandatory: boolean, customValidator?: ValidatorType) =>
  (value: string | string[]): undefined | string => {
    let error;

    if (isMandatory && isEmpty(value)) {
      error = errorMessage.missingRequired;
    } else if (customValidator) {
      error = customValidator(value);
    }

    return error;
  };
export const lettersRegex = new RegExp(`^([a-zA-Z0-9]+)$`);
export const emailRegex = new RegExp(
  `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$`,
);
export const userNameValidator = (
  originalValue: string,
): string | undefined => {
  if (!originalValue || originalValue.length > 20) {
    return errorMessage.invalidUsername;
  }
  if (!lettersRegex.test(originalValue)) {
    return errorMessage.invalidUsername;
  }
  return undefined;
};

export const emailValidator = (originalValue: string): string | undefined => {
  console.log("at emailValidator", originalValue);
  if (!originalValue || originalValue.length > 50) {
    return errorMessage.invalidEmail;
  }
  if (!emailRegex.test(originalValue)) {
    return errorMessage.invalidEmail;
  }
  return undefined;
};

export const passwordValidator = (
  originalValue: string,
): string | undefined => {
  if (!originalValue || originalValue.length < 6 || originalValue.length > 20) {
    return errorMessage.invalidPassword;
  }
  return undefined;
};
