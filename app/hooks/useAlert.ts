import { useDispatch } from 'react-redux';
import { NAlert } from '../types';
import alertSlice from '../store/reducers/alertSlice';

export default function useAlert() {
  const dispatch = useDispatch();

  const show = (value: NAlert.Alert) => {
    dispatch(
        alertSlice.actions.show(
            value,
        ),
    );
  };

  const hide = () => {
    dispatch(
        alertSlice.actions.hide(),
    );
  };

  return {
    show,
    hide,
  };
}
