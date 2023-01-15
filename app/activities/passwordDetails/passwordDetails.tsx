import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import type {NPassword} from '../../types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './passwordDetails.styles';
import Button from '../../components/button/button';
import useClipboard from '../../hooks/useClipboard';
import useLink from '../../hooks/useLink';

interface IPasswordDetailsProps {
  route?: {
    params: {
      password: NPassword.Password
    }
  }
}

export default function PasswordDetails({route}: IPasswordDetailsProps) {
  const clipboard = useClipboard();
  const link = useLink();

  const password = route?.params?.password;

  if (!password) {
    return (
      null
    );
  }

  const handleCopy = (value?: string) => {
    if (!value) {
      return;
    }

    clipboard.set(value);
  };

  const handleOpenLink = (value?: string) => {
    if (!value) {
      return;
    }

    link.open(value);
  };

  return (
    <DefaultLayout>
      <NavigationBar
        name={password.name} />

      <ScrollView
        contentContainerStyle={styles.main}>

        <View style={styles.card}>
          <View
            style={[
              styles.cardRow,
              styles.cardRowMarginBottom,
            ]}>

            <View>
              <Text style={styles.textLabel}>URL</Text>
              <Text style={styles.textValue}>
                { password.url || 'No information'}
              </Text>
            </View>

            {
              password.url && (
                <TouchableOpacity
                  onPress={() => handleOpenLink(password.url)}>

                  <Icon
                    name="open-outline"
                    size={20} />
                </TouchableOpacity>
              )
            }
          </View>

          <View
            style={[
              styles.cardRow,
              styles.cardRowMarginBottom,
            ]}>

            <View>
              <Text style={styles.textLabel}>Username</Text>
              <Text style={styles.textValue}>
                { password.username || 'No information'}
              </Text>
            </View>

            {
              password.username && (
                <TouchableOpacity
                  onPress={() => handleCopy(password.username)}>

                  <Icon
                    name="clipboard-outline"
                    size={20} />
                </TouchableOpacity>
              )
            }
          </View>

          <View
            style={[
              styles.cardRow,
              styles.cardRowMarginBottom,
            ]}>

            <View>
              <Text style={styles.textLabel}>Email</Text>
              <Text style={styles.textValue}>
                { password.email || 'No information'}
              </Text>
            </View>

            {
              password.email && (
                <TouchableOpacity
                  onPress={() => handleCopy(password.email)}>

                  <Icon
                    name="clipboard-outline"
                    size={20} />
                </TouchableOpacity>
              )
            }
          </View>

          <View
            style={[
              styles.cardRow,
              styles.cardRowMarginBottom,
            ]}>

            <View>
              <Text style={styles.textLabel}>Password</Text>
              <Text style={styles.textValue}>
                { password.password ? '******' : 'No information'}
              </Text>
            </View>

            {
              password.password && (
                <TouchableOpacity
                  onPress={() => handleCopy(password.password)}>

                  <Icon
                    name="clipboard-outline"
                    size={20} />
                </TouchableOpacity>
              )
            }
          </View>

          <View style={styles.cardRow}>
            <View>
              <Text style={styles.textLabel}>Notes</Text>
              <Text style={styles.textValue}>
                { password.notes || 'No information'}
              </Text>
            </View>
          </View>
        </View>

        <Button
          style={styles.buttonMarginBottom}
          text="Edit" />

        <Button
          style={styles.deleteButton}
          text="Delete" />
      </ScrollView>
    </DefaultLayout>
  );
}
