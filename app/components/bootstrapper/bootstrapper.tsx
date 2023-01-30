import {useLocalAuthentication} from '../../hooks';

/**
 * This component is utility, it should not render anything on the ui
 * @return {null}
 */
export default function Bootstrapper(): null {
  useLocalAuthentication();

  return (
    null
  );
}
