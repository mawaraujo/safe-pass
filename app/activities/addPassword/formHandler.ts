import * as yup from 'yup';
import NPassword from '../../types/password';

export default class FormHandler {

  public static validationSchema = yup
      .object()
      .shape({
        email: yup.string(),
        username: yup.string(),
        url: yup.string(),
        password: yup.string().required(),
      });

  public static initialValues: NPassword.Password = {
    id: '',
    url: '',
    username: '',
    password: '',
    email: '',
  }
}
