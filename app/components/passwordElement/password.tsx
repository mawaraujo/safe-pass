import React from 'react';
import {View, Text} from 'react-native';
import type {NPassword} from '../../types';

interface IPasswordElementProps {
  item: NPassword.Password
}

export default function PasswordElement({item}: IPasswordElementProps) {
  return (
    <View>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );
}
