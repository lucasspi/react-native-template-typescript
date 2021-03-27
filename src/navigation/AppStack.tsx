import React from "react";
import { SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/app/home/Home";
import styles from "../styles/global.styles";

export enum AppScreens {
  Home = "Home",
}

export type AppStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppFlowNavigator: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={AppScreens.Home} component={Home} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default AppFlowNavigator;
