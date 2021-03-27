import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../pages/auth/signin/Signin";
import Onboarding from "../pages/auth/onboarding/Onboarding";
import Signup from "../pages/auth/signup/Signup";

export enum AuthScreens {
  Onboarding = "Onboarding",
  Signin = "Signin",
  Signup = "Signup",
}

export type AuthStackParamList = {
  Onboarding: undefined;
  Signin: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AuthScreens.Onboarding} component={Onboarding} />
      <Stack.Screen name={AuthScreens.Signin} component={Signin} />
      <Stack.Screen name={AuthScreens.Signup} component={Signup} />
    </Stack.Navigator>
  );
};
export default AuthFlowNavigator;
