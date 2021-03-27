import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import AsyncStorage from "@react-native-community/async-storage";

function RouterComponent(props: any) {
  useEffect(() => {
    AsyncStorage.getItem("userAuthenticated").then((data: any) => {
      data = JSON.parse(data);
      if (data) {
        props.performAuth();
      }
    });
  }, []);
  return (
    <NavigationContainer>
      {props.authState.userAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
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
)(RouterComponent);
