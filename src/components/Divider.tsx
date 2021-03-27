import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../constants/theme";

export default function DividerComponent(props: any) {
  return (
    <View
      style={[
        styles.mainContainer,
        { marginVertical: props.height ? props.height : 8 },
      ]}
    >
      <View style={[styles.divider]} />
      {props.title && (
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: theme.grey,
  },
  mainContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    position: "absolute",
    top: -6,
    // bottom: 0,
  },
  title: {
    backgroundColor: theme.light,
    textAlign: "center",
    width: "100%",
    paddingHorizontal: 20,
    color: theme.darkGrey,
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: -0.4,
  },
});
