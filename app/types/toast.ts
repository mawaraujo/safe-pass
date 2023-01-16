namespace NToast {
  export type ToastType = 'Success' | 'Danger' | 'Warning' | 'Info'

  export interface Toast {
    title: string,
    extraInformation?: string,
    type: ToastType,
    show?: boolean
  }

  // export type Toasts = Array<Toast>
}

export default NToast;
