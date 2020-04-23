import React, { Component } from "react";
import { Pages } from "react-native-pages";
import { View, Image, StyleSheet, Text, Linking, FlatList } from "react-native";

const personalHygiene = [
  { key: "Washing body helps keep it free from disease causing germs." },
  { key: "Cleaning teeth helps keep gums and teeth healthy." },
  { key: "Wash your hands after going to toilet." },
  { key: "Wash your hands and exposed body parts after going to market." },
  { key: "Wash your hands before preparing food." },
  { key: "Wash your hands before eating food." },
  { key: "Washing clothes helps them free from disese-causing germs." },
  {
    key:
      "Hang cloths under Sun, it helps kill some disese-causing germs & parasites."
  },
  { key: "Cover nose and mouse when sneezing helps stop the spread of germs." }
];

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
          <FlatList
            style={styles.flatList}
            data={personalHygiene}
            renderItem={({ item, index }) => (
              <Text style={styles.item}>{index + 1 + ". " + item.key}</Text>
            )}
          />
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
  },
  item: {
    fontSize: 18
  }
});
