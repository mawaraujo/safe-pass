import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './preview.styles';
import { useLink, useClipboard } from '../../hooks';
import { Navigation } from '../../utils';
import { Colors, Fonts, Screens } from '../../res';
import Confirm from '../../components/modal/confirm/confirm';
import passwordSlice from '../../store/reducers/passwordSlice';
import { useDispatch, useSelector } from 'react-redux';
import toastSlice from '../../store/reducers/toastSlice';
import Card from '../../components/card/card';
import { RootState } from '../../store/store';

interface IPreviewProps {
  route?: {
    params: {
      passwordId: string
    }
  }
}

export default function Preview({ route }: IPreviewProps) {
  const dispatch = useDispatch();
  const [askDeletePassword, setAskDeletePassword] = React.useState(false);
  const clipboard = useClipboard();
  const link = useLink();

  const { tags, passwords } = useSelector((state: RootState) => state);

  const passwordId = route?.params?.passwordId;
  const password= passwords.filter((p) => p.id === passwordId)?.[0];

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
        Screens.CreatePassword.Name,
        {
          password,
        });
  };

  const handleDelete = () => {
    if (!password) return;

    dispatch(
        passwordSlice.actions.delete(
            password,
        ),
    );

    setAskDeletePassword(false);
    Navigation.navigate(Screens.Main.Name);

    dispatch(
        toastSlice.actions.show({
          title: 'Done',
          extraInformation: 'Entry deleted successfully',
          type: 'Success',
        }),
    );
  };

  /**
   * Get tag name by ID
   */
  const getTagById = React.useCallback((id?: string): string => {
    return tags
        .filter((tag) => tag.id === id)
        ?.[0]
        ?.name;
  }, [tags]);

  if (!password) {
    return (
      null
    );
  }

  return (
    <DefaultLayout>
      <NavigationBar
        name={password.name}>

        <View style={styles.navActions}>
          <TouchableOpacity
            onPress={editPassword}>

            <Icon
              name="create-outline"
              size={Fonts.Size.LG}
              color={Colors.System.Brand} />

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAskDeletePassword(true)}>

            <Icon
              name="trash-outline"
              size={Fonts.Size.LG}
              color={Colors.System.Brand} />
          </TouchableOpacity>
        </View>
      </NavigationBar>

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

        <Card>
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
                  style={styles.actionButton}
                  onPress={() => handleOpenLink(password.url)}>

                  <Icon
                    color={Colors.System.White}
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
                  style={styles.actionButton}
                  onPress={() => handleCopy(password.username)}>

                  <Icon
                    color={Colors.System.White}
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
                  style={styles.actionButton}
                  onPress={() => handleCopy(password.email)}>

                  <Icon
                    color={Colors.System.White}
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
                  style={styles.actionButton}
                  onPress={() => handleCopy(password.password)}>

                  <Icon
                    color={Colors.System.White}
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
              <Text style={styles.textLabel}>Tag</Text>
              <Text style={styles.textValue}>
                { getTagById(password.tagId) || 'No information' }
              </Text>
            </View>
          </View>

          <View style={styles.cardRow}>
            <View style={styles.left}>
              <Text style={styles.textLabel}>Notes</Text>
              <Text style={styles.textValue}>
                { password.notes || 'No information'}
              </Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    </DefaultLayout>
  );
}
