import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function LoadingScreen() {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => (prevText.endsWith("...") ? "Loading" : prevText + "."));
    }, 400);

    return () => clearInterval(interval);
  }, [loadingText]);

  return (
    <View style={styles.loadingPage}>
      <ActivityIndicator size="large" color="#ADDFFF" />
      <Text style={styles.loadingText}>{loadingText}</Text>
    </View>
  );
}

//css styles in down
const styles = StyleSheet.create({
  loadingPage: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loadingText: {
    fontFamily: "Arial",
    marginTop: 20,
    color: "#ADDFFF",
    fontWeight: "bold",
  },
});
