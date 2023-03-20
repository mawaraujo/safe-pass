import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import settingsSlice from '../../../../store/reducers/settingsSlice';
import { Card } from '../../../../components/card';
import { ItemSwitch } from '../../../../components/item';
import { useTranslation } from 'react-i18next';
import LocalAuthentication from '../../../../modules/localAuthentication/localAuthentication';
import alertSlice from '../../../../store/reducers/alertSlice';

export default function SecuritySection() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  const toggleLocalAuthentication = async () => {
    if (!settings.enableLocalAuthentication) {
      try {
        const result = await LocalAuthentication.isAvailable();

        if (result.available) {
          dispatch(
              settingsSlice.actions.toggleLocalAuthentication(),
          );

        } else {
          dispatch(
              alertSlice.actions.show({
                title: t('The device unlock system is not enabled') ?? 'The device unlock system is not enabled',
                type: 'Danger',
              }),
          );
        }

      } catch (error) {
        console.log(error);
      }

      return;
    }

    dispatch(
        settingsSlice.actions.toggleLocalAuthentication(),
    );
  };

  return (
    <Card>
      <ItemSwitch
        title={t('Unlock system') ?? 'Unlock system'}
        description={t('Unlock system summary') ?? 'Use your device unlock system to enter the app'}
        onChange={toggleLocalAuthentication}
        value={settings.enableLocalAuthentication} />
    </Card>
  );
}
