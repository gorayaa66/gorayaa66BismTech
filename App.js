import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppContainer from "./src/Navigation/Navigator";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{ height: StatusBar.currentHeight, backgroundColor: "green" }}
      />
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal"
  },
  email: {
    borderRadius: 5
    // marginLeft : 'auto',
    // marginRight : 'auto'
  }
});
