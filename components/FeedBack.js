import React, { useEffect } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  pSize: {
    display: "flex",
    justifyContent: "center",
    fontSize: 20,
  },
  feedbackText: {
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
  },
});

function FeedBack() {
  const [feedback, setFeedback] = React.useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <h1>Feedback</h1>
        <TextInput multiline={true} numberOfLines={4} placeholder="Enter your FeedBack here" style={styles.feedbackText} />
        <br />
        <Button
          title={"Add FeedBack"}
          onPress={() => {
            setFeedback("Comment added");
          }}
        />
      </View>
      <View style={styles.container}>
        <p style={styles.pSize}>{feedback}</p>
      </View>
    </SafeAreaView>
  );
}

export default FeedBack;
