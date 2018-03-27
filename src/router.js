import React, { Component } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import { View, StyleSheet } from "react-native";
import MovieList from "../src/component/MovieList";
import TabBarComponent from "../src/component/TabBar";
import NavDrawer from "../src/component/NavDrawer";
import MovieDashboard from "../src/component/MovieDashboard";
import TabViewExample from "../src/component/TabViewExample";
import TabViewDetails from "../src/component/TabViewDetails";
import CastDashboard from "../src/component/CastDashboard";
import TabViewPeople from "../src/component/TabViewPeople";
import InfoDetails from "../src/component/InfoDetails";
import Splash from "../src/component/Splash";
import ReviewDetail from "../src/component/ReviewDetail";
import SimilarMovies from "../src/component/common/SimilarMovies"; 


export default class RouterComponent extends Component {
  render() {
    return <Router>
        <Scene key="list" hideNavBar={false}>
          <Scene key="splash" component={Splash} hideNavBar={true} initial />

          <Scene key="TabBar" component={TabBarComponent} title="TabBar" hideNavBar />
          <Scene key="NavDrawer" component={NavDrawer} hideNavBar={true} title="Cinematics" leftButtonIconStyle={{ tintColor: "white" }} />
          <Scene key="MovieDashboard" component={MovieDashboard} hideNavBar={true} title="Cinematics" leftButtonIconStyle={{ tintColor: "white" }} />
          <Scene key="CastDashboard" component={CastDashboard} hideNavBar={true} title="Cinematics" leftButtonIconStyle={{ tintColor: "white" }} />
          <Scene key="TabView" component={TabViewExample} hideNavBar={true} title="Search TV Shows" leftButtonIconStyle={{ tintColor: "white" }} />

          <Scene key="TabViewPeople" component={TabViewPeople} title="People Details" />

          <Scene key="TabViewDetails" component={TabViewDetails} title="Tab View Details" />
          <Scene key="InfoDetails" component={InfoDetails} />
          <Scene key="ReviewDetail" component={ReviewDetail} title="Review Details" />
          <Scene key="similarMovie" component={SimilarMovies} title="Similar Movies" />
          
        </Scene>
      </Router>;
  }
}
