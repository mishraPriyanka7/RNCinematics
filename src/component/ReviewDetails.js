import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    WebView
  } from 'react-native';

  export default class ReviewsDetails extends Component {
      render(){
          return(
              <WebView
                source={{uri: this.props.reviewId}}
                style={{marginTop: 20}}
      />
          );
      }
  }