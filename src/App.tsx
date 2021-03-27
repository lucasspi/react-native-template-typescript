import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Routes from "./navigation/Routes";
import configureStore from "./store/index";
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar animated={true} barStyle={"dark-content"} hidden={false} />
      <Routes />
    </Provider>
  );
}