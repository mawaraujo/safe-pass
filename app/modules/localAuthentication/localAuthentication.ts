/**
 * Local Authentication Module
 *
 * This module has based on react-native-biometrics package, see more in https://github.com/SelfLender/react-native-biometrics.
 * It uses the device lock system as the fingerprint, pattern, pin, etc.
 *
 * @Author Mauro Araujo
 * @Email e.mauroar@gmail.com
 */

import {NativeModules} from 'react-native';

const {
  LocalAuthentication,
} = NativeModules;

type PromptConfig = { promptTitle?: string, promptSubTitle?: string }

interface LocalAuthenticationInterface {
  authenticate(payload: PromptConfig): Promise<{
    success: boolean
  }>;
}

export default LocalAuthentication as LocalAuthenticationInterface;
