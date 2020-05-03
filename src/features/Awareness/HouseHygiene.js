import React, { Component } from "react";
import { Pages } from "react-native-pages";
import { View, Image, StyleSheet, Text } from "react-native";
import BaseComponent from "../BaseComponent";

export default class HouseHygiene extends BaseComponent {
  render() {
    const { language } = this.props.route.params;

    return (
      <Pages indicatorColor="blue">
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/kitchen.png")}
          />
          {language === "English" && (
            <Text style={styles.paragraph}>
              The cleaning job in the{" "}
              <Text style={{ fontWeight: "bold" }}>kitchen</Text> must include
              following:
              {"\n"} 1. washing the dishes (each day)
              {"\n"} 2. Cleaning exposed area of kitchen (each day)
              {"\n"} 3. Cleaning the stove (each day) and oven (twice in week)
              {"\n"} 4. Wiping the shelves and cleaning the cupboards, inside
              and out
              {"\n"} 5. Sweeping and/or washing (mopping) the floor
            </Text>
          )}
          {language !== "English" && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>किचन</Text> में सफाई का काम
              निम्नलिखित शामिल करना आवश्यक है:
              {"\n"} 1. बर्तन धोना (प्रत्येक दिन)
              {"\n"} 2. रसोई घर की सफाई का उजागर क्षेत्र (प्रत्येक दिन)
              {"\n"} 3. स्टोव (प्रत्येक दिन) और ओवन की सफाई (सप्ताह में दो बार)
              {"\n"} 4. अलमारियों को पोंछना और अलमारी की सफाई करना, अंदर और बाहर
              {"\n"} 5. फर्श को साफ करना और धोना
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/bathroom.png")}
          />
          {language === "English" && (
            <Text style={styles.paragraph}>
              The cleaning job in the{" "}
              <Text style={{ fontWeight: "bold" }}>bathroom</Text> must include
              following:
              {"\n"} 1. Cleaning the hand basin
              {"\n"} 2. Sweeping and washing (mopping) the floor (Twice a week)
              {"\n"} 3. Cleaning the mirror, cupboards and/or shelves
              {"\n"} 4. Changing or washing the towels and the bath mat
              {"\n"} 5. Cleaning the walls and windows and brushing flyscreens
            </Text>
          )}
          {language !== "English" && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>बाथरूम</Text> में सफाई का काम
              निम्नलिखित शामिल करना आवश्यक है:
              {"\n"} 1. हाथ बेसिन की सफाई (दो बार) एक सप्ताह में
              {"\n"} 2. फर्श को धोना और पोंछना (सप्ताह में दो बार)
              {"\n"} 3. दर्पण, अलमारी और / या अलमारियों की सफाई
              {"\n"} 4. तौलिये और स्नान की चटाई को बदलना या धोना
              {"\n"} 5. दीवारों और खिड़कियों की सफाई और फ्लाईस्क्रीन्स को ब्रश
              करना
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/toilet.png")}
          />
          {language === "English" && (
            <Text style={styles.paragraph}>
              The cleaning job in the{" "}
              <Text style={{ fontWeight: "bold" }}>toilet</Text> must include
              following:
              {"\n"} 1. Sweeping and washing (mopping) the floor (Twice a week)
              {"\n"} 2. Cleaning the toilet (Twice a week)
              {"\n"} 3. Removing cobwebs
            </Text>
          )}
          {language !== "English" && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>शौचालय</Text> में सफाई का काम
              निम्नलिखित शामिल करना आवश्यक है:
              {"\n"} 1. फर्श को धोना और धोना (पोंछना) (सप्ताह में दो बार)
              {"\n"} 2. शौचालय की सफाई (सप्ताह में दो बार)
              {"\n"} 3. मकड़ी का जाला हटाना
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/bedroom.png")}
          />
          {language === "English" && (
            <Text style={styles.paragraph}>
              The cleaning job in the{" "}
              <Text style={{ fontWeight: "bold" }}>Bedrooms</Text> must include
              following:
              {"\n"} 1. Sweeping and washing (mopping) the floor (Twice a week)
              {"\n"} 2. Dusting the shelves and cleaning out cupboards (Twice a
              week)
              {"\n"} 3. Changing the sheets, airing and keeping outside under
              sun for a few hours. Include the blankets and mattresses.
            </Text>
          )}
          {language !== "English" && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>बेडरूम</Text> में सफाई का काम
              निम्नलिखित शामिल करना आवश्यक है:
              {"\n"} 1. फर्श को धोना और धोना (पोंछना) (सप्ताह में दो बार)
              {"\n"} 2. अलमारियों को धोना और अलमारी साफ करना (सप्ताह में दो बार)
              {"\n"} 3. चादरें बदलना, प्रसारण करना और बाहर रखना कुछ घंटों के लिए
              सूरज। कंबल और गद्दे शामिल करें।
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/bedroom.png")}
          />
          {language === "English" && (
            <Text style={styles.paragraph}>
              The cleaning job in the{" "}
              <Text style={{ fontWeight: "bold" }}>other areas of home</Text>{" "}
              must include following:
              {"\n"} 1. Sweeping and washing (mopping) the floor (Twice a week)
              {"\n"} 2. Dusting the shelves and cleaning out cupboards (Twice a
              week)
              {"\n"} 3. Changing the sheets on the sofas/Chairs and airing
              (putting in the sun for a few hours)
            </Text>
          )}
          {language !== "English" && (
            <Text style={styles.paragraph}>
              <Text style={{ fontWeight: "bold" }}>घर के अन्य क्षेत्र</Text> में
              सफाई का काम निम्नलिखित शामिल करना आवश्यक है:
              {"\n"} 1. फर्श को पोंछना और पोंछना (सप्ताह में दो बार)
              {"\n"} 2. अलमारियों को धोना और अलमारी को साफ करना (साप्ताहिक दो
              बार)
              {"\n"} 3. सोफे / कुर्सियों पर चादरें बदलना और प्रसारित करना (कुछ
              घंटों के लिए धूप में रखना)
            </Text>
          )}
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
