import React, { useState } from "react";
import { View, KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";
import { Formik } from "formik";
import * as yup from "yup";

const signupSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .min(4),
  lastName: yup
    .string()
    .required()
    .min(4),
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(4),
  confirmPassword: yup.string().required()
});

const SignUp = props => {
  return (
    <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={signupSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {formikProps => (
          <View style={{ width: "100%", alignItems: "center" }}>
            <DefaultInput
              value={formikProps.values.firstName}
              onChangeText={formikProps.handleChange("firstName")}
              placeholder="* Enter First Name"
              style={styles.input}
              onBlur={formikProps.handleBlur("firstName")}
            />
            <Text style={styles.error}>
              {formikProps.touched.firstName && formikProps.errors.firstName}
            </Text>
            <DefaultInput
              value={formikProps.values.lastName}
              onChangeText={formikProps.handleChange("lastName")}
              placeholder="* Enter Last Name"
              style={styles.input}
              onBlur={formikProps.handleBlur("lastName")}
            />
            <Text style={styles.error}>
              {formikProps.touched.lastName && formikProps.errors.lastName}
            </Text>
            <DefaultInput
              value={formikProps.values.email}
              onChangeText={formikProps.handleChange("email")}
              placeholder="* Enter Email"
              style={styles.input}
              keyboardType="email-address"
              onBlur={formikProps.handleBlur("email")}
            />
            <Text style={styles.error}>
              {formikProps.touched.email && formikProps.errors.email}
            </Text>
            <DefaultInput
              value={formikProps.values.password}
              onChangeText={formikProps.handleChange("password")}
              placeholder="* Enter Password"
              style={styles.input}
              secureTextEntry
              onBlur={formikProps.handleBlur("password")}
            />
            <Text style={styles.error}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>
            <DefaultInput
              value={formikProps.values.confirmPassword}
              onChangeText={formikProps.handleChange("confirmPassword")}
              placeholder="* Enter Password Again"
              style={styles.input}
              secureTextEntry
              onBlur={formikProps.handleBlur("confirmPassword")}
            />
            <Text style={styles.error}>
              {formikProps.touched.confirmPassword &&
                formikProps.errors.confirmPassword}
            </Text>
            <DefaultButton
              onPress={formikProps.handleSubmit}
              title="Sign Up"
              style={styles.input}
            />
          </View>
        )}
      </Formik>
      <DefaultButton
        onPress={() => props.changeScreen()}
        title="Switch To LogIn"
        style={styles.input}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderRadius: 5,
    marginTop: 20
  },
  error: {
    color: "red"
  }
});

export default SignUp;
