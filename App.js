import React from 'react';
import { Button, SectionList, StyleSheet, View, Text, TextInput, LogBox } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import AppNavigator from './Navigation'
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading'; 
import * as Notifications from 'expo-notifications';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }

    // // setting notification to show when app is on foreground
    // Notifications.setNotificationHandler({
    //   handleNotification: async () => ({
    //     shouldShowAlert: true,
    //     shouldPlaySound: false,
    //     shouldSetBadge: false,
    //   }),
    // });
  }

  // // pre load images and fonts
  // async _loadAssetsAsync() {
  //   const imageAssets = cacheImages([
  //     require('./assets/home.png')
  //   ]);

  //   const fontAssets = cacheFonts([{heeboRegular: require('./assets/Fonts/Heebo-Regular.ttf')}, {heeboLight: require('./assets/Fonts/Heebo-Light.ttf')}, {heeboBold: require('./assets/Fonts/Heebo-Bold.ttf')}, {heeboThin: require('./assets/Fonts/Heebo-Thin.ttf')}]);

  //   await Promise.all([...imageAssets, ...fontAssets]);
  // }

  render() {
    if (!this.state.loaded) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ loaded: true })}
          onError={console.warn}
        />
      )
    }

    else return (<AppNavigator/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
