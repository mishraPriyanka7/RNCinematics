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
import TabViewDetails from "../component/TabViewDetails";
import TabViewPeople from "../component/TabViewPeople";
import CastImageSlider from "../component/CastImageSlider";
import Dimensions from 'Dimensions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchCastImages } from "../actions/MovieAction";
import { Actions } from "react-native-router-flux";

const {width, height} = Dimensions.get('window');

class CastDashboard extends Component {
  // Inside of a component's render() method:

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("CastDashboard props >>>>> ", this.props.data);
    this.props.fetchCastImages(this.props.data.id);
  }

  render() {
    //console.log("MovieDashboard render >>>",this.props.MovieDetails.MovieDetails); // The Movie Details as per ID
    return <ParallaxScrollView parallaxHeaderHeight={300} renderForeground={() => <View style={{ height: 300, flex: 1 }}>
            <CastImageSlider data={this.props.data} pics={this.props.CastPics} />
          </View>}>
        <View style={{ height: 1200 }}>
          <TabViewPeople castId={this.props.data.id} />
        </View>
      </ParallaxScrollView>;
  }
}

function mapStateToProps(state) {
  return { CastPics: state.CastPics };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCastImages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CastDashboard);