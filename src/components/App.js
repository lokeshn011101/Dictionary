import React, { Component } from "react";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import { Router, Route, Switch } from "react-router-dom";
import TotalData from "./Data/TotalData";
import DefData from "../components/Data/mainContainer/Definition/defData";
import ExData from "../components/Data/mainContainer/Examples/exData";
import EtymoData from "../components/Data/mainContainer/Etymologies/etymoData";
import PronunData from "../components/Data/mainContainer/Pronunciations/pronunData";
import history from "../history";
import Error from "./Error";
import "./App.css";
import Particles from "react-particles-js";

const LineLoader = () => {
  return <div className="lineloader"></div>;
};
class App extends Component {
  render() {
    if (window.performance.navigation.type == 1) {
      history.push("/Dictionary");
    }
    return (
      <div className="container">
        <Particles
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
        <Router history={history}>
          <div className="app-container">
            <Header />
            <SearchBar />
          </div>
          <Route path={"/loading"} exact component={LineLoader} />
          <Route path={"/eRrOrXxX"} exact component={Error} />
          <Route path="/Dictionary/:word" component={TotalData} />
          <Route path={"/Dictionary/:word/definitions"} component={DefData} />
          <Route path={"/Dictionary/:word/examples"} component={ExData} />
          <Route path={"/Dictionary/:word/etymologies"} component={EtymoData} />
          <Route
            path={"/Dictionary/:word/pronunciations"}
            component={PronunData}
          />
        </Router>
      </div>
    );
  }
}

export default App;
