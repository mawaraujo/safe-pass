import {useDispatch} from 'react-redux';
import {NToast} from '../types';
import toastSlice from '../store/reducers/toastSlice';

export default function useToast() {
  const dispatch = useDispatch();

  const show = (toastValue: NToast.Toast) => {
    hide();

    setTimeout(() => {
      dispatch(
          toastSlice.actions.show(
              toastValue,
          ),
      );
    }, 300);
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
