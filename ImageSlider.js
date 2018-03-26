/**
 * Created by tangzhibin on 16/7/19.
 */

'use strict'
import React, { Component } from 'react'
import { StyleSheet, View, Text, Animated, TouchableOpacity, Image, Platform } from 'react-native'
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager'
import FontAwesome, { Icons } from 'react-native-fontawesome';
//import { TrianglePagerView, SquarePagerView, CirclePagerView } from '../components/PagerItemView'

var Dimensions = require('Dimensions');

// We can use this to make the overlay fill the entire width
var { width, height } = Dimensions.get('window');

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class ImageSlider extends Component {

    state = {
        bgColor: new Animated.Value(0),
        position: "0",
        scrollY: new Animated.Value(0)
    }

    _setBgColor = Animated.event([{ bgColor: this.state.bgColor }])

    render() {
        let bgColor = this.state.bgColor.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ['hsl(187, 74%, 47%)', 'hsl(89, 47%, 54%)', 'hsl(12, 97%, 59%)']
        })

        const headerTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: "clamp"
        });

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: "clamp"
        });
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: "clamp"
        });

        const titleScale = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: "clamp"
        });
        const titleTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: "clamp"
        });
        return (
            <View style={{ flex: 1 }} >
            
                <Animated.View
                    style={[styles.bgView, { backgroundColor: '#2C4147' }]}
                />
                <IndicatorViewPager
                    style={{ flex: 1 }}
                    indicator={this._renderIndicator()}
                    onPageScroll={this._onPageScroll.bind(this)}
                    autoPlayEnable

                    onPageSelected={(p) => console.log(p)}>
           
                        <Image source={{ uri: 'http://placeimg.com/640/480/any' }} />
                        <Image source={{ uri: 'http://placeimg.com/640/480/any' }} />
                        <Image source={{ uri: 'http://placeimg.com/640/480/any' }} />

                 

                </IndicatorViewPager>

                <View style={{ flex: 0.3, position: 'absolute', bottom: 12  , marginLeft: 20 }}>
                    <Image
                        style={{
                            height: 110,
                            width: 80
                        }}
                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                    />
                </View>

                <Animated.View
                    style={{ height: 100, backgroundColor: "transparent" }}>
                    <View style={styles.ratingHeader}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.textBorder}>N/A</Text>  
                        <Text style={{fontWeight:'bold',color: '#506166',fontSize:12}}>2018</Text>  
                        <Text style={{color: '#506166',fontSize:12}}>1 hr 46 mins</Text>  
                        </View>

                        <View>
                                 <Text style={styles.title}>The Movie Title</Text>
                       </View>    
                       <View>
                       <Text style={{color: '#FFF',fontSize:12}}>1 hr 46 mins</Text>  
                        </View>

                        
                    </View>

                </Animated.View>
            </View>
        )
    }

    // _renderBackBtn () {
    //     return (
    //         <TouchableOpacity
    //             style={styles.backContainer}
    //             activeOpacity={0.6}
    //             onPress={() => this.props.navigator.pop()}
    //         >
    //             <Image
    //                 source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABPElEQVRoQ+2X0Q3CMBBD3Q0YhRXYBEZgEzYANmADGAE2YARGQP4oqhAJae00qnT5be/qZ1/TtMPCV7dw/QiA1glGApGA6ECMkGigXB4JyBaKDSIB0UC5PBL4YeEKwDph7R3AS7Z90MCdAMVfEwAnADunePZyAswu3gmQE38AsHc73/dzJJATz5Hh6FRbKgBfVs48Ib5XdfHqCDUXrwDkxHNkzsLMjNpqp4xQTryg+1O6AXArbTQWYAvgWNp84n0B8M+42ilUTaCHy0FcADz+uZC5zk3gWVo/9h0Y9k1B8LBGF7mbVF8KAMWldqTZIFSAHASvVf8aOwCaQrgAmkE4AQgx+8nUDdBDpH4pi48IpdtXDYDSZ1vuCwCLjUKTSEAwz1IaCVhsFJpEAoJ5ltJIwGKj0CQSEMyzlC4+gTd/aS0xXlARiwAAAABJRU5ErkJggg=='}}
    //                 style={styles.backImg}
    //             />
    //         </TouchableOpacity>
    //     )
    // }

    _renderIndicator() {
        return (
            <PagerDotIndicator
                pageCount={3}
                style={{ bottom: 16 }}
                dotStyle={{ backgroundColor: '#FFFFFF88' }}
            />
        )
    }

    _onPageScroll(scrollData) {
        let { offset, position } = scrollData
        if (position < 0 || position >= 2) return
        this._setBgColor({ bgColor: offset + position })
    }
}

const styles = StyleSheet.create({
    bgView: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    divider: {
        height: 1,
        backgroundColor: '#FFFFFF64',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 48
    },
    backContainer: {
        position: 'absolute',
        bottom: 8,
        left: 16
    },
    backImg: {
        width: 32,
        height: 32,
        tintColor: 0XFFFFFFDD
    },
    titleText: {
        color: 'white',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },


    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'red',
        opacity: 0.3
    },
    bar: {
        backgroundColor: "transparent",
        marginTop: Platform.OS === "ios" ? 28 : 38,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
    },
    title: {
        fontWeight: 'bold',
        color: "white",
        fontSize: 18
    },
    ratingHeader: {
        flex:1,
        marginTop:0,
        alignItems: "center",
        justifyContent: "center",
    },
    textBorder: {
        color: '#506166',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft:2,   
        padding:1, 
        borderColor: '#506166',
        borderWidth: 1
}
})