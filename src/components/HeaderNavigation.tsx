import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HeaderNavigation(props: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBtn} onPress={props.onBack}>
        <Icon name="angle-left" size={30} color={theme.primaryColor} />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  arrowBtn: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    height: "100%"
  },
  title: {
    position: "absolute",
    textAlign: "center",
    top: "35%",
    left: 0,
    right: 0,
    color: theme.primaryColor,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: -0.4,
  },
});
