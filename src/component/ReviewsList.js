import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
    ActivityIndicator
  } from 'react-native';
  import {Actions} from 'react-native-router-flux';
  import ViewMoreText from 'react-native-view-more-text';


  export default class ReviewsList extends Component {

    constructor(props){
        super(props);

        this.state={
            reviewsList: [],     
            isLoading: true, 
        };
    }
 

   componentDidMount() {
    
    return fetch('https://api.themoviedb.org/3/movie/'+this.props.movieIds+'/reviews?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          reviewsList: responseJson.results
          

        }, function() {
        
        });
       // alert(JSON.stringify(responseJson.results))
      })
      .catch((error) => {
        console.error(error);
      });

  }

    renderViewMore(onPress){
        return(
        <Text onPress={onPress}>View more</Text>
        )
    }
    renderViewLess(onPress){
        return(
        <Text onPress={onPress}>View less</Text>
        )
    }

    render(){

        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }

        return(
            <View style={Styles.mainContainer}>
            
                <FlatList
                            data={ this.state.reviewsList }
                            renderItem={({item}) => 

                            
                            <TouchableOpacity  onPress={() => Actions.ReviewDetail({reviewId : item.url})}>
                            <View style={{flex:1,  margin:5,}}>
                            <View style = {{flexDirection:'row'}}>
                                    <View style={{margin:5}}>
                                   
                                        <Image source={require('../images/star.png')}
                                         style={{width:40, height:40, borderRadius:35}}/>
                                   
                                    </View>
                                    
                                    <View style = {{justifyContent:'center',marginLeft:5}}>
                                        <Text style={{fontSize:15,color:'black'}}>{item.author}</Text>
                                    </View>
                            </View>

                            <View style = {{ justifyContent:'center', marginLeft:10}}>
                            <ViewMoreText
                                numberOfLines={3}
                                renderViewMore={this.renderViewMore}
                                renderViewLess={this.renderViewLess}
                                textStyle={{textAlign: 'center'}}>
                                    
                                <Text style={{fontSize:15}}>{item.content}</Text>
                               
                            </ViewMoreText>
                            </View>
                            
                            <View style={{flex:1,height:1, backgroundColor:'#dddcdc', marginTop:10}}></View>
                        
                        </View>
                       
                        </TouchableOpacity>
                       
                            }
                        />
            </View>
        )
            
        
    }

}


const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        margin:10
        
    },
  });
