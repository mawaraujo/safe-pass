import * as yup from 'yup';
import NPassword from '../../types/password';

export default class FormHandler {

  public static validationSchema = yup
      .object()
      .shape({
        email: yup.string().email(),
        username: yup.string(),
        url: yup.string().url(),
        password: yup.string().required(),
        notes: yup.string(),
      });

  public static initialValues: NPassword.Password = {
    id: '',
    url: '',
    username: '',
    password: '',
    email: '',
    notes: '',
  }
}
