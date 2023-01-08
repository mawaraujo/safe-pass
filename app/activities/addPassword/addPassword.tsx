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

      <ScrollView contentContainerStyle={styles.container}>

        <TextInput
          label="Site or Application"
          validationError={formik.errors.url}
          onChangeText={(e) => {
            formik.setFieldValue('url', e);
          }}
          placeholder="https://www.facebook.com"
        />

        <TextInput
          label="Username"
          accessibilityHint="username"
          validationError={formik.errors.username}
          onChangeText={(e) => {
            formik.setFieldValue('username', e);
          }}
          placeholder="myusername1"
        />

        <TextInput
          label="Email"
          accessibilityHint="email_address"
          validationError={formik.errors.email}
          onChangeText={(e) => {
            formik.setFieldValue('email', e);
          }}
          placeholder="email@example.com"
        />

        <TextInput
          label="Password"
          secureTextEntry={true}
          accessibilityHint="password"
          validationError={formik.errors.password}
          onChangeText={(e) => {
            formik.setFieldValue('password', e);
          }}
          placeholder="*****"
        />

        <Button
          onPress={formik.handleSubmit}
          text="Create password" />

      </ScrollView>
    </Default>
  );
}
