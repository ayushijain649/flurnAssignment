import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput , ActivityIndicator} from 'react-native';
import { parent } from '../styles/styles';
import {PRIMARY_COLOR, APP_BACKGROUND, APP_WHITE, LIGHT_GRAY, MEDIUM_GRAY} from '../styles/colors';
import Toast from 'react-native-simple-toast';

import {API_URL, API_KEY} from '../utils/config' ;

const axios = require('axios')

export default class WelcomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading : false,
            searchString : ""
        };
    }

    gettingSearch = () => {
        this.setState({ isLoading : true });

        axios.get(`${API_URL}?s=${this.state.searchString}&apikey=${API_KEY}`).then(res => {
            // console.log(res.data);
            if(res.data.Response == "True"){
                this.props.navigation.navigate("MoviesListing", {res : res.data});
            }else {
                if(typeof(res.data.Error) == 'string'){
                    Toast.show(res.data.Error, Toast.LONG);
                }
            }
            this.setState({isLoading : false});
        }).catch(err => {
            this.setState({isLoading : false});
            console.log(err);
        })
        
    }

    render() {
        return (
            <View style={parent.container}>
                <ActivityIndicator animating={this.state.isLoading} size="large" color={PRIMARY_COLOR} style={{top:300}} />

                <View style={{flex:1,paddingHorizontal:10, justifyContent : 'center'}}>
                    <Text style={[parent.title, {textAlign : 'center', fontSize : 22}]}>Search movies that you want to know more about</Text>
                
                    <View style={{marginTop:40}}>
                        <TextInput 
                            style={{borderColor : PRIMARY_COLOR,borderWidth:1, height : 50, width:'100%', borderRadius : 10, paddingHorizontal:10, paddingVertical:7}}
                            value = {this.state.searchString}
                            onChangeText = {(val) => this.setState({searchString : val})}
                        />
                    </View>    

                    <View style={{marginTop:50, alignItems:'center'}}>
                        <TouchableOpacity onPress={() => this.gettingSearch()} style={{alignItems:'center', justifyContent:'center',borderRadius : 20, backgroundColor : PRIMARY_COLOR, paddingVertical:10, paddingHorizontal : 30}}>
                            <Text style={parent.whiteTitle}>Search</Text>
                        </TouchableOpacity>
                    </View>    
                </View>
            </View>
        );
    }
}