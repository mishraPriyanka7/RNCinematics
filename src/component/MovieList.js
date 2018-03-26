import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Platform,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchMovieData from "../actions/MovieAction";
import logoImg from "../images/ic_tmdb.png";
import { IMAGE_BASE_URL } from "../utils/constants";
import { Actions } from "react-native-router-flux";
import changeToGrid from "../actions/NavDrawerAction";
var asyncData = '';


const { width, height } = Dimensions.get("window");

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      GridColumnsValue: false,
      ButtonDefaultText: "CHANGE TO GRIDVIEW",
      isLoading : true,
    };
  }

  //============

   saveKey = (value) => {
    try {

      AsyncStorage.setItem("isGrid", value);

    } catch (error) {
      console.log("Error saving data" + error);
    }
  }


  //========

  componentWillMount() {

    this.props.fetchMovieData();
   

    AsyncStorage.getItem("isGrid").then((value) => 
      { 
        if(value)
         {  asyncData = value;
         
         } 
        }).done();
    
  }

  componentDidMount() {
    if(asyncData == ''){
      try {
        // AsyncStorage.setItem('isGrid', '0');
        this.saveKey('0');
        asyncData = '0';
        this.setState({
          GridColumnsValue: false,
        });
      } catch (error) {
        console.log("<==== Async Set Exception =====", "");
      }
    }else{

      this.setState({
        GridColumnsValue: asyncData == '0' ? false : true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    var propsValue = nextProps.gridValue.gridValue;
    if(propsValue == ''){
       console.log("=== Props Value ===","Empty")

    }else{
      //  console.log("=== Props Value Not Empty ===",propsValue)
       try {
      //  AsyncStorage.setItem('isGrid', '' + nextProps.gridValue.gridValue);
        this.saveKey(nextProps.gridValue.gridValue);
      } catch (error) {
        console.log("<==== Async Set Exception =====", "");
      }
        this.setState({
          GridColumnsValue: propsValue == '0' ? false : true,
        });
    }


    if (nextProps.MovieListData.MovieListData.length > 0) {
      this.setState({ moviesList: nextProps.MovieListData.MovieListData ,isLoading:false}); // this will update state to re-render ui
    }
  }

  _keyExtractor = (item, index) => item.id;

  renderRowItem = itemData => {
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: "column", margin: 1, padding: 5 }} onPress={() => this._onPress(itemData)}>
      <View style={{ flex: 1, flexDirection: "column", margin: 1, padding: 5 }}>

        <Image
          style={styles.ImageComponentStyle}
          source={{ uri: IMAGE_BASE_URL + this._posterImage(itemData,this.props.castIds) }}
        />

        <Text style={styles.ItemTextStyle} numberOfLines={1}>
        {this._titleText(itemData,this.props.castIds)}
        </Text>

      </View>
      </TouchableOpacity>
    );
  };

  _onPress(itemData) {
    Actions.MovieDashboard({ data: itemData.item });
  }

  renderRowItemList = itemData => {
    return (
      <TouchableOpacity onPress={() => this._onPress(itemData)}>
        <View style={styles.rowList}>
          <Image
            style={styles.ListImageComponentStyle}
            source={{ uri: IMAGE_BASE_URL + this._posterImage(itemData,this.props.castIds) }}
          />
          <View style={styles.rowListView}>
            <Text style={styles.yearTextStyle}>
              {" "}{this._yearText(itemData,this.props.castIds)}
            </Text>
            <Text style={{ color: "black" }}> {this._titleText(itemData,this.props.castIds)} </Text>
            <Text style={styles.textDescrption}> {this._titleText(itemData,this.props.castIds)} </Text>
            <View style={styles.bottomView}>
              <Image style={styles.image} source={logoImg} />
              <Text style={styles.yearTextStyle}>
                {" "}
                {this._ratingText(itemData,this.props.castIds)}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  _yearText = (itemData,flag) => {    
     return itemData.item.release_date.substring(0,itemData.item.release_date.indexOf("-"));
  }

  _titleText = (itemData,flag) => {
     return itemData.item.original_title;
  }

  _ratingText = (itemData,flag) => {
      return itemData.item.vote_average;
  }

  _posterImage = (itemData,flag) => {
      return itemData.item.poster_path;
  }

  render() {

    if (this.state.isLoading) {
      return (
          <View style={{ flex: 1, paddingTop: 20, alignItems: 'center' }}>
              <UIActivityIndicator color='gray' />
          </View>
      );
  }

    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.moviesList}
          renderItem={
            this.state.GridColumnsValue
              ? this.renderRowItemList
              : this.renderRowItem
          }
          numColumns={this.state.GridColumnsValue ? 1 : 3}
          key={this.state.GridColumnsValue ? "ONE COLUMN" : "THREE COLUMN"}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 5,
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  ImageComponentStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    backgroundColor: "#4CAF50"
  },
  ItemTextStyle: {
    color: "#000000",
    padding: 10,
    fontSize: 12,
    textAlign: "left",
    backgroundColor: "#d0d3d4",
    marginBottom: 5
  },
  ButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#FF9800",
    width: "100%",
    height: 50
  },
  ButtonInsideTextStyle: {
    color: "#fff",
    textAlign: "center"
  },
  rowList: {
    flex: 1,
    flexDirection: "row",
    margin: 1,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray"
  },
  ListImageComponentStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    flex: 0.2,
    backgroundColor: "#4CAF50"
  },
  rowListView: {
    flex: 0.8,
    flexDirection: "column",
    margin: 1,
    padding: 5
  },
  yearTextStyle: {
    color: "gray",
    fontSize: 11
  },
  textDescrption: {
    color: "gray",
    fontSize: 13,
    marginTop: 5
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "cover"
  },
  bottomView: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center"
  }
});

function mapStateToProps(state) {

  return {
    MovieListData: state.MovieListData,
    gridValue: state.gridValue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovieData, changeToGrid }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
