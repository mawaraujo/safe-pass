import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../res';
import Toast from '../../components/toast/toast';

interface IDefaultProps {
  statusBar?: StatusBarProps
  children?: React.ReactNode,
  style?: ViewStyle
}

const initialStatusBarConfig: StatusBarProps = {
  backgroundColor: Colors.Light.BackgroundColor,
  barStyle: 'dark-content',
};

export default function Default({
  statusBar = initialStatusBarConfig,
  children,
  style,
}: IDefaultProps) {

  return (
    <SafeAreaView
      style={[
        styles.container,
        style && style,
      ]}>
      { statusBar && (
        <StatusBar {...statusBar} />
      )}

      <Toast />
      { children && children }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Light.BackgroundColor,
  },
});
