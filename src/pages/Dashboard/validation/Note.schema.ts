export const titleValidation = {
  required: "Note title is required",
  minLength: {
    value: 3,
    message: "Note title must be at least 3 characters",
  },
  maxLength: {
    value: 100,
    message: "Note title must be at most 40 characters",
  },
};

export const contentValidation = {
  required: "Content is required",
  minLength: {
    value: 3,
    message: "Content must be at least 3 characters",
  },
  maxLength: {
    value: 1000,
    message: "Content must be at most 1000 characters",
  },
};
