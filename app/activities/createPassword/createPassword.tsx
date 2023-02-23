import React from 'react';
import { ScrollView } from 'react-native';
import Default from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import { FormikHelpers, useFormik } from 'formik';
import useForm from './useForm';
import Button from '../../components/button/button';
import styles from './createPassword.styles';
import Input from '../../components/input/input';
import InputAutocomplete from '../../components/inputAutocomplete/inputAutocomplete';
import Select from '../../components/select/select';
import type { NPassword } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import passwordSlice from '../../store/reducers/passwordSlice';
import { Navigation } from '../../utils';
import { Screens } from '../../res';
import uuid from 'react-native-uuid';
import alertSlice from '../../store/reducers/alertSlice';
import { RootState } from '../../store/store';
import { useTranslation } from 'react-i18next';

interface Props {
  route?: {
    params: {
      password: NPassword.Password
    }
  }
}

export default function CreatePassword({ route }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [
    editMode,
    setEditMode,
  ] = React.useState(false);

  const {
    initialValues,
    validationSchema,
  } = useForm();

  const tags = useSelector((state: RootState) => state.tags);
  const password = route?.params?.password;

  const onSubmit = (
      value: NPassword.Password,
      _helpers: FormikHelpers<NPassword.Password>,
  ) => {

    // If not in edit mode, We will create a new password
    if (!editMode) {

      // Create a random uuid
      value.id = uuid.v4().toString();

      dispatch(
          passwordSlice.actions.add(
              value,
          ),
      );

    } else {
      dispatch(
          passwordSlice.actions.edit(
              value,
          ),
      );
    }

    // Display success alert
    dispatch(
        alertSlice.actions.show({
          title: editMode
            ? t('EntryUpdated') ?? 'The entry was updated successfully'
            : t('EntryCreated') ?? 'The entry was created successfully',
          type: 'Success',
        }),
    );

    if (editMode) {
      Navigation.goBack();
      return;
    }

    Navigation.navigate(Screens.Main.Name);
  };

  const parsedTags = React.useMemo(() => (
    tags.map((tag) => ({ name: tag.name, value: tag.id }))
  ), [tags]);

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialValues,
    onSubmit,
  });

  /**
   * Check if the screen will edit a password or create a new
   */
  React.useEffect(() => {
    if (password && Object.keys(password).length !== 0) {
      setEditMode(true);

      // Set the current password value on the formik state
      formik.setValues(password);

      // Screen unmount on blur fix
      Navigation.setParams({
        password: undefined,
      });
    }
  }, [password]);

  return (
    <Default>
      <NavigationBar
        name={
          editMode
          ? t('Edit password') ?? 'Edit password'
          : t('Create password') ?? 'Create password'
        } />

      <ScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.container}>

        <Input
          value={formik.values.name}
          label={`${t('Name') ?? 'Name'}*`}
          autoCapitalize={'words'}
          validationError={formik.errors.name}
          onChangeText={(e) => {
            formik.setFieldValue('name', e);
          }}
          placeholder="Facebook Username"
        />

        <InputAutocomplete
          value={formik.values.url}
          autoCompleteList={['https://facebook.com', 'https://reddit.com', 'https://twitter.com', 'https://udemy.com', 'https://mastodon.com', 'https://wikipedia.com']}
          label={t('Site or Application') ?? 'Site or Application'}
          validationError={formik.errors.url}
          autoCapitalize={'none'}
          onChangeText={(e) => {
            formik.setFieldValue('url', e);
          }}
          placeholder="www.facebook.com"
        />

        <Input
          value={formik.values.username}
          label={t('Username') ?? 'Username'}
          accessibilityHint="username"
          autoCapitalize={'none'}
          validationError={formik.errors.username}
          onChangeText={(e) => {
            formik.setFieldValue('username', e);
          }}
          placeholder="myusername1"
        />

        <Input
          value={formik.values.email}
          label={t('Email') ?? 'Email'}
          accessibilityHint="email_address"
          autoCapitalize={'none'}
          validationError={formik.errors.email}
          onChangeText={(e) => {
            formik.setFieldValue('email', e);
          }}
          placeholder="email@example.com"
        />

        <Input
          value={formik.values.password}
          label={t('Password') ?? 'Password'}
          secureTextEntry={true}
          accessibilityHint="password"
          validationError={formik.errors.password}
          onChangeText={(e) => {
            formik.setFieldValue('password', e);
          }}
          placeholder="*****"
        />

        <Select
          value={formik.values.tagId}
          label={t('Tag') ?? 'Tag'}
          validationError={formik.errors.notes}
          options={parsedTags}
          onChangeText={(tagId: string) => {
            formik.setFieldValue('tagId', tagId);
          }}
        />

        <Input
          value={formik.values.notes}
          label={t('Notes') ?? 'Notes'}
          numberOfLines={3}
          textAlignVerticalTop={true}
          multiline={true}
          validationError={formik.errors.notes}
          onChangeText={(e) => {
            formik.setFieldValue('notes', e);
          }}
        />

        <Button
          onPress={formik.handleSubmit as any}
          text={t('Save changes') ?? 'Save changes'} />
      </ScrollView>
    </Default>
  );
}
