import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { parent } from '../styles/styles';
import {PRIMARY_COLOR, APP_BACKGROUND, APP_WHITE, LIGHT_GRAY, MEDIUM_GRAY} from '../styles/colors';
import MovieSection from '../components/MovieSection';

export default class MoviesListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieList : [1,2,3,4,5,6]
        };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height : 50,flexDirection:'row', backgroundColor : PRIMARY_COLOR, alignItems : 'center', justifyContent : 'space-between', paddingHorizontal :15}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flex:1}}>
                        <Image source={require('../assets/images/back-arrow.png')} style={{height:22, width:22}} />
                    </TouchableOpacity>

                    <Text style={[parent.whiteTitle, {flex:5, textAlign : 'center', fontSize : 18}]}>Movies</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorites')} style={{flex:1, alignItems:'flex-end'}}>
                        <Image source={require('../assets/images/save.png')} style={{height:22, width:22}} />
                    </TouchableOpacity>
                </View>

                <View style={[parent.container, {padding:10}]}>
                    <View style={{justifyContent:'space-between', flex:1, flexDirection:'row'}}>
                        <FlatList
                            data={this.state.movieList}
                            numColumns = {2}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress = {() => this.props.navigation.navigate('MovieDetails', {name : item})} style={{flex:1, alignItems:'center', margin:15,}}>
                                    <MovieSection />
                                    
                                    <Text style={parent.title}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            // keyExtractor={item => item.id}
                        />
                    </View>    
                    
                </View>
            </View>
        );
    }
}