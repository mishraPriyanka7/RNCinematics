import React, { Component } from 'react'
import {
    Text,
    View,
    WebView,
    StyleSheet,
    ActivityIndicator,
  } from 'react-native';
 


  export default class ReviewDetail extends Component {
   
    state = { animating: true }

    closeActivityIndicator = () => setTimeout(() => this.setState({ 
        animating: false }), 2000)
  
     componentDidMount = () => this.closeActivityIndicator()
 
    render(){
        const animating = this.state.animating
        return(
            <View style={Styles.mainContainer}>
                <ActivityIndicator
                    animating = {animating}
                    color = '#bc2b78'
                    size = "large"
                    />

                <WebView
                    source={{uri: ""+this.props.reviewId+""}}
                    style={{marginTop: 1}}
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
