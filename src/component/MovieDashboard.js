import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import TabViewDetails from '../component/TabViewDetails';
import ImageSlider from '../component/ImageSlider';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {fetchMovieDetails} from "../actions/MovieAction";
import { Actions } from "react-native-router-flux";

const {width, height} = Dimensions.get('window');

class MovieDashboard extends Component {
    // Inside of a component's render() method:

    constructor(props){
      super(props);
      //this.props.fetchMovieDetails(this.props.data.id);
  }

    componentWillMount(){
      console.log("MovieDashboard props >>>>> ",this.props.data.id);
      this.props.fetchMovieDetails(this.props.data.id);
    }


render() {
  //console.log("MovieDashboard render >>>",this.props.MovieDetails.MovieDetails); // The Movie Details as per ID
    return (
      <ParallaxScrollView
        parallaxHeaderHeight={300}
        renderForeground={() => (
         <View style={{ height: 300, flex: 1}}>
            <ImageSlider data={this.props.MovieDetails}/>
          </View> 
        )}>
        <View style={{ height:1200 }}>
          <TabViewDetails movieId ={this.props.data.id}/>
        </View>
      </ParallaxScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    MovieDetails: state.MovieDetails
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovieDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDashboard);