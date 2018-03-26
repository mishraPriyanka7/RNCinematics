import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import MovieList from './MovieList';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};


export default class TabBarComponent extends Component {

    state = {
        index: 0,
        routes: [
            { key: 'now_playing', title: 'NOW PLAYING' },
            { key: 'top_box_office', title: 'TOP BOX OFFICE' },
            { key: 'anticipated', title: 'ANTICIPATED' },
            // { key: 'upcoming', title: 'UPCOMING' },
            // { key: 'trending', title: 'TRENDING' },
            // { key: 'top_rated', title: 'TOP RATED' },
            // { key: 'new_dvds', title: 'NEW DVDS' },
            // { key: 'upcoming_dvds', title: 'UPCOMING DVDS' },
            // { key: 'top_rental', title: 'TOP RENTAL' },
            // { key: 'on_netflix', title: 'ON NETFLIX' },
            // { key: 'imdb_top_250', title: 'IMDB TOP 250' },

        ],
    };


    componentWillMount(){
        
    }


    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
        onTabPress = {this._renderScene}
    />;

    

    _renderScene = ({ route }) => { 
        switch (route.key) 
        { 
            case 'now_playing': 
            return <MovieList castIds ={"1"}/>; 

            case 'top_box_office': 
            return <MovieList castIds ={"2"}/>; 

            case 'anticipated': 
            return <MovieList castIds ={"3"}/>;

            // case 'upcoming': 
            // return <MovieList castIds ={"4"}/>; 

            // case 'trending': 
            // return <MovieList castIds ={"5"}/>; 

            // case 'top_rated': 
            // return <MovieList castIds ={"6"}/>;

            // case 'new_dvds': 
            // return <MovieList castIds ={"7"}/>; 

            // case 'upcoming_dvds': 
            // return <MovieList castIds ={"8"}/>;

            // case 'top_rental': 
            // return <MovieList castIds ={"9"}/>; 

            // case 'on_netflix': 
            // return <MovieList castIds ={"10"}/>; 

            // case 'imdb_top_250': 
            // return <MovieList castIds ={"11"}/>;

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