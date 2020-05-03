import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  SectionList
} from "react-native";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import BaseComponent from "../BaseComponent";

const DATAHINDI = [
  {
    title: "दैनिक समाचार",
    data: [
      {
        title: "मामलों की संख्या (भारत)",
        redirect: "https://www.covid19india.org/"
      },
      {
        title: "मामलों की संख्या (विश्व)",
        redirect: "https://www.worldometers.info/coronavirus/"
      },
      {
        title: "Covid विज़ुअलाइज़र",
        redirect: "https://covidvisualizer.com/"
      }
    ]
  },
  {
    title: "स्वच्छता और स्वास्थ्य युक्तियाँ",
    data: [
      {
        title: "व्यक्तिगत स्वच्छता",
        redirect: "व्यक्तिगत स्वच्छता"
      },
      {
        title: "घर की स्वच्छता",
        redirect: "घर की स्वच्छता"
      },
      {
        title: "खान - पान की स्वच्छता",
        redirect: "खान - पान की स्वच्छता"
      },
      {
        title: "स्वास्थ्य सुझाव",
        redirect:
          "https://www.mohfw.gov.in/pdf/ImmunityBoostingAYUSHAdvisory.pdf"
      },
      {
        title: "जब आप बाहर से आते हैं।",
        redirect: "जब आप बाहर से आते हैं।"
      }
    ]
  },
  {
    title: "उपयोगी कड़ियाँ",
    data: [
      {
        title: "हेल्पलाइन नंबर",
        redirect: "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
      },
      {
        title: "डाउनलोड करें AarogyaSetu",
        redirect:
          "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_GB"
      },
      {
        title: "स्वास्थ्य और परिवार कल्याण मंत्रालय",
        redirect: "https://www.mohfw.gov.in/"
      },
      {
        title: "Covid वारियर्स (भारत)",
        redirect: "https://covidwarriors.gov.in/"
      }
    ]
  }
];

const DATA = [
  {
    title: "Daily news",
    data: [
      {
        title: "No of cases(India)",
        redirect: "https://www.covid19india.org/"
      },
      {
        title: "No of cases(World)",
        redirect: "https://www.worldometers.info/coronavirus/"
      },
      {
        title: "Covid visualizer",
        redirect: "https://covidvisualizer.com/"
      }
    ]
  },
  {
    title: "Hygiene & Health tips",
    data: [
      {
        title: "Personal hygiene",
        redirect: "Personal hygiene"
      },
      {
        title: "Home hygiene",
        redirect: "Home hygiene"
      },
      {
        title: "Food hygiene",
        redirect: "Food hygiene"
      },
      {
        title: "Health Tips",
        redirect:
          "https://www.mohfw.gov.in/pdf/ImmunityBoostingAYUSHAdvisory.pdf"
      },
      {
        title: "While purchasing from outside",
        redirect: "While purchasing from outside"
      }
    ]
  },
  {
    title: "Useful links",
    data: [
      {
        title: "Helpline nos",
        redirect: "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
      },
      {
        title: "Download AarogyaSetu",
        redirect:
          "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_GB"
      },
      {
        title: "Ministry of Health &  Family Welfare",
        redirect: "https://www.mohfw.gov.in/"
      },
      {
        title: "Covid Warriors(India)",
        redirect: "https://covidwarriors.gov.in/"
      }
    ]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class HomeComponent extends BaseComponent {
  _handlePressButtonAsync = async uri => {
    let result = await WebBrowser.openBrowserAsync(uri);
    this.setState({ result: result });
  };

  _handleRedirect = item => {
    if (item.redirect.indexOf("http") !== -1) {
      this.connectivityCheck(() => this._handlePressButtonAsync(item.redirect));
    } else {
      const { navigate } = this.props.navigation;
      navigate(item.redirect);
    }
  };

  render() {
    const { language } = this.props.route.params;

    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={language === "English" ? DATA : DATAHINDI}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }, index) => (
            <React.Fragment>
              <Button
                style={styles.btnElement}
                title={item.title}
                color="#20639b"
                accessibilityLabel={"Learn more about " + item.title}
                onPress={() => {
                  this._handleRedirect(item);
                }}
              />
            </React.Fragment>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  btnElement: {
    fontSize: 18,
    padding: 10
  }
});
