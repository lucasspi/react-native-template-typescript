import React, { useState } from "react";
import { View, Image, Dimensions } from "react-native";
import Button from "../../../components/Button";
import styles from "./Onboarding.styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem from "./CarouselCardItem";
import theme from "../../../constants/theme";
import Spacer from "../../../components/Spacer";

const SLIDER_WIDTH = Dimensions.get("window").width;

const Onboarding: React.FC = (props: any) => {
  const isCarousel = React.useRef(null);

  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logo}
        />
        <View style={styles.slider}>
          <Carousel
            layout="stack"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={Math.round(SLIDER_WIDTH * 0.7)}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index) => setIndex(index)}
            autoplay={true}
            hasParallaxImages={true}
            autoplayDelay={500}
            loop={true}
            autoplayInterval={5000}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            dotColor={"#FFFFFF"}
            inactiveDotOpacity={0.4}
            inactiveDotColor={theme.grey}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={styles.dotStyle}
            inactiveDotScale={1}
          />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <Button
          title={"Sign up"}
          onClick={() => props.navigation.push("Signup")}
        />
        <Spacer />
        <Button
          title={"Log in"}
          outlined={true}
          onClick={() => props.navigation.push("Signin")}
        />
      </View>
    </View>
  );
};

const data = [
  {
    title: "One Central Account",
    body:
      "Whether you’re a buyer, seller, landlord, or tenant, manage everything with ease from one central account.",
  },
  {
    title: "One Central Account 2",
    body:
      "Whether you’re a buyer, seller, landlord, or tenant, manage everything with ease from one central account.",
  },
  {
    title: "One Central Account 3",
    body:
      "Whether you’re a buyer, seller, landlord, or tenant, manage everything with ease from one central account.",
  },
  {
    title: "One Central Account 3",
    body:
      "Whether you’re a buyer, seller, landlord, or tenant, manage everything with ease from one central account.",
  },
];

export default Onboarding;
