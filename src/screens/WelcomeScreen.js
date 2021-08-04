import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { parent } from '../styles/styles';
import {PRIMARY_COLOR, APP_BACKGROUND, APP_WHITE, LIGHT_GRAY, MEDIUM_GRAY} from '../styles/colors';

export default class WelcomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={parent.container}>
                <View style={{flex:1,paddingHorizontal:10, alignItems : 'center', justifyContent : 'center'}}>
                    <Text style={[parent.title, {textAlign : 'center', fontSize : 22}]}>Search movies that you want to know more about</Text>
                
                    <View style={{marginTop:50, alignItems:'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("MoviesListing")} style={{alignItems:'center', justifyContent:'center',borderRadius : 20, backgroundColor : PRIMARY_COLOR, paddingVertical:10, paddingHorizontal : 30}}>
                            <Text style={parent.whiteTitle}>Search</Text>
                        </TouchableOpacity>
                    </View>    
                </View>
            </View>
        );
    }
}