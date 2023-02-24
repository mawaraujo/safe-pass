import { useMemo, useState } from 'react';
import * as yup from 'yup';
import NPassword from '../../types/password';
import { useTranslation } from 'react-i18next';

export default function useForm() {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const validationSchema = useMemo(() => (
    yup
        .object()
        .shape({
          name: yup.string().required(t('The field is required') ?? 'The field is required'),
          email: yup.string().email(t('Invalid email') ?? 'Invalid email'),
          username: yup.string(),
          url: yup.string(),
          password: yup.string(),
          notes: yup.string(),
          tagId: yup.string(),
        })
  ), [t]);

  const initialValues: NPassword.Password = useMemo(() => ({
    id: '',
    name: '',
    url: '',
    username: '',
    password: '',
    email: '',
    notes: '',
    tagId: '',
  }), []);

  return {
    validationSchema,
    initialValues,
    editMode,
    setEditMode,
    showPassword,
    setShowPassword,
  };
}

