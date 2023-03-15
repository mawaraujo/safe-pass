namespace NPassword {
  export interface Password {
    id: string,
    name: string,
    password?: string,
    email?: string,
    url?: string,
    username?: string,
    notes?: string,
    tagId?: string
  }

  export type Passwords = Array<Password>

  export type VerifiedPassword = Password & {
    duplicated?: boolean
  }

  export type VerifiedPasswords = Array<VerifiedPassword>
}

export default NPassword;
