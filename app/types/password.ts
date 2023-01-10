namespace NPassword {
  export interface Password {
    id: string,
    password: string,
    email: string,
    url: string,
    username?: string,
    notes?: string,
  }

  export type Passwords = Array<Password>
}

export default NPassword;
