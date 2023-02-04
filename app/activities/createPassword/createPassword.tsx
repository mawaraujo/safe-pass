import React from 'react';
import {ScrollView} from 'react-native';
import Default from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import {FormikHelpers, useFormik} from 'formik';
import FormHandler from './formHandler';
import Button from '../../components/button/button';
import styles from './createPassword.styles';
import TextInput from '../../components/textInput/textInput';
import type {NPassword} from '../../types';
import {useDispatch} from 'react-redux';
import passwordSlice from '../../store/reducers/passwordSlice';
import {Navigation} from '../../utils';
import screens from '../../res/screens';
import uuid from 'react-native-uuid';
import toastSlice from '../../store/reducers/toastSlice';

interface IAddPAsswordProps {
  route?: {
    params: {
      password: NPassword.Password
    }
  }
}

export default function ManagePassword({route}: IAddPAsswordProps) {
  const dispatch = useDispatch();

  const password = route?.params?.password;
  const [editMode, setEditMode] = React.useState(false);

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

    // Display success toast
    dispatch(
        toastSlice.actions.show({
          title: 'Done',
          extraInformation: `The entry was ${editMode ? 'updated' : 'created'} successfully`,
          type: 'Success',
        }),
    );

    Navigation.navigate(screens.Main.Name);
  };

  const formik = useFormik({
    validationSchema: FormHandler.validationSchema,
    initialValues: FormHandler.initialValues,
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
        name={editMode ? 'Update Entry' : 'Create Entry'} />

      <ScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.container}>

        <TextInput
          value={formik.values.name}
          label="Name"
          autoCapitalize={'words'}
          validationError={formik.errors.name}
          onChangeText={(e) => {
            formik.setFieldValue('name', e);
          }}
          placeholder="Facebook Username"
        />

        <TextInput
          value={formik.values.url}
          label="Site or Application"
          validationError={formik.errors.url}
          autoCapitalize={'none'}
          onChangeText={(e) => {
            formik.setFieldValue('url', e);
          }}
          placeholder="https://www.facebook.com"
        />

        <TextInput
          value={formik.values.username}
          label="Username"
          accessibilityHint="username"
          autoCapitalize={'none'}
          validationError={formik.errors.username}
          onChangeText={(e) => {
            formik.setFieldValue('username', e);
          }}
          placeholder="myusername1"
        />

        <TextInput
          value={formik.values.email}
          label="Email"
          accessibilityHint="email_address"
          autoCapitalize={'none'}
          validationError={formik.errors.email}
          onChangeText={(e) => {
            formik.setFieldValue('email', e);
          }}
          placeholder="email@example.com"
        />

        <TextInput
          value={formik.values.password}
          label="Password"
          secureTextEntry={true}
          accessibilityHint="password"
          validationError={formik.errors.password}
          onChangeText={(e) => {
            formik.setFieldValue('password', e);
          }}
          placeholder="*****"
        />

        <TextInput
          value={formik.values.notes}
          label="Notes"
          numberOfLines={3}
          textAlignVerticalTop={true}
          multiline={true}
          validationError={formik.errors.notes}
          onChangeText={(e) => {
            formik.setFieldValue('notes', e);
          }}
        />

        <Button
          onPress={formik.handleSubmit}
          text="Save changes" />
      </ScrollView>
    </Default>
  );
}
