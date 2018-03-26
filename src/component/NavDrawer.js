import React, { Component } from "react";
import { AppRegistry, DrawerLayoutAndroid, Text } from "react-native";
import {
  Image,
  View,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  Platform
} from "react-native";
import Drawer from "react-native-drawer";
import ControlPanel from "./ControlPanel";
import Hamburger from "./Hamburger";
import { Actions } from "react-native-router-flux";
import TabBarComponent from "./TabBar";
import changeToGrid from "../actions/NavDrawerAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
var data = '0';



class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridType: false,
      asyncValue: ''
    };
  }


  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  closeDrawer = () => {
    this.setState({
      drawerVisible: !this.state.drawerVisible,
      active: !this.state.active
    });
  };

  updateState = () => {
    this.setState({
      drawerVisible: !this.state.drawerVisible,
      active: !this.state.active
    });
  };

  updateList = () => {
    this.setState({
      gridType: !this.state.gridType
    });
  };

  SecondClassFunction = () => {
    this.closeControlPanel();
  };

  state = {
    drawerVisible: false,
    active: false
  };
  componentWillMount() {

    AsyncStorage.getItem("isGrid").then((value) => {
      if (value) {
        //this.setState({asyncValue:value});
        data = value;
      }
    }).done();
  }

  componentDidMount() {
    if (data == '') {
      alert("==== Data Value =====" + "empty");

      this.setState({
        gridType: false,
      });
    } else {
      this.setState({
        gridType: data == '0' ? false : true,
      });
    }

  }

  callFunction = () => {
    AsyncStorage.getItem("isGrid").then((value) => {
      if (value) {
        //this.setState({asyncValue:value});
        console.log("=== Data ===", value);

        let tempData = value == '0' ? '1' : '0';
        this.props.changeToGrid(tempData)
        this.setState({
          gridType: tempData == '0' ? false : true,
        });

      }
    }).done();




  }
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View>
          <StatusBar backgroundColor="#141414" barStyle="light-content" />
        </View>

        <View
          style={{
            backgroundColor: "#141414",
            height: 48,
            paddingLeft: 5,
            paddingTop: 5,
            flexDirection: "row"
          }}
        >
          <Hamburger
            ref={component => (this.touchable = component)}
            active={this.state.active}
            type="arrow"
            color="#fff"
            onPress={() => this.updateState()}
          />
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              color: "white",
              flex: 0.8,
              justifyContent: "center",
              fontSize: 20,
              paddingBottom: 10,
              alignItems: "center"
            }}
          >
            Cinematics
          </Text>

          <TouchableOpacity onPress={this.callFunction}>
            <View>
              <Image
                source={
                  this.state.gridType
                    ? require("../images/ic_grid_on_24dp.png")
                    : require("../images/ic_grid_off_24dp.png")
                }
                style={{
                  height: 24,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 8,
                  tintColor: "#fff",
                  width: 24,
                  borderRadius: 0
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.TabView()}>
            <View>
              <Image
                source={require("../images/ic_search_24dp.png")}
                style={{
                  height: 24,
                  marginLeft: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 8,
                  tintColor: "#fff",
                  width: 24,
                  borderRadius: 0
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Drawer
          ref={ref => (this._drawer = ref)}
          tapToClose={true}
          openDrawerOffset={0.35}
          type="overlay"
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          captureGestures={true}
          content={<ControlPanel/>}
          open={this.state.drawerVisible}
          tweenHandler={ratio => ({
            mainOverlay: {
              backgroundColor: "rgba(71, 71, 71," + ratio / 1.5 + ")"
            }
          })}
        >
          <TabBarComponent />
        </Drawer>

        {/* <TabBarComponent /> */}
      </View>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: "white", shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 }
};

function mapStateToProps(state) {
  return {
    gridValue: state.gridValue

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeToGrid }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavDrawer);

