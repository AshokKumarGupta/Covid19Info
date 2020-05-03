import { Component } from "react";
import { Alert, Linking } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default class BaseComponent extends Component {
  unsubscribeConnectivityCheck;

  constructor(props) {
    super(props);
    this.subscribeConnectivityCheck();
  }

  componentWillUnmount() {
    this.subscribeConnectivityCheck();
  }

  _handleExternalLink = url => {
    Linking.openURL(url);
  };

  subscribeConnectivityCheck = () =>
    NetInfo.addEventListener(state => {
      this.promptOfflineMessage(state);
    });

  promptOfflineMessage = state => {
    if (!state.isConnected) {
      Alert.alert(
        "You are offline, Please check your connection and try again!"
      );
    }
  };

  connectivityCheck = callback => {
    NetInfo.fetch().then(state => {
      this.promptOfflineMessage(state);
      if (!!state.isConnected) {
        callback();
      }
    });
  };
}
