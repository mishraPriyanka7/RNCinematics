import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image
  } from 'react-native';
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux';
  import fetchPeopleImageData from '../actions/PropleImageAction'
  import ViewMoreText from 'react-native-view-more-text';

  class PeopleDetails extends Component {

    constructor(props){
        super(props);

        this.state={

            overView:'',
            Born:'',
            BirthPlace:'',

            peopleImageList: [],  
          
        };
    }

    componentWillMount() {
         this.props.fetchPeopleImageData()
      }
  
      componentWillReceiveProps(nextProps) {
          if (nextProps.PeopleImageData != '' && nextProps.PeopleImageData != undefined) {
             this.setState({ peopleImageList: nextProps.PeopleImageData.PeopleImageListData.profiles }) // this will update state to re-render ui
            // alert(JSON.stringify(nextProps.PeopleImageData.PeopleImageListData.profiles));
          }
         
     }

    componentDidMount() {
    
        return fetch('https://api.themoviedb.org/3/person/74568?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
               
                overView: responseJson.biography,
                Born: responseJson.birthday,
                BirthPlace: responseJson.place_of_birth
                
           
            }, function() {
              // In this block you can do something with new state.
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
            return(

                
                <View style={{flex:1}}>
               
              
                    <View style={{margin:10, flex:0.5}}>
                   <ScrollView>

                        <View>
                            <ViewMoreText
                                numberOfLines={3}
                                renderViewMore={this.renderViewMore}
                                renderViewLess={this.renderViewLess}
                                textStyle={{textAlign: 'center'}}>

                                <Text style={{fontSize:15, marginTop:10, alignItems:'center', justifyContent:'center'}}>
                                    {this.state.overView}
                                </Text>

                            </ViewMoreText>
                        </View>

                        <View style={{marginTop:10}}/>
                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>Born:</Text>
                            <Text style={Styles.textDetailsStyle}>{this.state.Born}</Text>
                        </View>
                        
                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>BirthPlace:</Text>
                            <Text style={Styles.textDetailsStyle}>{this.state.BirthPlace}</Text>
                        </View>

                        </ScrollView>

                    </View>

                    
                     <View style={{flex:0.5, backgroundColor:'#E1DBD9', marginTop:10}}>
                        <View style={{margin:10, marginLeft:10}}>
                            <Text style={Styles.textStyle}>Images</Text>
                        </View>
                        <View style={{}}> 

                            <FlatList
                                data={ this.state.peopleImageList }
                                horizontal={true}
                                renderItem={({item}) => 
                                <View>
                                <View style = {{flexDirection:'column', margin:2,
                                        justifyContent:'center'}}>
                                       
                                        <TouchableOpacity activeOpacity = { .5 }>
                                                <Image 
                                                    source={{uri: "http://image.tmdb.org/t/p/w185"+item.file_path}}
                                                    style={{width:130, height:170, margin:3}}>
                                                </Image>

                                        </TouchableOpacity>
                                        
                              
                                </View>
                                </View>
                                
                                }
                        />
                           
                        </View>
                     </View>
                   
                </View>
              
               
              

            )
        }
}

const Styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
    textStyle: {
        flexDirection:'row', 
        marginTop:10
    },

  });


function mapStateToProps(state) {
    return {
        PeopleImageData: state.PeopleImageData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPeopleImageData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetails);