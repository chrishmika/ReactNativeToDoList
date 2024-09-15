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

const FAQ = () => {
  return (
    <div>
      <SafeAreaView>
        <View style={styles.container}>
          <h1>Common Quections</h1>
          <h2>Q: What is the purpose of this app?</h2>
          <p style={styles.pSize}>A: This app is designed to help users track their daily activities and habits.</p>
          <h2>Q: How do I use this app?</h2>
          <p style={styles.pSize}>
            A: Open the app <br />
            B: Create your Task <br />
            C: Add your Task to your daily routine <br />
            D: Track your daily activities and habits
          </p>
        </View>
      </SafeAreaView>
    </div>
  );
};

export default FAQ;
