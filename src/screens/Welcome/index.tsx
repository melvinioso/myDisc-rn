import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

// import { PX } from '../../theme';

function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Welcome to myDisc</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
} as any);

export default Welcome;
