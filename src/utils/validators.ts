export function fullNameValidation(name: string) {
  let reg = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (reg.test(name)) return true;
  else return false;
}

export function emailValidation(email: string) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(String(email).toLowerCase())) return true;
  else return false;
}

export function passwordValidation(password: string) {
  if (password && password.length > 5) return true;
  else return false;
}
