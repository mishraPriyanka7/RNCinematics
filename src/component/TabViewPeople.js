import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import PeopleDetails from './PeopleDetails';
import MoviesListPeople from './MoviesListPeople';
import TvShowsList from './TvShowsList';


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};


export default class TabViewPeople extends Component {

    state = {
        index: 0,
        routes: [
            { key: 'info', title: 'INFO' },
            { key: 'movies', title: 'MOVIES' },
            { key: 'tv_shows', title: 'TV SHOWS' },
    
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


    _renderScene = ({ route }) => {
        switch (route.key) {
        case 'info':
          return <PeopleDetails   castIds ={this.props.castId}/>;
        case 'movies':
          return <MoviesListPeople castIds ={this.props.castId}/>;
        case 'tv_shows':
          return <TvShowsList castIds ={this.props.castId}/>;
        default:
          return null;
        }
    } 


    render() {
       // alert("tab view People  cast Id ******* "+ this.props.castId);
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