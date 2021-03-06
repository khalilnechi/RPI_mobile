import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import styles from '../classes/styles'
class Bouton extends Component {

    render() {
        if(this.props.etat)
        return (

            <TouchableHighlight
                style={styles.btn_led_allume}
                onPress={this.props.onPress}
                disabled={this.props.disabled}
                underlayColor="rgba(255,255,255,0.2)"
            >

                    <Text style={styles.btn_led_text}>{this.props.texte}</Text>

            </TouchableHighlight>

        );
        else
        return (

            <TouchableHighlight
                style={styles.btn_led_eteinte}
                onPress={this.props.onPress}
                disabled={this.props.disabled}
                underlayColor="rgba(255,255,255,0.2)"
            >

                    <Text style={styles.btn_led_text}>{this.props.texte}</Text>

            </TouchableHighlight>

        );

    }
}


export default Bouton;