import React, { Component } from "react";
import { Pages } from "react-native-pages";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import BaseComponent from "../BaseComponent";

const personalHygieneHindi = [
  { key: "शरीर को धोने से रोग के कीटाणुओं से मुक्त रखने में मदद मिलती है।" },
  { key: "दांत साफ करने से मसूड़े और दांत स्वस्थ रहते हैं।" },
  { key: "टॉयलेट जाने के बाद अपने हाथ धोएं।" },
  { key: "बाजार जाने के बाद अपने हाथों और शरीर के हिस्सों को धोएं।" },
  { key: "खाना बनाने से पहले अपने हाथ धो लें।" },
  { key: "खाना खाने से पहले अपने हाथ धोएं।" },
  {
    key:
      "कपड़े धोने से उन्हें रोग फैलाने वाले कीटाणुओं से मुक्त होने में मदद मिलती है।"
  },
  {
    key:
      "सूर्य के नीचे कपड़े लटकाओ, यह कुछ रोग पैदा करने वाले कीटाणुओं और परजीवियों को मारने में मदद करता है।"
  },
  {
    key:
      "छींकने पर नाक और मुंह ढकने से कीटाणुओं के फैलने को रोकने में मदद मिलती है।"
  }
];

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
  { key: "Cover nose and mouth when sneezing helps stop the spread of germs." }
];

export default class PersonalHygieneComponent extends BaseComponent {
  render() {
    const { language } = this.props.route.params;

    return (
      <Pages indicatorColor="blue">
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/handwash.png")}
          />
          <Text style={styles.paragraph}>
            {language === "English"
              ? `It is very important to clean hand properly, whenever you touch a surface. Virus/Germs can easily spread as soon as you touch eyes, nose, and mouth with unwashed hands. Refer to this link for more knowledge about cleaning hand properly.`
              : `जब भी आप स्पर्श करें, हाथ को अच्छी तरह से साफ करना बहुत महत्वपूर्ण है। 
              वायरस / कीटाणु आसानी से फैल सकते हैं जैसे ही मैला हाथ से आप आंखों, नाक और मुंह को छूते हैं। 
              अधिक जानकारी के लिए इस लिंक पर क्लिक करें।`}
            <Text
              style={styles.link}
              onPress={() =>
                this.connectivityCheck(() => {
                  this._handleExternalLink(
                    "https://www.youtube.com/watch?v=3PmVJQUCm4E"
                  );
                })
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
            {language === "English"
              ? `Do shower every day using warm water and soap. During warm weather you can take shower twice, with cold water too.`
              : `गर्म पानी और साबुन का उपयोग करके हर दिन स्नान करें। 
            गर्म मौसम के दौरान आप दो बार स्नान कर सकते हैं, ठंडे पानी के साथ भी।`}
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/nail.png")}
          />
          <Text style={styles.paragraph}>
            {language === "English"
              ? `It is important to keep nails short and trim. So that dirt can't settle under it. Kindly avoid biting and chewing nails.`
              : `नाखूनों को छोटा और ट्रिम रखना महत्वपूर्ण है। ताकि उसके नीचे गंदगी न जम सके। नाखूनों को काटने और चबाने से बचें।`}
          </Text>
        </View>
        <View style={styles.container}>
          <FlatList
            style={styles.flatList}
            data={
              language === "English" ? personalHygiene : personalHygieneHindi
            }
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
