import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthScreen = props => {
  const [loginMode, setLoginMode] = useState(true);
  return (
    <View style={styles.container}>
      {loginMode ? (
        <Login
          onLoginPressed={() => props.navigation.navigate("Home")}
          changeScreen={() => setLoginMode(false)}
        />
      ) : (
        <SignUp changeScreen={() => setLoginMode(true)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal"
  }
});

export default AuthScreen;
