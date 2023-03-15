import { useDispatch, useSelector } from 'react-redux';
import passwordSlice from '../../../../store/reducers/passwordSlice';
import tagSlice from '../../../../store/reducers/tagSlice';
import { RootState } from '../../../../store/store';
import { NPassword, NTag } from '../../../../types';

export default function useRestoreFile() {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state);

  const deleteDuplicatedPasswords = (passwords: NPassword.Passwords) => {
    return passwords.filter((newPassword) => {
      if (state.passwords.some((userPassword) => userPassword.id === newPassword.id)) {
        return false;
      }
      return newPassword;
    });
  };

  const importPasswords = (passwords: NPassword.Passwords): void => {
    if (!passwords || !passwords?.length) return;

    dispatch(
        passwordSlice.actions.import(
            deleteDuplicatedPasswords(passwords),
        ),
    );
  };

  const deleteDuplicatedTags = (tags: NTag.Tags) => {
    return tags.filter((newTag) => {
      if (state.tags.some((t) => t.id === newTag.id)) {
        return false;
      }
      return newTag;
    });
  };

  const importTags = (tags: NTag.Tags): void => {
    if (!tags || !tags?.length) return;

    dispatch(
        tagSlice.actions.import(
            deleteDuplicatedTags(tags),
        ),
    );
  };

  return {
    importPasswords,
    importTags,
    deleteDuplicatedPasswords,
    deleteDuplicatedTags,
  };
}
