import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    WebView,
    ScrollView,
    Linking,
    ActivityIndicator
  } from 'react-native';
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux';

  import ratingList from '../component/common/RateListJson';
  import SimilarMovies from '../component/common/SimilarMovies';
  import fetchMoviesData from '../actions/SimilarMoviesAction';
  import { fetchMovieDetails } from '../actions/SimilarMoviesAction';
  import fetchVideoData from '../actions/VideoListAction';

  var url = "https://www.youtube.com/embed/";
  
  class InfoDetails extends Component {
      

    constructor(props){
        super(props);

        this.state={
            
            data: ratingList,
            isLoading: true,
            dataSource:[],
            similarMoviesList: [],
            videoList:[],
            ReleaseDate:'',
            DVDReleaseDate:'',
            DirectedBy:'',
            Budget:'',
            Rvenue:'',
            overView:'',      
        };
    }

    componentWillMount() {
       // alert("info deatils==== "+this.props.movieIds);
         this.props.fetchMoviesData(this.props.movieIds);
         this.props.fetchVideoData(this.props.movieIds);
         this.props.fetchMovieDetails(this.props.movieIds);
     }
 
     componentWillReceiveProps(nextProps) {
        // alert("Priyanka *** "+ JSON.stringify(nextProps.MovieListData));
         if (nextProps.MovieListData != '' && nextProps.MovieListData != undefined) {
            this.setState({ similarMoviesList: nextProps.MovieListData.SimilarMoviesListData.results})
         }
         if (nextProps.MovieData != '' && nextProps.MovieData != undefined) {
          
            this.setState({ isLoading: false,
                            overView: nextProps.MovieData.movieData.overview,
                            ReleaseDate: nextProps.MovieData.movieData.release_date,
                            Budget: nextProps.MovieData.movieData.budget,
                            Rvenue: nextProps.MovieData.movieData.revenue
                        });
         }

         if (nextProps.videoListData != '' && nextProps.videoListData != undefined) {
            this.setState({ videoList: nextProps.videoListData.VideoListData.results}) 
         }   

        }

        // componentDidMount() {
        //     Linking.addEventListener('url', this._handleOpenURL);
           
        //     Linking.canOpenURL(url).then(supported => {
        //         if (!supported) {
        //           console.log('Can\'t handle url: ' + url);
        //           alert('Can\'t handle url: ' + url);
        //         } else {
        //           return Linking.openURL(url);
        //         }
        //       }).catch(err => console.error('An error occurred', err));
        //   }
        //   componentWillUnmount() {
        //     Linking.removeEventListener('url', this._handleOpenURL);
        //   }
        //   _handleOpenURL(event) {
        //     console.log(event.url);
        //   }

        onPress(urls){
          Linking.canOpenURL('whatsapp://app').then(supported => {
            if (!supported) {
              console.log('Can\'t handle url: ' + urls);
            } else {
              return Linking.openURL(urls);
            }
          }).catch(err => console.error('An error occurred', err));
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

            <View style={Styles.container}>
                <ScrollView>
                
                <View style={{flex:0.2,}}>

                    <FlatList
                        data={this.state.data}
                        horizontal={true}
                        renderItem={({item}) =>
                            <View>
                                <View style = {{flex:1, flexDirection:'column', margin:10,
                                        justifyContent:'center'}}>
                                        <View style={{justifyContent:'center'}}>
                                        <TouchableOpacity activeOpacity = { .5 }>
                                                <Image 
                                                    source={{uri: item.image}}
                                                    style={{width:40, height:40, borderRadius:35}}>
                                                </Image>

                                        </TouchableOpacity>
                                        </View>
                                            
                                        <View style = {{justifyContent:'center',alignItems:'center', marginTop:10}}>
                                                <Text style={{fontSize:15}}>{item.title}</Text>
                                        </View>
                                    
                                </View>
                            </View>
                        }
                    />

                    <View style={{height:1, backgroundColor:'#dddcdc', margin:10}}></View>
                </View>
                
                <View style={{flex:0.4, margin:10, marginTop:10}}>
                
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:15, marginTop:10}}>
                            {this.state.overView}
                        </Text>
                        <View style={{marginTop:10}}/>
                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>Relase Date:</Text>
                            <Text style={Styles.textDetailsStyle}>{this.state.ReleaseDate}</Text>
                        </View>
                        
                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>DVD Relase Date:</Text>
                            <Text style={Styles.textDetailsStyle}>March 13,2018</Text>
                        </View>

                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>Directed By:</Text>
                            <Text style={Styles.textDetailsStyle}>Guillermo del toro</Text>
                        </View>

                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>Budget:</Text>
                            <Text style={Styles.textDetailsStyle}>{this.state.Budget}</Text>
                        </View>

                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>Revenue:</Text>
                            <Text style={Styles.textDetailsStyle}>{this.state.Rvenue}</Text>
                        </View>

                    </View>

                     <View style={{height:1, backgroundColor:'#dddcdc', marginTop:10,marginLeft:10,
                     marginRight:10}}></View>
                    
                </View>
                
                  {/* video start  */}

                <View style={{flex:0.3, marginTop:5,margin:10,}}>
               

                <Text style={{fontSize:18, marginLeft:10}}>Trailers</Text>
                

                <View style={{flex:0.3, marginTop:10}}>
                        
                    <FlatList
                            data={ this.state.videoList }
                            horizontal={true}
                            renderItem={({item}) => 
                           
                            <View style = {{flex:1, flexDirection:'column',margin:10,
                                    justifyContent:'center'}}>
                                    <TouchableOpacity  onPress={() => this.onPress(url+item.key)}>
                                        <WebView
                                            style={ {height:120,width:180}}
                                            javaScriptEnabled={true}
                                            domStorageEnabled={true}
                                            source={{uri: url+item.key}}
                                        />
                                    
                                        <Text style={{marginTop:10, 
                                            alignItems:'center',
                                            justifyContent:'center'}}> {item.name} </Text>
                                            </TouchableOpacity>
                                            
                            </View>
                            }
                    />
                    </View>

                </View>

                {/* ** video end *** */}

                {/* Flat List More Movies */}

                <View style={{flex:0.4,margin:15,}}>
                    
                    <View style={{height:1, backgroundColor:'#dddcdc'}}></View>
              
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Text style={{ alignItems:'flex-start', justifyContent:'flex-start',fontSize:16, margin:5}}>
                            More from Guillermo del Toro
                        </Text>
                        <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end'}}>
                        <Text style={{ fontSize:16,margin:5, color:'green'}}>
                            View All
                        </Text>
                        </View>
                    </View>   

                    <View> 
                    <View style={{marginTop:5}}>
                        
                        <FlatList
                                data={ this.state.similarMoviesList }
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

                    
                </View>

                 {/* *** Flat List More Movies end **** */}

                 
                {/* *** Flat List Similar  Movies **** */}

                <View style={{flex:0.5,margin:15,}}>
                    
                    <View style={{height:1, backgroundColor:'#dddcdc'}}></View>

                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Text style={{ alignItems:'flex-start', justifyContent:'flex-start',fontSize:16, margin:5}}>
                            similarMovie
                        </Text>
                        <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end'}}>
                        <Text style={{ fontSize:16,margin:5, color:'green'}}>
                            View All
                        </Text>
                        </View>
                    </View> 
                    
                    <View> 
                        <View style={{marginTop:5, marginBottom:10}}>
                        
                        <FlatList
                                data={ this.state.similarMoviesList }
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

                </View>     

                 {/* *** Flat List Similar  Movies **** */}

            </ScrollView>
            </View>
        );
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
    textFontStyle:{
        fontSize:15, 
        color:'black'
    },
    textDetailsStyle:{
        marginLeft:10
    },
  });



function mapStateToProps(state) {
 //alert("***###**** "+JSON.stringify(state.SimilarMovieListData))
    return {
        MovieListData: state.SimilarMovieListData,
        videoListData: state.VideoListData,
        MovieData: state.MoviesData,

    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMoviesData, fetchVideoData, fetchMovieDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoDetails);