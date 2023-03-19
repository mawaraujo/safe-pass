import React from 'react';
import { BackHandler, ScrollView } from 'react-native';
import Default from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import { FormikHelpers, useFormik } from 'formik';
import useForm from './useForm';
import Button from '../../components/button/button';
import styles from './createTag.styles';
import Input from '../../components/input/input';
import type { NTag } from '../../types';
import { useDispatch } from 'react-redux';
import tagSlice from '../../store/reducers/tagSlice';
import { Navigation } from '../../utils';
import screens from '../../res/screens';
import uuid from 'react-native-uuid';
import alertSlice from '../../store/reducers/alertSlice';
import { useTranslation } from 'react-i18next';
import Confirm from '../../components/modal/confirm/confirm';

interface ICreateTag {
  navigation: any,
  route?: {
    params: {
      tag: NTag.Tag
    }
  }
}

export default function CreateTag({ navigation, route }: ICreateTag) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    initialValues,
    validationSchema,
  } = useForm();

  const tag = route?.params?.tag;
  const [editMode, setEditMode] = React.useState(false);
  const [showExitModal, setShowExitModal] = React.useState<boolean>(false);

  const onSubmit = (
      value: NTag.Tag,
      _helpers: FormikHelpers<NTag.Tag>,
  ) => {

    // If not in edit mode, We will create a new password
    if (!editMode) {

      // Create a random uuid
      value.id = uuid.v4().toString();

      dispatch(
          tagSlice.actions.add(
              value,
          ),
      );

    } else {
      dispatch(
          tagSlice.actions.edit(
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

    Navigation.navigate(screens.Tags.Name);
  };

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialValues,
    onSubmit,
  });

  /**
   * Check if the screen will edit a password or create a new
   */
  React.useEffect(() => {
    if (tag && Object.keys(tag).length !== 0) {
      setEditMode(true);

      // Set the current password value on the formik state
      formik.setValues(tag);

      // Screen unmount on blur fix
      Navigation.setParams({
        tag: undefined,
      });
    }
  }, [tag]);

  React.useEffect(() => {
    const subscription = BackHandler
        .addEventListener('hardwareBackPress', () => {
          setShowExitModal(true);
          return true;
        });

    return subscription.remove;
  }, []);

  return (
    <Default bottomTab={false}>
      <NavigationBar
        name={
          editMode
          ? t('Edit tag') ?? 'Edit tag'
          : t('Create tag') ?? 'Create tag'
        } />

      <Confirm
        show={showExitModal}
        title={t('exitConfirmTitle').toString()}
        extraInformation={t('exitConfirmDescription').toString()}
        onAccept={navigation.goBack}
        onCancel={() => setShowExitModal(false)} />

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
          placeholder="Social"
        />

        <Button
          onPress={formik.handleSubmit as any}
          text={t('Save changes') ?? 'Save changes'} />
      </ScrollView>
    </Default>
  );
}
