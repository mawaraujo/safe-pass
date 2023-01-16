import {useDispatch} from 'react-redux';
import {NToast} from '../types';
import toastSlice from '../store/reducers/toastSlice';

export default function useToast() {
  const dispatch = useDispatch();

  const show = (toastValue: NToast.Toast) => {
    dispatch(
        toastSlice.actions.show(
            toastValue,
        ),
    );
  };

  const hide = () => {
    dispatch(
        toastSlice.actions.hide(),
    );
  };

  return {
    show,
    hide,
  };
}
