import React from "react";
import { View, StyleSheet } from "react-native";

export default function SpacerComponent(props: any) {
  return (
    <View
      style={[
        styles.mainContainer,
        { marginHorizontal: props.width ? props.width : 8 },
        { marginVertical: props.height ? props.height : 8 },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
