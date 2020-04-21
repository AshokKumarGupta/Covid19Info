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
        redirect: "Personal hygiene"
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
        title: "When you come from outside.",
        redirect: "FoodHygiene"
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
        title: "Online consultation(India)",
        redirect: "Hygiene"
      }
    ]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class HomeComponent extends Component {
  _handlePressButtonAsync = async uri => {
    let result = await WebBrowser.openBrowserAsync(uri);
    this.setState({ result: result });
  };
  _handleRedirect = item => {
    if (item.redirect.indexOf("http") !== -1) {
      this._handlePressButtonAsync(item.redirect);
    } else {
      const { navigate } = this.props.navigation;
      navigate(item.redirect);
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
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