import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/app/home/Home";

export enum AppScreens {
  Home = "Home",
}

export type AppStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppFlowNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreens.Home} component={Home} />
    </Stack.Navigator>
  );
};
export default AppFlowNavigator;
