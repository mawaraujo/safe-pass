import React from 'react';
import {View, Text} from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import type {NPassword} from '../../types';

interface IPasswordDetailsProps {
  route?: {
    params: {
      password: NPassword.Password
    }
  }
}

export default function PasswordDetails({route}: IPasswordDetailsProps) {
  const password = route?.params?.password;

  if (!password) {
    return (
      null
    );
  }

  return (
    <DefaultLayout>
      <NavigationBar name={password.name} />

      <View>
        <Text>Settings</Text>
      </View>
    </DefaultLayout>
  );
}
