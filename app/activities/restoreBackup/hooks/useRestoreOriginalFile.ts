import { useDispatch, useSelector } from 'react-redux';
import passwordSlice from '../../../store/reducers/passwordSlice';
import tagSlice from '../../../store/reducers/tagSlice';
import { RootState } from '../../../store/store';
import { NPassword, NTag } from '../../../types';

export default function useRestoreOriginalFile() {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state);

  const importPasswords = (passwords: NPassword.Passwords): void => {
    if (!passwords || !passwords?.length) return;

    const filteredPasswords = passwords.filter((newPassword) => {
      if (state.passwords.some((userPassword) => userPassword.id === newPassword.id)) return false;
      return newPassword;
    });

    dispatch(
        passwordSlice.actions.import(
            filteredPasswords,
        ),
    );
  };

  const importTags = (tags: NTag.Tags): void => {
    if (!tags || !tags?.length) return;

    const filteredTags = tags.filter((newTag) => {
      if (state.tags.some((userTag) => userTag.id === newTag.id)) return false;
      return newTag;
    });

    dispatch(
        tagSlice.actions.import(
            filteredTags,
        ),
    );
  };

  return {
    importPasswords,
    importTags,
  };
}
