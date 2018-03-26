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
  import fetchPeopleImageData from '../actions/PeopleDetailsAction'
  import {fetchPeopleData} from '../actions/PeopleDetailsAction'
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
         this.props.fetchPeopleImageData(this.props.castIds)
         this.props.fetchPeopleData(this.props.castIds)
      }
  
      componentWillReceiveProps(nextProps) {
          if (nextProps.PeopleImageData != '' && nextProps.PeopleImageData != undefined) {
             this.setState({ peopleImageList: nextProps.PeopleImageData.PeopleImageListData.profiles })
          }
          if (nextProps.PeopleDetailData != '' && nextProps.PeopleDetailData != undefined) {
            this.setState({ overView: nextProps.PeopleDetailData.PeopleDetailListData.biography,
                            Born: nextProps.PeopleDetailData.PeopleDetailListData.birthday,
                            BirthPlace: nextProps.PeopleDetailData.PeopleDetailListData.place_of_birth })
                            //alert("People Details"+JSON.stringify(nextProps.PeopleDetailData.biography))
         }
         
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
                     <View style={{margin:10}}>
                       
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

                       

                    </View>

                    
                     <View style={{ backgroundColor:'#E1DBD9', marginTop:10}}>
                        <View style={{margin:10, marginLeft:30,}}>
                            <Text style={{fontSize:17}}>Images</Text>
                        </View>
                        <View style={{marginBottom:10,marginLeft:15,marginRight:15}}> 

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
                                                    style={{width:130, height:180, margin:3}}>
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
    //alert("** People Details ** "+JSON.stringify(state.PeopleDetails))
    return {
        PeopleImageData: state.PeopleImageData,
        PeopleDetailData: state.PeopleDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPeopleImageData, fetchPeopleData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetails);
