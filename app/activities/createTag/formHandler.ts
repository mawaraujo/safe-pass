import * as yup from 'yup';
import type { NTag } from '../../types';

export default class FormHandler {

  public static validationSchema = yup
      .object()
      .shape({
        id: yup.string(),
        name: yup.string().required(),
      });

  public static initialValues: NTag.Tag = {
    id: '',
    name: '',
  }
}
