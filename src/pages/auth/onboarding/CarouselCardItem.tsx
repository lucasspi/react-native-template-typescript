import React from "react";
import { View, Text } from "react-native";
import styles from "./Onboarding.styles";

const CarouselCardItem = (props: any) => {
  return (
    <View style={styles.containerCardItem} key={props.index}>
      <Text style={styles.header}>{props.item.title}</Text>
      <Text style={styles.body}>{props.item.body}</Text>
    </View>
  );
};

export default CarouselCardItem;
