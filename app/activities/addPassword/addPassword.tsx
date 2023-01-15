import React from 'react';
import {ScrollView} from 'react-native';
import Default from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import {FormikHelpers, useFormik} from 'formik';
import FormHandler from './formHandler';
import Button from '../../components/button/button';
import styles from './addPassword.styles';
import TextInput from '../../components/textInput/textInput';
import type {NPassword} from '../../types';
import {useDispatch} from 'react-redux';
import passwordSlice from '../../store/reducers/passwordSlice';
import {Navigation} from '../../utils';
import screens from '../../res/screens';

export default function AddPassword() {
  const dispatch = useDispatch();
  const {validationSchema, initialValues} = FormHandler;

  const onSubmit = (value: NPassword.Password, helpers: FormikHelpers<NPassword.Password>) => {
    dispatch(
        passwordSlice
            .actions
            .add(value),
    );

    helpers.resetForm();
    Navigation.navigate(screens.main.name);
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  return (
    <Default>
      <NavigationBar
        name="Create Password" />

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
          text="Create password" />

      </ScrollView>
    </Default>
  );
}
