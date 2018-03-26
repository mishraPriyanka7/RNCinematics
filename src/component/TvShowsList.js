import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet
  } from 'react-native';
  
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux';
  import {fetchPeopleTvShowsData} from '../actions/PeopleDetailsAction';

 class TvShowsList extends Component {

    constructor(props){
        super(props);

        this.state={
            tvShowsList: [],      
        };
    }

    componentWillMount() {
        this.props.fetchPeopleTvShowsData(this.props.castIds)
     }
 
     componentWillReceiveProps(nextProps) {
         if (nextProps.PeopleTvShowData != '' && nextProps.PeopleTvShowData != undefined) {
            this.setState({ tvShowsList: nextProps.PeopleTvShowData.PeopleTvShowData.cast })
         }   
    }
    
    render(){
        return(
            <View style={Styles.mainContainer}>
            
                <FlatList
                            data={ this.state.tvShowsList }
                            renderItem={({item}) => 

                            <View style={{flex:1}}>
                                <View style={{margin:10, flexDirection:'row'}}>
                            
                                    
                                        <View style={{margin:5, flex:0.3, height:140}}>
                                            <Image 
                                                source={{uri: "http://image.tmdb.org/t/p/w185"+item.poster_path}}
                                                style={{ margin:3, width:110, height:150,}}/>
                                            </View>

                                        <View style={{flex:0.7, flexDirection:'column',
                                              margin:5, marginLeft:20, height:140, marginTop:20}}>

                                            <View style = {{marginLeft:5, flexDirection:'row'}}>
                                                <View style={{alignItems:'flex-start'}}>
                                                    <Text style={{fontSize:15}}>{item.first_air_date}</Text>
                                                </View>

                                                <View style={{alignItems:'flex-end', marginLeft:10}}>
                                                    <Text style={{fontSize:15}}> {item.character} </Text>
                                                </View>
                                                
                                            </View>

                                            <View style={{marginLeft:5, }}>
                                                <Text style={{fontSize:15,color:'black'}}>{item.original_name}</Text>
                                            </View>
                                            
                                            <View style={{marginTop:55}}>
                                                <Image 
                                                    source={{uri: "http://image.tmdb.org/t/p/w185"+item.backdrop_path}}
                                                    style={{width:50, height:40, marginLeft:5}}/>
                                            </View>
                                            
                                        </View>
                                
                                </View>

                                <View style={{height:1, backgroundColor:'#dddcdc', marginLeft:8, marginRight:8 }}></View>
                            </View>

                       
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
        
    },
  });

  function mapStateToProps(state) {
    //alert("** People Details ** "+JSON.stringify(state.PeopleTvShowData))
    return {
        PeopleTvShowData: state.PeopleTvShowData,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPeopleTvShowsData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TvShowsList);