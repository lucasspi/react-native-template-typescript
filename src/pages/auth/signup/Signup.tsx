import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Divider from "../../../components/Divider";
import HeaderNavigation from "../../../components/HeaderNavigation";
import Input from "../../../components/Input";
import Spacer from "../../../components/Spacer";
import theme from "../../../constants/theme";
import styles from "./Signup.styles";
import {
  fullNameValidation,
  emailValidation,
  passwordValidation,
} from "../../../utils/validators";

const Signup: React.FC = (props: any) => {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateAll = () => {
    setErrorName(!fullNameValidation(name));
    setErrorEmail(!emailValidation(email));
    setErrorPassword(!passwordValidation(password));
  };
  const submit = () => {
    validateAll();
  };

  return (
    <SafeAreaView style={styles.flex}>
      <HeaderNavigation onBack={() => props.navigation.pop()} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign up with your email</Text>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Already an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.replace("Signin")}
            >
              <Text style={styles.subtitleSpan}> Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.authBtnsContainer}>
            <View style={styles.flex}>
              <Button
                outlined={true}
                borderColor={theme.grey}
                icon={require("../../../../assets/icons/google.png")}
              />
            </View>
            <View>
              <Spacer />
            </View>
            <View style={styles.flex}>
              <Button
                outlined={true}
                borderColor={theme.grey}
                icon={require("../../../../assets/icons/facebook.png")}
              />
            </View>
          </View>
          <Divider height={48} title={"or sign up with email"} />
          <View style={styles.inputsContainer}>
            <Input
              label="Name"
              onChangeText={(v: string) => setName(v)}
              hintError={errorName ? "Full name is invalid" : ""}
            />
            <Spacer />
            <Input
              autoCompleteType={"email"}
              keyboardType={"email-address"}
              label="Email address"
              onChangeText={(v: string) => setEmail(v)}
              hintError={errorEmail ? "Email is invalid" : ""}
            />
            <Spacer />
            <Input
              secureTextEntry
              label="Password"
              onChangeText={(v: string) => setPassword(v)}
              hintError={errorPassword ? "Password is invalid" : ""}
              children={
                <TouchableOpacity>
                  <Text style={styles.forgotPassLabel}>Forgot Password?</Text>
                </TouchableOpacity>
              }
            />
            <Spacer />
            <Text style={styles.privacityLabel}>
              By clicking “Continue” you agree to our Terms of Service and
              Privacy Policy.
            </Text>
            <Spacer />
            <Button onClick={submit} title="Continue" loading={loading} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
