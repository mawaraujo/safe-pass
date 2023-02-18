import React from 'react';
import { Text } from 'react-native';
import confirmStyles from './confirm.styles';
import Button from '../../button/button';
import BaseModal from '../base/base';

interface IConfirmProps {
  title: string,
  extraInformation?: string,
  onAccept?: () => void,
  onCancel?: () => void,
  show: boolean
}

export default function Confirm({ show, title, onCancel, onAccept, extraInformation }: IConfirmProps) {

  const handleAccept = () => {
    if (onAccept) {
      onAccept();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <BaseModal show={show}>
      <Text style={confirmStyles.title}>{title}</Text>

      {
        extraInformation && (
          <Text style={confirmStyles.extraInformation}>
            {extraInformation}
          </Text>
        )
      }
      <Button
        onPress={handleAccept}
        style={confirmStyles.acceptButton}
        text="Accept" />

      <Button
        onPress={handleCancel}
        style={confirmStyles.cancelButton}
        textStyle={confirmStyles.cancelButtonText}
        text="Cancel" />
    </BaseModal>
  );
}
