import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>J</Text>
        </View>

        <View style={styles.userContainer}>
          <Text style={styles.welcomeText}>
            Welcome,
          </Text>

          <Text style={styles.usernameText}>
            John Doe
          </Text>
        </View>
      </View>

    </View>
  );
}
