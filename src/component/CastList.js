import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "react-native-router-flux";

//import fetchCastListData from '../actions/CastListAction'

export default class CastList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      castList: []
    };
  }

  componentWillMount() {
    //  this.props.fetchCastListData()
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.CastListData != '' && nextProps.CastListData != undefined) {
    //    this.setState({ castList: nextProps.CastListData.CastListData.results }) // this will update state to re-render ui
    //   //alert(JSON.stringify(nextProps.CastListData.CastListData.results));
    // }
  }

  componentDidMount() {
    return fetch(
      "https://api.themoviedb.org/3/movie/284053/credits?api_key=1b31282aebdebc34884006adfac40bfb"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            castList: responseJson.cast
          },
          function() {
            // In this block you can do something with new state.
          }
        );
        // alert(JSON.stringify(responseJson.results))
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <FlatList
          data={this.state.castList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Actions.CastDashboard({data:item})}>
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 10,
                  paddingLeft: 10,
                  justifyContent: "center"
                }}
              >
                <View style={{ flex: 0.3 }}>
                 
                    <Image
                      source={{
                        uri:
                          "http://image.tmdb.org/t/p/w185" + item.profile_path
                      }}
                      style={{ width: 70, height: 70, borderRadius: 35 }}
                    />
                  
                </View>

                <View style={{ flex: 0.4, justifyContent: "center" }}>
                  <Text style={{ fontSize: 15 }}>{item.name}</Text>
                </View>

                <View
                  style={{
                    flex: 0.3,
                    justifyContent: "center",
                    alignItems: "flex-end",
                    margin: 5
                  }}
                >
                  <Text style={{ fontSize: 15 }}>{item.character}</Text>
                </View>
              </View>

              <View
                style={{ flex: 1, height: 1, backgroundColor: "#dddcdc" }}
              />
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
      
    );
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center"
  }
});

// function mapStateToProps(state) {
//     return {
//         CastListData: state.CastListData
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchCastListData }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CastList);
