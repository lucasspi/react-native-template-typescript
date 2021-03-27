import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import theme from "../constants/theme";

export default function Button(props: any) {
  const [touchableStyle, setTouchableStyle] = useState({});

  useEffect(() => {
    setTouchableStyle([
      styles.container,
      {
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : props.outlined
          ? "transparent"
          : theme.accentColor,
      },
      {
        borderColor: props.borderColor
          ? props.borderColor
          : props.outlined
          ? theme.light
          : theme.accentColor,
      },
    ]);
  }, []);
  return (
    <TouchableOpacity style={touchableStyle} onPress={props.onClick}>
      {props.icon ? (
        <Image source={props.icon} style={styles.icon} />
      ) : props.loading ? (
        <ActivityIndicator color={theme.light} />
      ) : (
        <Text
          style={[
            styles.btnTitle,
            {
              color: props.titleColor ? props.titleColor : theme.light,
            },
          ]}
        >
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  btnTitle: {
    color: theme.light,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: -0.4,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
