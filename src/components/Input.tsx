import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import theme from "../constants/theme";

export default function InputComponent(props: any) {
  return (
    <View>
      <View
        style={[
          styles.container,
          { borderColor: props.hintError ? theme.red : "#898989" },
        ]}
      >
        <View style={styles.flexInput}>
          <TextInput
            onChangeText={props.onChangeText}
            style={styles.input}
            placeholder={props.label}
            secureTextEntry={props.secureTextEntry}
            autoCompleteType={props.autoCompleteType}
            keyboardType={props.keyboardType}
          />
        </View>
        {props.children && (
          <View style={styles.flexChild}>{props.children}</View>
        )}
      </View>
      {props.hintError ? <Text style={styles.hintError}>{props.hintError}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: theme.darkGrey,
    letterSpacing: -0.4,
  },
  flexInput: {
    flex: 7,
  },
  flexChild: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 4,
  },
  hintError: {
    color: theme.red,
    fontSize: 10,
    marginTop: 5,
    marginLeft: 5,
  },
});
