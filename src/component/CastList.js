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
  import {Actions} from 'react-native-router-flux';

  import fetchCastListData from '../actions/CastListAction'


    class CastList extends Component {

    constructor(props){
        super(props);

        this.state={
            castList: [],  
            castId:'',    
        };
    }

    componentWillMount() {
       this.props.fetchCastListData(this.props.movieIds)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.CastListData != '' && nextProps.CastListData != undefined) {
           this.setState({ castList: nextProps.CastListData.CastListData.cast }) 
        }   
   }

    render(){
       
        return(
            <View style={Styles.mainContainer}>
            
                <FlatList
                            data={ this.state.castList }
                            renderItem={({item}) => 
                            
                            <TouchableOpacity  onPress={() => Actions.TabViewPeople({castId:item.id})}>
                            <View>
                           
                            <View style = {{flex:1, flexDirection:'row', margin:10, paddingLeft:10,
                                justifyContent:'center'}}>
                                    <View style={{flex: 0.3}}>
                                   
                                        <Image source={{uri: "http://image.tmdb.org/t/p/w185"+item.profile_path}}
                                         style={{width:70, height:70, borderRadius:35}}/>
                                   
                                    </View>
                                    
                                    <View style = {{flex:0.4, justifyContent:'center',}}>
                                        <Text style={{fontSize:15}} >{item.name}</Text>
                                    </View>
                            
                                    <View style = {{flex:0.3, justifyContent:'center', alignItems:'flex-end',margin:5}}>
                                        <Text style={{fontSize:15}}>{item.character}</Text>
                                    </View>

                            </View>
                            
                            <View style={{flex:1,height:1, backgroundColor:'#dddcdc'}}></View>
                        
                       
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
        
    },
  });



function mapStateToProps(state) {
    return {
        CastListData: state.CastListData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCastListData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CastList);
