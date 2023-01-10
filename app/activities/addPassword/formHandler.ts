import * as yup from 'yup';
import NPassword from '../../types/password';

export default class FormHandler {

  public static validationSchema = yup
      .object()
      .shape({
        name: yup.string().required(),
        email: yup.string().email(),
        username: yup.string(),
        url: yup.string().url(),
        password: yup.string(),
        notes: yup.string(),
      });

  public static initialValues: NPassword.Password = {
    id: '',
    name: '',
    url: '',
    username: '',
    password: '',
    email: '',
    notes: '',
  }
}
