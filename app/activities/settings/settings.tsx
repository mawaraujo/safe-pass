import React from 'react';
import {Text, ScrollView} from 'react-native';
import DefaultLayout from '../../layout/default/default';
import NavigationBar from '../../components/navigationBar/navigationBar';
import ApplicationInfo from '../../../app.json';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import settingsSlice from '../../store/reducers/settingsSlice';
import Card from '../../components/card/card';
import settingsStyles from './settings.styles';
import ItemSwitch from '../../components/itemSwitch/itemSwitch';

export default function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  const toggleLocalAuthentication = () => {
    dispatch(
        settingsSlice.actions.toggleLocalAuthentication(),
    );
  };

  return (
    <DefaultLayout>
      <NavigationBar name="Settings" />

      <ScrollView
        contentContainerStyle={settingsStyles.container}>

        <Text style={settingsStyles.sectionTitle}>
          Security
        </Text>

        <Card>
          <ItemSwitch
            firstItem={true}
            title="Unlock system"
            description="Use your device unlock system to enter the app"
            onChange={toggleLocalAuthentication}
            value={settings.enableLocalAuthentication} />
        </Card>

        <Text
          style={settingsStyles.appVersion}>
          Version {ApplicationInfo.version}
        </Text>
      </ScrollView>
    </DefaultLayout>
  );
}
