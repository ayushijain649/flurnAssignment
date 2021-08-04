import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { parent } from '../styles/styles';
import {PRIMARY_COLOR, APP_BACKGROUND,DARK_GRAY, APP_WHITE, LIGHT_GRAY, MEDIUM_GRAY} from '../styles/colors';

export default class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height : 50,flexDirection:'row', backgroundColor : PRIMARY_COLOR, alignItems : 'center', justifyContent : 'space-between', paddingHorizontal :15}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flex:1}}>
                        <Image source={require('../assets/images/back-arrow.png')} style={{height:22, width:22}} />
                    </TouchableOpacity>

                    <Text style={[parent.whiteTitle, {flex:5, textAlign : 'center', fontSize : 18}]}>{this.props.route.params.name}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorites')} style={{flex:1, alignItems:'flex-end'}}>
                        <Image source={require('../assets/images/save.png')} style={{height:22, width:22}} />
                    </TouchableOpacity>
                </View>

                <Image source={require('../assets/images/back-arrow.png')} style={{flex:1, height : 200, resizeMode : 'contain'}} />
                
                <View style={parent.container}>
                    <Text style={[parent.title, {fontSize : 20}]}>{this.props.route.params.name}</Text>
                    <Text style={{color : DARK_GRAY, fontSize:17}}>{this.props.route.params.name}</Text>
                </View>
            </View>
        );
    }
}