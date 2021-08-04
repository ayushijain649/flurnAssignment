import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image , ActivityIndicator} from 'react-native';
import { parent } from '../styles/styles';
import {PRIMARY_COLOR, APP_BACKGROUND,DARK_GRAY, APP_WHITE, LIGHT_GRAY, MEDIUM_GRAY} from '../styles/colors';

export default class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemDetails : this.props.route.params.details
        };
        console.log(this.state.itemDetails);
    }

    render() {
        return (
            <View style={{flex:1}}>
                {this.state.itemDetails ? (
                    <View style={{flex:1, backgroundColor:APP_BACKGROUND}}>
                        <View style={{height : 50,flexDirection:'row', backgroundColor : PRIMARY_COLOR, alignItems : 'center', justifyContent : 'space-between', paddingHorizontal :15}}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flex:1}}>
                                <Image source={require('../assets/images/back-arrow.png')} style={{height:22, width:22}} />
                            </TouchableOpacity>

                            <Text style={[parent.whiteTitle, {flex:5, textAlign : 'center', fontSize : 18}]}>{this.state.itemDetails.Title}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorites')} style={{flex:1, alignItems:'flex-end'}}>
                                <Image source={require('../assets/images/save.png')} style={{height:22, width:22}} />
                            </TouchableOpacity>
                        </View>

                        <Image source={{uri : this.state.itemDetails.Poster}} style={{flex:1, marginTop:6, height : 200, resizeMode : 'contain'}} />
                        
                        <View style={parent.container}>
                            <Text style={[parent.title, {fontSize : 20}]}>{this.state.itemDetails.Title}</Text>
                            <Text style={{color : DARK_GRAY, fontSize:17}}>Year : {this.state.itemDetails.Year}</Text>
                            <Text style={{color : DARK_GRAY, fontSize:17}}>Type : {this.state.itemDetails.Type}</Text>
                        </View>
                    </View>
                ) : 
                    <ActivityIndicator animating={true} size="large" color={PRIMARY_COLOR} style={{top:300}} />
                }

            </View>
        );
    }
}