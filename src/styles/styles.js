import { StyleSheet } from 'react-native';
import {PRIMARY_COLOR, APP_BACKGROUND, APP_WHITE,DARK_GRAY, LIGHT_GRAY, MEDIUM_GRAY} from '../styles/colors';
import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const parent = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_BACKGROUND,
        padding : 20
    },
    title : {
    	fontSize : 17 ,
    	color : DARK_GRAY,
    	fontWeight : 'bold'
    },
    whiteTitle : {
    	fontSize:16, 
    	color : APP_WHITE, 
    	fontWeight : 'bold'
    }
});
