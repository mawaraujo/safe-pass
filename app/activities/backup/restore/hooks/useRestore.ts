import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import passwordSlice from '../../../../store/reducers/passwordSlice';
import tagSlice from '../../../../store/reducers/tagSlice';
import { RootState } from '../../../../store/store';
import { NPassword, NTag } from '../../../../types';

export default function useRestore() {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state);

  const [importedPasswords, setImportedPasswords] = useState<NPassword.VerifiedPasswords>([]);
  const [importedTags, setImportedTags] = useState<NTag.VerifiedTags>([]);

  const [passwordsToSave, setPasswordsToSave] = useState<NPassword.Passwords>([]);
  const [tagsToSave, setTagsToSave] = useState<NTag.Tags>([]);

  const hasElementsToSave: boolean = (importedPasswords.length > 0 || importedTags.length > 0);

  const addPaswordToSave = (password: NPassword.Password) => (
    setPasswordsToSave([
      ...passwordsToSave,
      password,
    ])
  );

  const removePasswordToSave = (password: NPassword.Password): void => {
    const results = passwordsToSave.filter((p) =>
      p.id !== password.id);

    setPasswordsToSave(results);
  };

  const addTagToSave = (tag: NTag.Tag): void => (
    setTagsToSave([
      ...tagsToSave,
      tag,
    ])
  );


  const removeTagToSave = (tag: NTag.Tag): void => {
    const results = tagsToSave.filter((p) =>
      p.id !== tag.id);

    setTagsToSave(results);
  };

  const checkDuplicatedPasswords = (passwords: NPassword.Passwords): NPassword.VerifiedPasswords => {
    return passwords.map((newPassword) => {
      if (state.passwords.some((userPassword) => userPassword.id === newPassword.id)) {
        return {
          ...newPassword,
          duplicated: true,
        };
      }

      return newPassword;
    });
  };

  const importPasswords = (): void => {
    dispatch(
        passwordSlice.actions.import(
            passwordsToSave,
        ),
    );
  };

  const checkDuplicatedTags = (tags: NTag.Tags): NTag.VerifiedTags => {
    return tags.map((newTag) => {
      if (state.tags.some((t) => t.id === newTag.id)) {
        return {
          ...newTag,
          duplicated: true,
        };
      }

      return newTag;
    });
  };

  const importTags = (): void => {
    dispatch(
        tagSlice.actions.import(
            tagsToSave,
        ),
    );
  };

  const reset = (): void => {
    setImportedPasswords([]);
    setImportedTags([]);
    setPasswordsToSave([]);
    setTagsToSave([]);
  };

  return {
    importPasswords,
    importTags,
    checkDuplicatedPasswords,
    checkDuplicatedTags,
    importedPasswords,
    setImportedPasswords,
    importedTags,
    setImportedTags,
    hasElementsToSave,
    passwordsToSave,
    setPasswordsToSave,
    addPaswordToSave,
    removePasswordToSave,
    tagsToSave,
    setTagsToSave,
    addTagToSave,
    removeTagToSave,
    reset,
  };
}
