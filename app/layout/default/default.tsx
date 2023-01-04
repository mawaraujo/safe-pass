import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../res';

interface IDefaultProps {
  statusBar?: StatusBarProps
  children?: React.ReactNode,
  style?: ViewStyle
}

const initialStatusBarConfig: StatusBarProps = {
  backgroundColor: Colors.System.BrandSemiLight,
  barStyle: 'light-content',
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
