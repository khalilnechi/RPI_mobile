YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
import { YellowBox } from 'react-native';
import _ from 'lodash';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  NetInfo
} from 'react-native';
import * as firebase from 'firebase';
import SnackBar from 'react-native-custom-snackbar';
import Bouton from './components/bouton';
import styles from './classes/styles';
console.ignoredYellowBox = ['Setting a timer'];

/******************************************************************************** */
var config = {
  apiKey: "AIzaSyBBWsCQTjw-Nbyp4SiiVE7OY_eXCbv_E3U",
  authDomain: "projetrpi-2018.firebaseapp.com",
  databaseURL: "https://projetrpi-2018.firebaseio.com",
  projectId: "projetrpi-2018",
  storageBucket: "projetrpi-2018.appspot.com",
  messagingSenderId: "433634129031"
};
firebase.initializeApp(config);
/******************************************************************************** */

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ImageBackground source={require('./img/rpi.png')} style={styles.img_bground}>
      <Text style={styles.welcome}>Commandez votre carte Raspberry</Text>

      </ImageBackground>
    );
  }
}
