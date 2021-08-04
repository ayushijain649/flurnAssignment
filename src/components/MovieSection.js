import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
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
            <View style={{flex:1 , backgroundColor:'#dcdcdc', borderRadius:10, width:'100%'}}>
                <View style={{flex:1,padding:10, alignItems : 'center', justifyContent : 'center'}}>
                    <Image source={{uri : this.props.image}} style={{height:70, width:70, resizeMode : 'contain'}} />
                    <Text style={[parent.title, {fontSize:14, textAlign:'center', marginTop:10}]}>{this.props.title}</Text> 
                    <TouchableOpacity hitSlop = {{top:7 ,left:7, right:7, bottom:7 }} onPress={() => { this.props.gettingFavorite(this.props.id , !this.props.save) }} >
                        { this.props.save ? 
                            <Image source={require('../assets/images/like-filled.png')} style={{height:22, width:22, resizeMode : 'contain', marginTop:8}} />
                        :
                            <Image source={require('../assets/images/like-emptyy.png')} style={{height:22, width:22, resizeMode : 'contain', marginTop:8}} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}