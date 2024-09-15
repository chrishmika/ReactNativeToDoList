import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  pSize: {
    fontSize: 20,
  },
});

function Settings() {
  return (
    <SafeAreaView>
      <View style={styles.container}>Settings</View>
    </SafeAreaView>
  );
}

export default Settings;
