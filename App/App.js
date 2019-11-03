import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const isEqual = require('lodash.isequal');

import AppNavigator from './navigation/AppNavigator';

import getLocation from './utils/Location';
import getUpdates from './utils/Sockets';


const updateLocation = function(setLocation, { coords }) {
  coords.latitudeDelta = 0.05
  coords.longitudeDelta = 0.05
  setLocation(coords)
}

const updateInfo = function(setSafe, setBad, setPeople, oldPeople, oldSafe, oldDang, { person, location }) {
  const bads = location.filter( loc => !loc.isSafe )
  const safes = location.filter( loc => loc.isSafe )
  if(!isEqual(oldPeople, person)) {
    setPeople(person)
    console.log('ho')
  }
  if(!isEqual(oldSafe, safes)) {
    setSafe(safes)
    console.log('ho2')
  }
  if(!isEqual(oldDang, bads)) {
    setBad(bads)
    console.log('ho3')
  }
}


const initSelf = { latitude: 30.2822200, longitude: -97.7412049, latitudeDelta: 0.05, longitudeDelta: 0.05 }

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const [self, setLocation] = useState(initSelf)
  const [safeLocations, setSafe] = useState([])
  const [badLocations, setBad] = useState([])
  const [inDanger, setPeople] = useState([])

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    getLocation(updateLocation.bind(this, setLocation))
    getUpdates( updateInfo.bind(this, setSafe, setBad, setPeople, inDanger, safeLocations, badLocations) )
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator screenProps={{ safeLocations, badLocations, inDanger, self }}/>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
