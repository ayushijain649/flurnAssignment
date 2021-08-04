import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { parent } from '../styles/styles';
import {PRIMARY_COLOR, APP_BACKGROUND, APP_WHITE, LIGHT_GRAY, MEDIUM_GRAY} from '../styles/colors';
import MovieSection from '../components/MovieSection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieList : []
        };
        // console.log('props.route.params.res');
        // console.log(props.route.params.res);
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        AsyncStorage.getItem('savedFavorites', (err, favorite) => {
            if(favorite){
                var favorites = JSON.parse(favorite);
                favorites.forEach( (item, index) => {
                    favorites[index] = {...favorites[index] , save : 1 }
                })
                this.setState({movieList : favorites});
            }   
        });   
    }

    gettingFavorite = (id, isSaved) => {
        // console.log(id);
        // console.log(isSaved);
        var finalFavorites ;
        var foundItem ;

        var Arr = this.state.movieList ;
        this.state.movieList.forEach( (item, index) => {
            if(item.imdbID == id){
                foundItem = item ;
                Arr[index] = {...Arr[index] , save : isSaved }
            }
        })
        this.setState({movieList : Arr});

        AsyncStorage.getItem('savedFavorites', (err, favorite) => {

            if(favorite){
                var favorites = JSON.parse(favorite);

                if(isSaved == true){
                    finalFavorites = [...favorites , foundItem] ;
                } else {
                    var newArr = favorites;
                    favorites.forEach( (item, index) => {
                        if(item.imdbID == id){
                            newArr.splice(index,1);
                            finalFavorites = newArr;
                        }
                    })        
                }    
            }else {
                finalFavorites = [foundItem];
            }

            this.saveData(finalFavorites);
        });
        
    }

    saveData = async (favorites) => {
        // console.log('favorites');
        // console.log(favorites);
        try {
            await AsyncStorage.setItem('savedFavorites', JSON.stringify(favorites) );
        } catch (e) {
            console.log(e);
        }
        this.getData();
    };

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height : 50,flexDirection:'row', backgroundColor : PRIMARY_COLOR, alignItems : 'center', justifyContent : 'space-between', paddingHorizontal :15}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flex:1}}>
                        <Image source={require('../assets/images/back-arrow.png')} style={{height:22, width:22}} />
                    </TouchableOpacity>

                    <Text style={[parent.whiteTitle, {flex:5, textAlign : 'center', fontSize : 18}]}>Favorites</Text>
                    <View style={{flex:1}}>
                    </View>
                </View>

                <View style={[parent.container, {padding:10}]}>
                    <View style={{justifyContent:'space-between', flex:1, flexDirection:'row'}}>
                        <FlatList
                            data={this.state.movieList}
                            showsVerticalScrollIndicator = {false}
                            numColumns = {2}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress = {() => this.props.navigation.navigate('MovieDetails', {details : item})} style={{flex:0.5, alignItems:'center', margin:10}}>
                                    <MovieSection 
                                        image = {item.Poster}
                                        title = {item.Title}
                                        save = {item.save}
                                        id = {item.imdbID}
                                        gettingFavorite = {this.gettingFavorite.bind(this)}
                                    />
                                    
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.imdbID}
                        />
                    </View>    
                    
                </View>
            </View>
        );
    }
}