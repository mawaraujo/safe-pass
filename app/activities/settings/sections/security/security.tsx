import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import settingsSlice from '../../../../store/reducers/settingsSlice';
import Card from '../../../../components/card/card';
import ItemSwitch from '../../../../components/itemSwitch/itemSwitch';

export default function SecuritySection() {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  const toggleLocalAuthentication = () => {
    dispatch(
        settingsSlice.actions.toggleLocalAuthentication(),
    );
  };

  return (
    <Card>
      <ItemSwitch
        firstItem={true}
        title="Unlock system"
        description="Use your device unlock system to enter the app"
        onChange={toggleLocalAuthentication}
        value={settings.enableLocalAuthentication} />
    </Card>
  );
}
