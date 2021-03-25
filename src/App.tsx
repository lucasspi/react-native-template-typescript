import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Routes from "./navigation/Routes";
import configureStore from "./store/index";
const store = configureStore();

export default function App(props: any) {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Routes/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
