import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
  } from 'react-native';


export default class SimilarMovies extends Component {

    constructor(props){
        super(props);

        this.state={
         movieList: [],
        };

    }

    componentWillMount() {
       this.setState({movieList:this.props.moviesData});
       //alert(JSON.stringify(movieList))
    }

    
    render(){
        return (

            <View style={{flex:1, margin:10,}}>
                    
                <View style={{height:1, backgroundColor:'#dddcdc'}}></View>
            
                <View style={{flex:0.2, flexDirection:'row', marginTop:10}}>
                    <Text style={{ alignItems:'flex-start', justifyContent:'flex-start',fontSize:16, margin:5}}>
                        similarMovie
                    </Text>
                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end'}}>
                    <Text style={{ fontSize:16,margin:5, color:'green'}}>
                        View All
                    </Text>
                    </View>
                </View>   

                <View style={{flex:0.8, flexDirection:'row', marginTop:10}}>
                    
                    <FlatList
                            data={ this.state.movieList }
                            horizontal={true}
                            renderItem={({item}) => 
                            <View>
                            <View style = {{flex:1, flexDirection:'column', margin:2,
                                    justifyContent:'center'}}>
                                    <View style={{justifyContent:'center'}}>
                                    <TouchableOpacity activeOpacity = { .5 }>
                                            <Image 
                                                source={{uri: "http://image.tmdb.org/t/p/w185"+item.backdrop_path}}
                                                style={{width:130, height:130, margin:2}}>
                                            </Image>

                                    </TouchableOpacity>
                                    </View>
                                        
                                    <View style = {{justifyContent:'center',alignItems:'center', marginTop:10}}>
                                            <Text style={{fontSize:15}}>{item.title}</Text>
                                            <Text style={{fontSize:13}}>{item.popularity}</Text>
                                    </View>
                                
                            </View>
                            </View>
                            
                            }
                        />
                </View>

        
            </View>
        )
    }   
}