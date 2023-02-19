/* eslint-disable no-unused-vars */

namespace Nlang {
  export enum AvailableLanguages {
    En = 'en',
    Es = 'es'
  }

  export interface Options {
    language: string,
    forced?: boolean
  }
}

export default Nlang;
