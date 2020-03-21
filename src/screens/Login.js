import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import DefaultInput from "../components/DefaultInput";
import DefaultButton from "../components/DefaultButton";
import { Formik } from "formik";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required()
});

const Login = props => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.topCont}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            props.onLoginPressed();
            //console.log(values);
          }}
        >
          {formikprops => (
            <View style={{ width: "100%", alignItems: "center" }}>
              <DefaultInput
                value={formikprops.values.email}
                onChangeText={formikprops.handleChange("email")}
                placeholder="* Enter Email"
                style={styles.email}
                keyboardType="email-address"
                onBlur={formikprops.handleBlur("email")}
              />
              <Text style={styles.error}>
                {formikprops.touched.email && formikprops.errors.email}
              </Text>
              <DefaultInput
                value={formikprops.values.password}
                onChangeText={formikprops.handleChange("password")}
                placeholder="* Enter Password"
                style={styles.email}
                secureTextEntry
                onBlur={formikprops.handleBlur("password")}
              />
              <Text style={styles.error}>
                {formikprops.touched.password && formikprops.errors.password}
              </Text>
              <DefaultButton
                onPress={formikprops.handleSubmit}
                title="Login"
                style={[styles.button, { opacity: 1 }]}
              />
            </View>
          )}
        </Formik>
        <DefaultButton
          onPress={() => alert("will integrate google")}
          title="SignIn with Google"
          style={styles.button}
        />
        <DefaultButton
          onPress={() => alert("will integrate facebook")}
          title="SignIn with Facebook"
          style={styles.button}
        />
        <DefaultButton
          onPress={() => props.changeScreen()}
          title="Create Account"
          style={styles.button}
        />
        <View style={styles.labelCont}>
          <TouchableOpacity onPress={() => console.log("forget pressed")}>
            <Text style={styles.label}>Forget password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("terms pressed")}>
            <Text style={styles.label}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lowerCont}></View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    paddingTop: 50
  },
  topCont: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  lowerCont: {
    flex: 1,
    width: "100%"
  },
  email: {
    borderRadius: 5,
    marginTop: 20,
    elevation: 1,
    shadowOpacity: 0.2,
    shadowOffset: { height: 5, width: 5 }
    // marginLeft : 'auto',
    // marginRight : 'auto'
  },
  button: {
    borderRadius: 5,
    marginTop: 20
  },
  labelCont: {
    marginTop: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    fontWeight: "bold",
    padding: 5
  },
  error: {
    color: "red"
  }
});

export default Login;
