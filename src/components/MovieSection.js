import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { parent } from '../styles/styles';
import {PRIMARY_COLOR, APP_BACKGROUND, APP_WHITE, LIGHT_GRAY, MEDIUM_GRAY} from '../styles/colors';

export default class MovieSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{flex:1 , backgroundColor:LIGHT_GRAY, borderRadius:10, padding:10}}>
                <View style={{flex:1,padding:10, alignItems : 'center', justifyContent : 'center'}}>
                    <Text style={[parent.title, {textAlign : 'center', fontSize : 22}]}>Movie</Text>
                   
                   {/* 
                    <View style={{marginTop:50, alignItems:'center'}}>
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center',borderRadius : 20, backgroundColor : PRIMARY_COLOR, paddingVertical:10, paddingHorizontal : 30}}>
                            <Text style={parent.whiteTitle}>Search</Text>
                        </TouchableOpacity>
                    </View>    */}
                </View>
            </View>
        );
    }
}