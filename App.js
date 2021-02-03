import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Profile from './screen/profile'

export default function App() {
  return (
    <View style={styles.container}>
      <Profile  name="FatemahSama"  phone="0799878790" email="fatemah@gmail.com"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
