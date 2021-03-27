import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styles from "./Home.styles";

const Home: React.FC = (props: any) => {
  const logout = () => {
    AsyncStorage.setItem("userAuthenticated", "false").then((res) => {
      props.performAuth();
    });
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={logout}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
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
          type: "UNPERFORM_AUTH",
        });
      },
    };
  }
)(Home);
