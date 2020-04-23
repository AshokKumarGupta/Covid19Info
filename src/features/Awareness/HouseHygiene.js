import React, { Component } from "react";
import { Pages } from "react-native-pages";
import { View, Image, StyleSheet, Text, Linking, FlatList } from "react-native";

export default class HouseHygiene extends Component {
  render() {
    return (
      <Pages>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/kitchen.png")}
          />
          <Text style={styles.paragraph}>
            The cleaning job in the{" "}
            <Text style={{ fontWeight: "bold" }}>kitchen</Text> must include
            following:
            {"\n"} 1. washing the dishes (each day)
            {"\n"} 2. Cleaning exposed area of kitchen (each day)
            {"\n"} 3. Cleaning the stove (each day) and oven (twice in week)
            {"\n"} 4. Wiping the shelves and cleaning the cupboards, inside and
            out
            {"\n"} 5. Sweeping and/or washing (mopping) the floor
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/bathroom.png")}
          />
          <Text style={styles.paragraph}>
            The cleaning job in the{" "}
            <Text style={{ fontWeight: "bold" }}>bathroom</Text> must include
            following:
            {"\n"} 1. Cleaning the hand basin, shower recess and/or bath (twice
            a week)
            {"\n"} 2. Sweeping and washing (mopping) the floor (Twice a week)
            {"\n"} 3. Cleaning the mirror, cupboards and/or shelves
            {"\n"} 4. Changing or washing the towels and the bath mat
            {"\n"} 5. Cleaning the walls and windows and brushing flyscreens
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/toilet.png")}
          />
          <Text style={styles.paragraph}>
            The cleaning job in the{" "}
            <Text style={{ fontWeight: "bold" }}>toilet</Text> must include
            following:
            {"\n"} 1. Sweeping and washing (mopping) the floor (Twice a week)
            {"\n"} 2. Cleaning the toilet (Twice a week)
            {"\n"} 3. Removing cobwebs
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/bedroom.png")}
          />
          <Text style={styles.paragraph}>
            The cleaning job in the{" "}
            <Text style={{ fontWeight: "bold" }}>Bedrooms</Text> must include
            following:
            {"\n"} 1. Sweeping and washing (mopping) the floor (Twice a week)
            {"\n"} 2. Dusting the shelves and cleaning out cupboards (Twice a
            week)
            {"\n"} 3. changing the sheets on the bed and airing (putting in the
            sun for a few hours) the blankets and mattresses
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/bedroom.png")}
          />
          <Text style={styles.paragraph}>
            The cleaning job in the{" "}
            <Text style={{ fontWeight: "bold" }}>other areas of home</Text> must
            include following:
            {"\n"} 1. Sweeping and washing (mopping) the floor (Twice a week)
            {"\n"} 2. Dusting the shelves and cleaning out cupboards (Twice a
            week)
            {"\n"} 3. Changing the sheets on the sofas/Chairs and airing
            (putting in the sun for a few hours)
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
    height: 64
  },
  paragraph: {
    fontSize: 20,
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
