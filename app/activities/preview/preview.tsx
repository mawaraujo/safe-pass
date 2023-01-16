import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import type {NPassword} from '../../types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './preview.styles';
import Button from '../../components/button/button';
import {useLink, useClipboard} from '../../hooks';
import {Navigation} from '../../utils';
import {Screens} from '../../res';
import Confirm from '../../components/confirm/confirm';
import passwordSlice from '../../store/reducers/passwordSlice';
import {useDispatch} from 'react-redux';
import toastSlice from '../../store/reducers/toastSlice';

interface IPreviewProps {
  route?: {
    params: {
      password: NPassword.Password
    }
  }
}

export default function Preview({route}: IPreviewProps) {

  const dispatch = useDispatch();
  const [askDeletePassword, setAskDeletePassword] = React.useState(false);

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

  const editPassword = () => {
    Navigation.navigate(
        Screens.createPassword.name,
        {
          password,
        });
  };

  const handleDelete = () => {
    dispatch(
        passwordSlice.actions.delete(
            password,
        ),
    );

    setAskDeletePassword(false);
    Navigation.navigate(Screens.main.name);

    dispatch(
        toastSlice.actions.show({
          title: 'Done',
          extraInformation: 'Entry deleted successfully',
          type: 'Success',
        }),
    );
  };

  return (
    <DefaultLayout>
      <NavigationBar
        name={password.name} />

      {
        askDeletePassword && (
          <Confirm
            title="¿Do you want to delete this entry?"
            extraInformation="This entry will delete forever"
            onAccept={handleDelete}
            onCancel={() => setAskDeletePassword(false)}
            show={askDeletePassword}
          />
        )
      }

      <ScrollView
        contentContainerStyle={styles.main}>

        <View style={styles.card}>
          <View
            style={[
              styles.cardRow,
              styles.cardRowMarginBottom,
            ]}>

            <View style={styles.left}>
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

            <View style={styles.left}>
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

            <View style={styles.left}>
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

            <View style={styles.left}>
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
            <View style={styles.left}>
              <Text style={styles.textLabel}>Notes</Text>
              <Text style={styles.textValue}>
                { password.notes || 'No information'}
              </Text>
            </View>
          </View>
        </View>

        <Button
          onPress={editPassword}
          style={styles.buttonMarginBottom}
          text="Edit" />

        <Button
          onPress={() => setAskDeletePassword(true)}
          style={styles.deleteButton}
          text="Delete" />
      </ScrollView>
    </DefaultLayout>
  );
}
