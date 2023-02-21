namespace NAlert {
  export type AlertType = 'Success' | 'Danger' | 'Warning' | 'Info'

  export interface Alert {
    title: string,
    extraInformation?: string,
    type: AlertType,
    show?: boolean
  }
}

export default NAlert;
