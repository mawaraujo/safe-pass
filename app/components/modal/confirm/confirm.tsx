import React from 'react';
import confirmStyles from './confirm.styles';
import Button from '../../button/button';
import BaseModal from '../base/base';
import { useTranslation } from 'react-i18next';
import Text from '../../text/text';

interface IConfirmProps {
  title: string,
  extraInformation?: string,
  onAccept?: () => void,
  onCancel?: () => void,
  show: boolean
}

export default function Confirm({ show, title, onCancel, onAccept, extraInformation }: IConfirmProps) {
  const { t } = useTranslation();

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
      <Text
        size="3"
        style={confirmStyles.title}>
        {title}
      </Text>

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
        text={t('Accept') ?? 'Accept'} />

      <Button
        onPress={handleCancel}
        style={confirmStyles.cancelButton}
        textStyle={confirmStyles.cancelButtonText}
        text={t('Cancel') ?? 'Cancel'} />
    </BaseModal>
  );
}
