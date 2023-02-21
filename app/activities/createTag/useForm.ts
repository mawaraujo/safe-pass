import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import type { NTag } from '../../types';

export default function useForm() {
  const { t } = useTranslation();

  const validationSchema = useMemo(() => (
    yup
        .object()
        .shape({
          id: yup.string(),
          name: yup.string().required(t('The field is required') ?? 'The field is required'),
        })
  ), [t]);

  const initialValues: NTag.Tag = useMemo(() => ({
    id: '',
    name: '',
  }), []);

  return {
    validationSchema,
    initialValues,
  };
}
