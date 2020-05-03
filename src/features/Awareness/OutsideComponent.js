import React, { Component } from "react";
import { Pages } from "react-native-pages";
import { View, Image, StyleSheet, Text } from "react-native";
import BaseComponent from "../BaseComponent";

export default class OutsideComponent extends BaseComponent {
  render() {
    const { language } = this.props.route.params;

    return (
      <Pages indicatorColor="blue">
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/shopping.png")}
          />
          {language === "English" && (
            <Text style={styles.paragraph}>
              Buying essentials can't be avoided, hence it is important to keep
              below suggested safety in mind:
              {"\n"}1. Always cover your face with cloth made mask.
              {"\n"}2. Carry sanitizer along with you and use as needed.
              {"\n"}3. Wear comfortable clothes, once back home keep them in
              washing tub.
              {"\n"}4. Choose morning time, so that once back home take bath.
              {"\n"}5. Maintain safe distance during purchasing
              {"\n"}6. Avoid cash transactions
              {"\n"}7. Please swipe left to see more
            </Text>
          )}
          {language !== "English" && (
            <Text style={styles.paragraph}>
              आवश्यक खरीदने से बचा नहीं जा सकता है, इसलिए इसे रखना महत्वपूर्ण
              है, नीचे दी गई सुरक्षा को ध्यान में रखते हुए:
              {"\n"}1. हमेशा अपने चेहरे को कपड़े से बने मास्क से कवर करें।
              {"\n"}2. अपने साथ सैनिटाइज़र ले जाएँ और आवश्यकतानुसार उपयोग करें।
              {"\n"}3. आरामदायक कपड़े पहनें, एक बार घर वापस आने पर उन्हें टब में
              रखें।
              {"\n"}4. सुबह का समय चुनें, ताकि एक बार घर वापस नहा लें।
              {"\n"}5. खरीदारी के दौरान सुरक्षित दूरी बनाए रखें
              {"\n"}6. नकद लेन-देन से बचें
              {"\n"}7. अधिक देखने के लिए कृपया बाईं ओर स्वाइप करें
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require("../../../assets/images/shopping.png")}
          />
          {language === "English" && (
            <Text style={styles.paragraph}>
              Continued...:
              {"\n"}7. If need to deal in cash then wash currency and leave
              untouched under direct sunlight to reduce virus.
              {"\n"}8. Clean doors handle and any areas of your home that you
              might have touched.
              {"\n"}9. Maintain safe distance from family members for about 72
              hours.
              {"\n"}10. Reduce frequency of going out to once or twice a week.
            </Text>
          )}
          {language !== "English" && (
            <Text style={styles.paragraph}>
              लगातर ...:
              {"\n"}7. यदि नकदी में सौदा करने की जरूरत है तो मुद्रा को धो लें और
              वायरस को कम करने के लिए सीधे धूप के नीचे छोड़ दें।
              {"\n"}8. स्वच्छ दरवाज़े के हैंडल और आपके घर का कोई भी क्षेत्र जिसे
              आपने छुआ होगा।
              {"\n"}9. लगभग 72 घंटे परिवार के सदस्यों से सुरक्षित दूरी बनाए
              रखें।
              {"\n"}10. सप्ताह में एक या दो बार बाहर जाने की आवृत्ति कम करें।
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
