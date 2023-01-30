namespace NSettings {
  type EnableLocalAuthentication = boolean;

  export interface AvailableOptions {
    enableLocalAuthentication: EnableLocalAuthentication,
  }

  export interface ToggleAction {
    enableLocalAuthentication?: EnableLocalAuthentication,
  }
}

export default NSettings;
