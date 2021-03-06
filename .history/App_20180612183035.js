
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  NetInfo
} from 'react-native';
import SnackBar from 'react-native-custom-snackbar';
import Bouton from './components/bouton';
import styles from './classes/styles';

/******************************************************************************** */

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
