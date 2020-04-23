import React, { Component } from "react";
import { Pages } from "react-native-pages";
import { View, Image, StyleSheet, Text, Linking, FlatList } from "react-native";

export default class FoodHygieneComponent extends Component {
  render() {
    return (
      <Pages>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/food.png")}
          />
          <Text style={styles.paragraph}>
            Follow below food hygienes to avoid contamination and disease(s):
            {"\n"} 1. Keep clean to prevent contamination
            {"\n"} 2. Seperate raw and cooked food to avoid cross-contamination
            {"\n"} 3. Cook throughly to kill microorganisms
            {"\n"} 4. Keep food at safe temperature either hot (>70 deg C) or
            cold or(less than 5 deg celsius)
            {"\n"} 5. Use safe water and safe raw materials to avoid
            contamination
            {"\n"} 6. Do not forget to see this:{" "}
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=ONkKy68HEIM&feature=emb_title"
                )
              }
            >
              WHO: Five keys to safer food
            </Text>
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/food.png")}
          />
          <Text style={styles.paragraph}>
            Additionally follow these during the{" "}
            <Text style={{ fontWeight: "bold" }}>COVID19 pandemic</Text>:{"\n"}{" "}
            1. Wipe or wash cans and boxes of food to reduce virus content
            {"\n"} 2.Leave your groceries in isolated area for 72 hours to allow
            the virus to become inactive.
            {"\n"} 3. Use soap and water, rinse them completely with clean
            water(Not everything).
            {"\n"} 4. use hot water(Add salt 2 teaspoons for 20 ltr), wash for
            about 5 minutes.
            {"\n"} 5. Read more on the food safety here:
            {"\n"}
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.healthline.com/health-news/worried-about-contaminated-groceries-how-to-be-safe#Cleaning-your-groceries-at-home"
                )
              }
            >
              Click here
            </Text>
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
    marginBottom: 20,
    marginTop: 10
  },
  logoImage: {
    alignContent: "center",
    width: 64,
    height: 64,
    marginLeft: 20
  },
  paragraph: {
    fontSize: 15,
    padding: 20
  },
  link: {
    backgroundColor: "#424874",
    color: "white"
  },
  item: {
    fontSize: 18
  }
});
