import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../res';

interface IDefaultProps {
  statusBar?: {
    backgroundColor?: string,
    barStyle?: 'light-content' | 'dark-content'
  },
  children?: React.ReactNode,
  style?: ViewStyle
}

const initialStatusBarConfig = {
  backgroundColor: Colors.System.BrandSemiLight,
  barStyle: 'light-content' as 'light-content',
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
