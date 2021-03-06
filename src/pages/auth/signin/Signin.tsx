import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../../components/Button";
import Divider from "../../../components/Divider";
import HeaderNavigation from "../../../components/HeaderNavigation";
import Input from "../../../components/Input";
import Spacer from "../../../components/Spacer";
import theme from "../../../constants/theme";
import styles from "./Signin.styles";
import { emailValidation, passwordValidation } from "../../../utils/validators";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";

const Signin: React.FC = (props: any) => {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [isProtected, setProtect] = useState(true);

  const validateAll = () => {
    setErrorEmail(!emailValidation(email));
    setErrorPassword(!passwordValidation(password));
  };
  const submit = () => {
    validateAll();
    if (!errorEmail && !errorPassword) {
      AsyncStorage.setItem("userAuthenticated", "true").then((res) => {
        props.performAuth();
      });
    }
  };

  return (
    <SafeAreaView style={styles.flex}>
      <HeaderNavigation onBack={() => props.navigation.pop()} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>Login to your account</Text>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Don’t yet have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.replace("Signup")}
            >
              <Text style={styles.subtitleSpan}> Sign up</Text>
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
          <Divider height={48} title={"or log in with email"} />
          <View style={styles.inputsContainer}>
            <Input
              autoCompleteType={"email"}
              keyboardType={"email-address"}
              label="Email address"
              onChangeText={(v: string) => setEmail(v)}
              hintError={errorEmail ? "Email is invalid" : ""}
            />
            <Spacer />
            <Input
              secureTextEntry={isProtected}
              label="Password"
              onChangeText={(v: string) => setPassword(v)}
              hintError={errorPassword ? "Password is invalid" : ""}
              children={
                <TouchableOpacity
                  style={styles.contentEye}
                  onPress={() => setProtect(!isProtected)}
                >
                  <Icon
                    name={isProtected ? "eye-slash" : "eye"}
                    size={20}
                    color={theme.darkGrey}
                  />
                </TouchableOpacity>
              }
            />
            <Spacer />
            <Text style={styles.privacityLabel}>
              By clicking “Continue” you agree to our Terms of Service and
              Privacy Policy.
            </Text>
            <Spacer />
            <Button title="Continue" onClick={submit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default connect(
  (state: { authState: any }) => ({
    authState: state.authState,
  }),
  (dispatch) => {
    return {
      performAuth() {
        dispatch({
          type: "PERFORM_AUTH",
        });
      },
    };
  }
)(Signin);
