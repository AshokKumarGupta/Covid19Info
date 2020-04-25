import React, { Component } from "react";
import { Pages } from "react-native-pages";
import { View, Image, StyleSheet, Text, Linking, FlatList } from "react-native";

export default class OutsideComponent extends Component {
  render() {
    return (
      <Pages>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/shopping.png")}
          />
          <Text style={styles.paragraph}>
            Buying essentials can't be avoided, hence it is important to keep
            below suggested safety in mind:
            {"\n"}1. Always cover your face with cloth made mask.
            {"\n"}2. Carry sanitizer along with you and use as needed.
            {"\n"}3. Wear comfortable cloths, once back home keep then in
            washing tub.
            {"\n"}4. Choose morning time, so that once back home take bath.
            {"\n"}5. Maintain safe distant during purchasing
            {"\n"}6. Avoid cash transactions
            {"\n"}7. Please swipe left to see more
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/shopping.png")}
          />
          <Text style={styles.paragraph}>
            Continued...:
            {"\n"}7. If need to deal in cash then wash currency and leave
            untouched under direct sunlight top reduce virus.
            {"\n"}8. Clean doors handle and any area of your home that you might
            have touched.
            {"\n"}9. Maintain safe distant from family members for about 72
            hours.
            {"\n"}10. Reduce frequency of going out to once or twice a week.
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
