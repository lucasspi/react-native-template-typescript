import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

function RouterComponent(props: any) {
  useEffect(() => {
    //   props.performAuth();
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
