import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import InfoDetails from './InfoDetails';
import CastDetails from './CastList';
import ReviewList from './ReviewsList';


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

  // alert("tab view details : "+this.props.movieId);

export default class TabViewDetails extends Component {
    
    constructor(props) {
        super(props);
    
        // this.state = {
        //   movieId:'',
        // };
      }

    componentWillMount() {
     //  alert("tab view details *** : "+this.props.movieId);
      // this.setState({movieId: this.props.movieId});

     }
 

    state = {
        index: 0,
        routes: [
            { key: 'info', title: 'INFO' },
            { key: 'cast', title: 'CAST' },
            { key: 'reviews', title: 'REVIEWS' },
    
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
    />;

    // _renderScene = SceneMap({
    //     info: InfoDetails,
    //     cast: CastDetails,
    //     reviews: ReviewList,
        
    // });

    _renderScene = ({ route }) => {
        switch (route.key) {
        case 'info':
          return <InfoDetails   movieIds ={this.props.movieId}/>;
        case 'cast':
          return <CastDetails movieIds ={this.props.movieId}/>;
        case 'reviews':
          return <ReviewList movieIds ={this.props.movieId}/>;
        default:
          return null;
        }
    } 

    render() {
        
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#212f3d',
    },
    tab: {
        width: 120,
    },
    indicator: {
        backgroundColor: '#40e0d0',
    },
    label: {
        color: '#fff',
        fontWeight: '200',
        fontSize: 11,
    },
});