export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address",
  },
};

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 6 characters",
  },
};

export const usernameValidation = {
  required: "Name is required",
  minLength: {
    value: 3,
    message: "Name must be at least 3 characters",
  },
  maxLength: {
    value: 40,
    message: "Name must be at most 20 characters",
  },
};

export const confirmPasswordValidation = (password: string) => {
  return {
    required: "Confirm password is required",
    validate: (value: string) => value === password || "Passwords do not match",
  };
};
