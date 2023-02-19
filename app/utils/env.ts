import { environment } from '../../app.json';

namespace Env {

  export function isDevMode(): boolean {
    return (
      environment.dev === true
    );
  }
}

export default Env;
