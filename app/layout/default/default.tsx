import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import BottomTab from '../../components/bottomTab/bottomTab';
import { Colors } from '../../res';

interface IDefaultProps {
  statusBar?: StatusBarProps
  children?: React.ReactNode,
  style?: ViewStyle,
  bottomTab?: boolean,
}

const initialStatusBarConfig: StatusBarProps = {
  backgroundColor: Colors.Light.BackgroundColor,
  barStyle: 'dark-content',
};

export default function Default({
  statusBar = initialStatusBarConfig,
  children,
  style,
  bottomTab = true,
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

      {
        bottomTab && (
          <BottomTab />
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Light.BackgroundColor,
  },
});
