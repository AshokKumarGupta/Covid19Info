import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
export default class OnlineConsultation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/images/medical.png")}
        />
        <Text style={styles.paragraph}>
          Most big hospitals in your area now offer online consultation. Please
          stay home and stay safe and if needed medical treatement then refer to
          their website for more information.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  logoImage: {
    alignContent: "center",
    width: 128,
    height: 128,
    marginLeft: 20,
    padding: 20
  },
  paragraph: {
    fontSize: 20,
    marginTop: 20
  }
});
