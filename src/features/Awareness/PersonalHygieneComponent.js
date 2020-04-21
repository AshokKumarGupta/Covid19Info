import React, { Component } from "react";
import { Pages } from "react-native-pages";
import { View, Image, StyleSheet, Text, Linking } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default class PersonalHygieneComponent extends Component {
  render() {
    return (
      <Pages>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/handwash.png")}
          />
          <Text style={styles.paragraph}>
            It is very important to clean hand properly, whenever you touch a
            surface. Virus/Germs can easily spread as soon as you touch eyes,
            nose, and mouth with unwashed hands. Refer to this link for more
            knowledge about cleaning hand properly.
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=3PmVJQUCm4E")
              }
            >
              WHO: How to handwash? With soap and water
            </Text>
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/shower.png")}
          />
          <Text style={styles.paragraph}>
            Do shower every day using warm water and soap. During warm weather
            you can take shower twice, with cold water too.
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/nail.png")}
          />
          <Text style={styles.paragraph}>
            It is important to keep nails short and trim. So that dirt cant
            settle under it. Kindly avoid biting and chewing nails.
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/nail.png")}
          />
          <Text style={styles.paragraph}>
            It is important to keep nails short and trim. So that dirt can't
            settle under it. Kindly avoid biting and chewing nails.
          </Text>
        </View>
      </Pages>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4eeff",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  logoImage: {
    padding: 20,
    alignContent: "center",
    width: 100,
    height: 100,
    margin: 40,
    marginBottom: 0
  },
  paragraph: {
    fontSize: 20,
    padding: 20
  },
  link: {
    backgroundColor: "#424874",
    color: "white"
  }
});
