import { Platform,StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10
    },
    img_bground: {
        width: width ? width : 320,
        height: 620,
        justifyContent: "center",
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
        margin: 10,
        alignSelf: 'center',
        padding: 10
    },
    btn_led_eteinte: {
        backgroundColor: '#2d3436',
        alignSelf: 'center',
        borderRadius: 7,
        padding: 12,
        borderWidth: 0.7,
        borderColor: 'white',
        margin:10,
    },
    btn_led_allume:{
        backgroundColor: '#eb2f06',
        alignSelf: 'center',
        borderRadius: 7,
        padding: 12,
        borderWidth: 0.7,
        borderColor: 'white',
        margin:10
    },
    btn_led_text: {
        fontSize: 16,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'white'
    },    
    icon: {
        width: 30,
        height: 32,
        marginTop: 20,
        marginRight: 10
    },
    welcome: {
        color: '#ffeaa7',
        fontSize: 30,
        fontFamily: Platform.OS === 'ios' ? 'San Francisco':'sans-serif-thin',
        marginTop: Platform.OS === 'ios' ? 0:20,
        marginBottom:30,
        textAlign: 'center'
    },
    txt: {
        color: '#c8d6e5',
        fontSize: 19,
        fontFamily: Platform.OS === 'ios' ? 'San Francisco':'sans-serif-thin',
        marginTop: Platform.OS === 'ios' ? 0:20,
        marginBottom:10,
        textAlign: 'center'
    },



});