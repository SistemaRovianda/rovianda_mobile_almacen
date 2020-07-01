export const ERROR_EMAIL_NOT_FOUND =
  "There is no user record corresponding to this identifier. The user may have been deleted.";

export const ERROR_PASSWORD_INVALID =
  "The password is invalid or the user does not have a password.";

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\d)(?=.*[*\-+_!@#$%^&.,?]).{8,16}$/;
