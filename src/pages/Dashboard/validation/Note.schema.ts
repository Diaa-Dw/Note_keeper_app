export const titleValidation = {
  required: "Note title is required",
  minLength: {
    value: 3,
    message: "Note title must be at least 3 characters",
  },
  maxLength: {
    value: 40,
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
    value: 200,
    message: "Content must be at most 200 characters",
  },
};
