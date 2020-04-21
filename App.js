import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Button
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PersonalHygieneComponent from "./src/features/Awareness/PersonalHygieneComponent";
import FoodHygieneComponent from "./src/features/Awareness/FoodHygiene";
import HomeComponent from "./src/features/Awareness/HomeComponent";

const Stack = createStackNavigator();
function NavigatorConfig() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeComponent} />
      <Stack.Screen
        name="Personal hygiene"
        component={PersonalHygieneComponent}
      />
      <Stack.Screen name="Food hygiene" component={FoodHygieneComponent} />
      <Stack.Screen name="Home hygiene" component={PersonalHygieneComponent} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    result: null
  };
  render() {
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
              All information related to Covid!
            </Text>
          </View>
          <View style={styles.body}>
            <SafeAreaView style={styles.container}>
              <NavigatorConfig />
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
  }
});
