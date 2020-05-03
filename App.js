import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PersonalHygieneComponent from "./src/features/Awareness/PersonalHygieneComponent";
import FoodHygieneComponent from "./src/features/Awareness/FoodHygiene";
import HomeComponent from "./src/features/Awareness/HomeComponent";
import HouseHygiene from "./src/features/Awareness/HouseHygiene";
import OutsideComponent from "./src/features/Awareness/OutsideComponent";
import OnlineConsultation from "./src/features/UsefulLinks/OnlineConsultation";

const Stack = createStackNavigator();
function NavigatorConfig({ translateTo }) {
  return (
    <Stack.Navigator
      initialRouteName={translateTo === "English" ? "Home" : "सूची"}
    >
      <Stack.Screen
        name={translateTo === "English" ? "Home" : "सूची"}
        component={HomeComponent}
        initialParams={{ language: translateTo }}
      />
      <Stack.Screen
        name={
          translateTo === "English" ? "Personal hygiene" : "व्यक्तिगत स्वच्छता"
        }
        component={PersonalHygieneComponent}
        initialParams={{ language: translateTo }}
      />
      <Stack.Screen
        name={
          translateTo === "English" ? "Food hygiene" : "खान - पान की स्वच्छता"
        }
        component={FoodHygieneComponent}
        initialParams={{ language: translateTo }}
      />
      <Stack.Screen
        name={translateTo === "English" ? "Home hygiene" : "घर की स्वच्छता"}
        component={HouseHygiene}
        initialParams={{ language: translateTo }}
      />
      <Stack.Screen
        name={
          translateTo === "English"
            ? "While purchasing from outside"
            : "जब आप बाहर से आते हैं।"
        }
        component={OutsideComponent}
        initialParams={{ language: translateTo }}
      />
      <Stack.Screen
        name="Online consultation"
        component={OnlineConsultation}
        initialParams={{ language: translateTo }}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    result: null,
    language: "English"
  };

  changeLanguage() {
    let translateTo = "English";
    const { language } = this.state;

    if (language === "English") {
      translateTo = "   हिन्दी";
    }
    this.setState({
      language: translateTo
    });
  }

  render() {
    const { language } = this.state;
    const { navigation } = this.props;

    return (
      <NavigationContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logo}>
              <Image
                style={styles.logoImage}
                source={require("./assets/logo.png")}
              />
            </View>
            <Text style={styles.logoText}>
              {language === "English"
                ? "Information related to Covid19!"
                : "Covid19 से संबंधित जानकारी!"}
            </Text>
            <View style={styles.translateContainer}>
              <View style={styles.translateImage}>
                <TouchableOpacity onPress={() => this.changeLanguage()}>
                  <Image
                    title="Translate to English/Hindi"
                    style={styles.icon}
                    source={require("./assets/images/translate.png")}
                  />
                </TouchableOpacity>
              </View>
              <Text>{language}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <SafeAreaView style={styles.container}>
              <NavigatorConfig translateTo={language} />
            </SafeAreaView>
          </View>
          <View style={styles.footer}></View>
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: "25%",
    backgroundColor: "#d7fffd",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#aaa",
    width: 100,
    marginTop: 20,
    height: 100,
    padding: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoImage: {
    width: 90,
    height: 90
  },
  logoText: {
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  body: {
    height: "75%",
    flexDirection: "row",
    paddingBottom: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  listHeader: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  bodyInner: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fafba4",
    height: "100%",
    width: "100%",
    flex: 1
  },
  thumbnails: {
    padding: 5,
    width: "50%",
    height: "50%",
    justifyContent: "center"
  },
  thumbnailsInner: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff"
  },
  footer: {
    width: "100%",
    backgroundColor: "#d7fffd",
    height: "5%"
  },
  section: {
    width: "100%"
  },
  translateContainer: {
    position: "absolute",
    right: 20,
    top: 40
  },
  translateImage: {
    borderRadius: 100,
    backgroundColor: "#ffffff",
    padding: 5,
    borderColor: "#555",
    borderWidth: 2
  },
  icon: {
    width: 32,
    height: 32
  }
});
