import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../pages/auth/signin/Signin";

export enum AuthScreens {
  Signin = "Signin",
}

export type AuthStackParamList = {
  Signin: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthScreens.Signin} component={Signin} />
    </Stack.Navigator>
  );
};
export default AuthFlowNavigator;
