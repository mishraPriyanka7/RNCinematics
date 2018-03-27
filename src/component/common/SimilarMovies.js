import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
    StyleSheet,
  } from 'react-native';

  const window = Dimensions.get("window");
  
export default class SimilarMovies extends Component {

    constructor(props){
        super(props);

        this.state={
         movieList: [],
        };

    }

    componentWillMount() {
       this.setState({movieList:this.props.similarMovieData});
      // alert(JSON.stringify(this.props.similarMovieData))
    }

    
    render(){

        return (

            <View style={{flex:1, margin:10,}}>
              <View style={{marginTop:10}}>
                    
                    <FlatList
                            data={ this.state.movieList }
                            numColumns = {3}
                            renderItem={({item}) => 
                            <View>
                            <View style={{ flex: 1, flexDirection: "column", margin: 1, padding: 5 }}>

                                <Image
                                style={styles.ImageComponentStyle}
                                source={{uri: "http://image.tmdb.org/t/p/w185"+item.backdrop_path}}
                                />


                                <Text style={styles.ItemTextStyle} numberOfLines={2}>
                                    {item.title}
                                </Text>

                            </View>
                            </View>
                            
                            }
                        />
                </View>

        
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    
    ImageComponentStyle: {
      justifyContent: "center",
      alignItems: "center",
      width:(window.width/3)-5,
      height:(window.width/2.5),
      backgroundColor: "#4CAF50"
    },
    ItemTextStyle: {
      color: "#000000",
      padding: 10,
      fontSize: 12,
      textAlign: "left",
      width:(window.width/3)-5,
      height:(window.width/7),
      backgroundColor: "#d0d3d4",
      marginBottom: 5
    },
   
  });
  