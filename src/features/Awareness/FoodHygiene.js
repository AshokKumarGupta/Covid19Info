import React, { Component } from "react";
import { Pages } from "react-native-pages";
import { View, Image, StyleSheet, Text } from "react-native";
import BaseComponent from "../BaseComponent";

export default class FoodHygieneComponent extends BaseComponent {
  render() {
    const { language } = this.props.route.params;

    return (
      <Pages indicatorColor="blue">
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/food.png")}
          />
          {language === "English" && (
            <Text style={styles.paragraph}>
              Follow below food hygiene to avoid contamination and disease(s):
              {"\n"} 1. Keep clean to prevent contamination
              {"\n"} 2. Separate raw and cooked food to avoid
              cross-contamination
              {"\n"} 3. Cook thoroughly to kill microorganisms
              {"\n"} 4. Keep food at safe temperature either hot (>70 deg C) or
              cold or(less than 5 deg celsius)
              {"\n"} 5. Use safe water and safe raw materials to avoid
              contamination
              {"\n"} 6. Do not forget to see this:{" "}
              <Text
                style={styles.link}
                onPress={() =>
                  this.connectivityCheck(() => {
                    this._handleExternalLink(
                      "https://www.youtube.com/watch?v=ONkKy68HEIM&feature=emb_title"
                    );
                  })
                }
              >
                WHO: Five keys to safer food
              </Text>
            </Text>
          )}
          {language !== "English" && (
            <Text style={styles.paragraph}>
              संदूषण और बीमारी से बचने के लिए भोजन की स्वच्छता का पालन करें:
              {"\n"} 1. मैलापन को रोकने के लिए साफ सफाई रखें
              {"\n"} 2. क्रॉस-संदूषण से बचने के लिए कच्चे और पके हुए भोजन को अलग
              करें
              {"\n"} 3. सूक्ष्मजीवों को मारने के लिए अच्छी तरह से पकाएं
              {"\n"} 4. भोजन को सुरक्षित तापमान पर या तो गर्म रखें (> 70 डिग्री
              सेल्सियस) या ठंडा या (5 डिग्री सेल्सियस से कम)
              {"\n"} 5. प्रदूषण से बचने के लिए सुरक्षित पानी और सुरक्षित कच्चे
              माल का उपयोग करें
              {"\n"} 6. इसे देखना न भूलें:{" "}
              <Text
                style={styles.link}
                onPress={() =>
                  this.connectivityCheck(() => {
                    this._handleExternalLink(
                      "https://www.youtube.com/watch?v=ONkKy68HEIM&feature=emb_title"
                    );
                  })
                }
              >
                WHO: Five keys to safer food
              </Text>
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/food.png")}
          />
          {language === "English" && (
            <Text style={styles.paragraph}>
              Additionally follow these during the{" "}
              <Text style={{ fontWeight: "bold" }}>COVID19 pandemic</Text>:
              {"\n"} 1. Wipe or wash cans and boxes of food to reduce virus
              content
              {"\n"} 2.Leave your groceries in isolated area for 72 hours to
              allow the virus to become inactive.
              {"\n"} 3. Use soap and water, rinse them completely with clean
              water(applicable to most packets food).
              {"\n"} 4. use boil water(Add salt 2 teaspoons for 20 ltr), wash
              for about 5 minutes.
              {"\n"} 5. Read more on the food safety here:
              {"\n"}
              <Text
                style={styles.link}
                onPress={() =>
                  this.connectivityCheck(() => {
                    this._handleExternalLink(
                      "https://www.healthline.com/health-news/worried-about-contaminated-groceries-how-to-be-safe#Cleaning-your-groceries-at-home"
                    );
                  })
                }
              >
                Click here
              </Text>
            </Text>
          )}
          {language !== "English" && (
            <Text style={styles.paragraph}>
              इसके अलावा{" "}
              <Text style={{ fontWeight: "bold" }}>COVID19 महामारी</Text> के
              दौरान इनका पालन करें
              {"\n"} 1. वायरस की सामग्री को कम करने के लिए डिब्बे और भोजन के
              डिब्बे पोंछें या धोएं
              {"\n"} 2. 72 घंटे के लिए अलग-अलग क्षेत्र में अपनी किराने का सामान
              छोड़ दें, वायरस को कमजोर होने दें।
              {"\n"} 3. साबुन और पानी का उपयोग करें, उन्हें पूरी तरह से साफ पानी
              से कुल्ला करें (अधिकांश पैकेट भोजन पर लागू)।
              {"\n"} 4. उबाल पानी का उपयोग करें (20 लीटर के लिए नमक 2 चम्मच
              जोड़ें), के लिए धो लें लगभग 5 मिनट।
              {"\n"} 5. खाद्य सुरक्षा पर यहाँ और अधिक पढ़ें:
              {"\n"}
              <Text
                style={styles.link}
                onPress={() =>
                  this.connectivityCheck(() => {
                    this._handleExternalLink(
                      "https://www.healthline.com/health-news/worried-about-contaminated-groceries-how-to-be-safe#Cleaning-your-groceries-at-home"
                    );
                  })
                }
              >
                Click here
              </Text>
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
