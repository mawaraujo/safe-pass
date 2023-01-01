namespace NPassword {
  export interface Password {
    id: string,
    password: string,
    email: string,
    url: string,
    username?: string
  }

  export type Passwords = Array<Password>
}

export default NPassword;
