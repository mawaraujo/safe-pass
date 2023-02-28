import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './preview.styles';
import { useLink, useClipboard } from '../../hooks';
import { Navigation, Strings } from '../../utils';
import { Colors, Fonts, Screens } from '../../res';
import Confirm from '../../components/modal/confirm/confirm';
import passwordSlice from '../../store/reducers/passwordSlice';
import { useDispatch, useSelector } from 'react-redux';
import alertSlice from '../../store/reducers/alertSlice';
import Card from '../../components/card/card';
import { RootState } from '../../store/store';
import { useTranslation } from 'react-i18next';
import Button from '../../components/button/button';
import ClipboardButton from './components/clipboardButton/clipboardButton';
import Text from '../../components/text/text';

interface IPreviewProps {
  route?: {
    params: {
      passwordId: string
    }
  }
}

export default function Preview({ route }: IPreviewProps) {
  const { t } = useTranslation();

  const link = useLink();
  const dispatch = useDispatch();
  const clipboard = useClipboard();

  const [askDeletePassword, setAskDeletePassword] = React.useState<boolean>(false);

  const {
    tags,
    passwords,
  } = useSelector((state: RootState) => state);

  const passwordId = route?.params?.passwordId;
  const password= passwords.filter((p) => p.id === passwordId)?.[0];

  const handleCopy = React.useCallback((value?: string) => {
    if (value) {
      clipboard.set(value);
    }
  }, [clipboard]);

  const handleOpenLink = React.useCallback((value?: string) => {
    if (value) {
      link.open(value);
    }
  }, [link]);

  const editPassword = React.useCallback(() => {
    Navigation.navigate(
        Screens.CreatePassword.Name,
        {
          password,
        });
  }, [password]);

  const handleDelete = React.useCallback(() => {
    if (!password) return;

    dispatch(passwordSlice.actions.delete(password));
    setAskDeletePassword(false);
    Navigation.navigate(Screens.Main.Name);

    dispatch(
        alertSlice.actions.show({
          title: t('EntryDeleted') ?? 'Entry deleted successfully',
          type: 'Success',
        }),
    );
  }, [password]);

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
            onPress={() => setAskDeletePassword(true)}>

            <Icon
              name="trash-outline"
              size={Fonts.Size.Icon}
              color={Colors.System.Brand} />
          </TouchableOpacity>
        </View>
      </NavigationBar>

      {
        askDeletePassword && (
          <Confirm
            title={t('DeletePasswordTitle')}
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
              <Text size="2">URL</Text>
              <Text muted>
                { password.url || t('NoInformation').toString()}
              </Text>
            </View>

            {
              password.url && (
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => {
                    handleOpenLink(
                        Strings.addHttps(password.url),
                    );
                  }}>

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
              <Text size="2">{t('Username').toString()}</Text>
              <Text muted>
                { password.username || t('NoInformation').toString()}
              </Text>
            </View>

            {
              password.username && (
                <ClipboardButton
                  item={password.username}
                  onCopy={handleCopy} />
              )
            }
          </View>

          <View
            style={[
              styles.cardRow,
              styles.cardRowMarginBottom,
            ]}>

            <View style={styles.left}>
              <Text size="2">{t('Email').toString()}</Text>
              <Text muted>
                { password.email || t('NoInformation').toString()}
              </Text>
            </View>

            {
              password.email && (
                <ClipboardButton
                  item={password.email}
                  onCopy={handleCopy} />
              )
            }
          </View>

          <View
            style={[
              styles.cardRow,
              styles.cardRowMarginBottom,
            ]}>

            <View style={styles.left}>
              <Text size="2">{t('Password').toString()}</Text>
              <Text muted>
                { password.password ? '******' : t('NoInformation').toString()}
              </Text>
            </View>

            {
              password.password && (
                <ClipboardButton
                  item={password.password}
                  onCopy={handleCopy} />
              )
            }
          </View>

          <View
            style={[
              styles.cardRow,
              styles.cardRowMarginBottom,
            ]}>

            <View style={styles.left}>
              <Text size="2">{t('Tag').toString()}</Text>
              <Text muted>
                { getTagById(password.tagId) || t('NoInformation').toString()}
              </Text>
            </View>
          </View>

          <View style={styles.cardRow}>
            <View style={styles.left}>
              <Text size="2">{t('Notes').toString()}</Text>
              <Text muted>
                { password.notes || t('NoInformation').toString()}
              </Text>
            </View>
          </View>
        </Card>

        <Button
          text={t('Edit') ?? 'Edit'}
          onPress={editPassword} />
      </ScrollView>
    </DefaultLayout>
  );
}
