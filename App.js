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

    this.state = {
      led1_state: "",
      led2_state: "",
      led3_state: "",
      led4_state: "",
      led5_state: "",
      led6_state: "",
      connexion_internet: true,
      temperature: "",
      humidité: "",
      mouvement: "",
    };
  }
  Verifier_connexion() {
    NetInfo.isConnected.addEventListener('connectionChange', (isConnected) => {
      this.setState({
        connexion_internet: isConnected
      });
      if (!isConnected)
        this.refs.SnackBarRouge.show("Erreur Verifiez votre connexion internet");
      else
        this.refs.SnackBarVert.show("                                     Connecté");
    });
  }
  Allumer_eteindre_led(led) {
    if (!this.state.connexion_internet)
      this.refs.mySnackBar.show("Erreur Verifiez votre connexion internet");
    else {

      firebase.database().ref("Leds/" + [led]).once('value', (child) => {

        firebase.database().ref("Leds/").update({ [led]: !child.val() })

      });

    }
  }
  componentWillMount() {

    this.Verifier_connexion()
    firebase.database().ref("Leds/LED1").on('value', (led) => {

      this.setState({
        led1_state: led.val(),
      })
    });
    firebase.database().ref("Leds/LED2").on('value', (led) => {

      this.setState({
        led2_state: led.val(),
      })
    });
    firebase.database().ref("Leds/LED3").on('value', (led) => {

      this.setState({
        led3_state: led.val(),
      })
    });
    firebase.database().ref("Leds/LED4").on('value', (led) => {

      this.setState({
        led4_state: led.val(),
      })
    });
    firebase.database().ref("Leds/LED5").on('value', (led) => {

      this.setState({
        led5_state: led.val(),
      })
    });
    firebase.database().ref("Leds/LED6").on('value', (led) => {

      this.setState({
        led6_state: led.val(),
      })
    })

    firebase.database().ref("Capteurs/DHT/Temperature").on('value', (temp) => {

      this.setState({
        temperature: temp.val(),
      })
    });

    firebase.database().ref("Capteurs/DHT/Humidité").on('value', (hum) => {

      this.setState({
        humidité: hum.val(),
      })
    });
    firebase.database().ref("Capteurs/HCSR501").on('value', (mvmnt) => {

      this.setState({
        mouvement: mvmnt.val(),
      })

      if (this.state.mouvement == 1)
        this.refs.mySnackBar.show("Capteur de mouvement : Présence d'un objet");
    });
  }
  render() {
    return (
      <ImageBackground source={require('./img/rpi.png')} style={styles.img_bground}>
        <Text style={styles.welcome}>Commandez votre carte Raspberry</Text>
        <View style={styles.row}>
        <Bouton texte="LED1" onPress={() => { this.Allumer_eteindre_led("LED1"); }} etat={this.state.led1_state} />
        <Bouton texte="LED4" onPress={() => { this.Allumer_eteindre_led("LED4"); }} etat={this.state.led4_state} />
        </View>
        <View style={styles.row}>
        <Bouton texte="LED2" onPress={() => { this.Allumer_eteindre_led("LED2"); }} etat={this.state.led2_state} />
        <Bouton texte="LED5" onPress={() => { this.Allumer_eteindre_led("LED5"); }} etat={this.state.led5_state} />
        </View>
        <View style={styles.row}>
        <Bouton texte="LED3" onPress={() => { this.Allumer_eteindre_led("LED3"); }} etat={this.state.led3_state} />
        <Bouton texte="LED6" onPress={() => { this.Allumer_eteindre_led("LED6"); }} etat={this.state.led6_state} />
        </View>
        <Text style={styles.txt}>{"Température = " + this.state.temperature+"°C"}</Text>
        <Text style={styles.txt}>{"Humidité = " + this.state.humidité+"%"}</Text>
        <SnackBar
          ref="SnackBarRouge"
          snackBarBackColor='red'
        />
        <SnackBar
          ref="SnackBarVert"
          snackBarBackColor='#4cd137'
          imageColor = "#4cd137"
        />
        <SnackBar
          ref="mySnackBar"
        />
      </ImageBackground>
    );
  }
}
