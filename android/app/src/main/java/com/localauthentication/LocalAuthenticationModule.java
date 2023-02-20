/**
 * Local Authentication Module
 *
 * This module has based on react-native-biometrics package, see more in https://github.com/SelfLender/react-native-biometrics.
 * It uses the device lock system as the fingerprint, pattern, pin, etc.
 *
 * @Author Mauro Araujo
 * @Email e.mauroar@gmail.com
 */

package com.localauthentication;

import androidx.biometric.BiometricManager;
import androidx.biometric.BiometricPrompt;
import androidx.fragment.app.FragmentActivity;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import java.util.concurrent.Executors;

public class LocalAuthenticationModule extends ReactContextBaseJavaModule {
  LocalAuthenticationModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "LocalAuthentication";
  }

  @ReactMethod
  public void isAvailable(final Promise promise) {
    try {
      ReactApplicationContext reactApplicationContext = getReactApplicationContext();
      BiometricManager biometricManager = BiometricManager.from(reactApplicationContext);
      WritableMap resultMap = new WritableNativeMap();

      switch (biometricManager.canAuthenticate(BiometricManager.Authenticators.BIOMETRIC_STRONG | BiometricManager.Authenticators.DEVICE_CREDENTIAL)) {
        case BiometricManager.BIOMETRIC_SUCCESS:
          resultMap.putBoolean("available", true);
          break;

        case BiometricManager.BIOMETRIC_ERROR_NO_HARDWARE:
          resultMap.putBoolean("available", false);
          resultMap.putString("error", "BIOMETRIC_ERROR_NO_HARDWARE");
          break;

        case BiometricManager.BIOMETRIC_ERROR_HW_UNAVAILABLE:
          resultMap.putBoolean("available", false);
          resultMap.putString("error", "BIOMETRIC_ERROR_HW_UNAVAILABLE");
          break;

        case BiometricManager.BIOMETRIC_ERROR_NONE_ENROLLED:
          resultMap.putBoolean("available", false);
          resultMap.putString("error", "BIOMETRIC_ERROR_NONE_ENROLLED");
          break;
      }

      promise.resolve(resultMap);
    } catch(Exception e) {
      promise.reject("Error detecting biometrics availability: " + e.getMessage(), "Error detecting biometrics availability: " + e.getMessage());
    }
  }

  @ReactMethod
  public void authenticate(final ReadableMap params, final Promise promise) {
    String promptTitle = params.getString("promptTitle");
    String promptSubTitle = params.getString("promptSubTitle");

    UiThreadUtil.runOnUiThread(() -> {
      try {
        FragmentActivity fragmentActivity = (FragmentActivity) getCurrentActivity();
        PromptCallback authCallback = new PromptCallback(promise);

        BiometricPrompt biometricPrompt = new BiometricPrompt(
                fragmentActivity, Executors.newSingleThreadExecutor(), authCallback);

        biometricPrompt.authenticate(
                getPromptInfo(
                        promptTitle,
                        promptSubTitle
                )
        );

      } catch (Exception e) {
        promise.reject(e.getMessage(), e.getMessage());
      }
    });
  }

  private BiometricPrompt.PromptInfo getPromptInfo(String title, String subTitle) {
    BiometricPrompt.PromptInfo.Builder builder = new BiometricPrompt.PromptInfo.Builder();

    builder.setTitle(title);
    builder.setSubtitle(subTitle);
    builder.setAllowedAuthenticators(this.getAllowedAuthenticators());

    return builder.build();
  }

  private int getAllowedAuthenticators() {
    return (
      BiometricManager.Authenticators.BIOMETRIC_STRONG | BiometricManager.Authenticators.DEVICE_CREDENTIAL
    );
  }

}