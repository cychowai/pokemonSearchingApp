import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Button, Right } from "native-base";

var myBackground = require("../assets/icons/YNXo.gif");
var { height, width } = Dimensions.get("window");

const TapToStart = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Text style={[styles.buttonText, { display: showText ? "none" : "flex" }]}>
      {"    "}TAP TO START{"    "}
    </Text>
  );
};

class Landing extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={myBackground} style={styles.backgroundImage}>
          <SafeAreaView style={{ margin: 10 }}>
            <Text style={styles.versionText}>Ver. 1.0.0</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.viewStyle}>
            <Text style={styles.iconText}>
              {"   "}Pokemon{"   "}
            </Text>
            <Text style={styles.iconText}>
              {"   "}Search{"   "}
            </Text>
            <TapToStart />
            <Button
              block
              style={styles.buttonStyle}
              onPress={() => this.props.switchScreen("search")}
            ></Button>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    alignItems: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    width: width,
    height: height,
  },
  buttonStyle: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 32,
    textShadowColor: "purple",
    textShadowRadius: 18,
    fontWeight: "bold",
    top: 480,
  },
  versionText: {
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 5,
    fontSize: 12,
    margin: 0,
    marginTop: 0,
    fontWeight: "bold",
  },
  iconText: {
    color: "orange",
    textShadowColor: "black",
    textShadowRadius: 8,
    top: 60,
    fontSize: 70,
  },
};

export default Landing;
