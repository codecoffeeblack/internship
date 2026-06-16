interface ValidateEmailPassword {
    valid: boolean;
    reason: string | null;
}


export const validatePassword = (password: string): ValidateEmailPassword => {

  if (!password || typeof password !== "string") {
    return { valid: false, reason: "Password is required" };
  }

  if (password.length < 8) {
    return { valid: false, reason: "Must be at least 8 characters" };
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, reason: "Must contain at least one uppercase letter" };
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, reason: "Must contain at least one lowercase letter" };
  }

  if (!/[0-9]/.test(password)) {
    return { valid: false, reason: "Must contain at least one number" };
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return { valid: false, reason: "Must contain at least one special character" };
  }

  return { valid: true, reason: null };
}

export const validateEmail = (email: string): ValidateEmailPassword => {
if (!email || typeof email !== "string") {
    return { valid: false, reason: "Email is required" };
  }

  const trimmed = email.trim();

  if (!trimmed.includes("@")) {
    return { valid: false, reason: "Missing @" };
  }

  const [local, ...domainParts] = trimmed.split("@");
  const domain = domainParts.join("@");

  if (!local) {
    return { valid: false, reason: "Missing username before @" };
  }

  if (!domain.includes(".")) {
    return { valid: false, reason: "Invalid domain" };
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(trimmed)) {
    return { valid: false, reason: "Invalid email format" };
  }

  return { valid: true, reason: null };
}