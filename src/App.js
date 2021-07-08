import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header/Header';

import HomeScreen from "./screens/HomeScreen";
import CountriesDetailsScreen from "./screens/CountryDetailsScreen";

const App = () => {
  return (
    <Router>
      <Header />
        <Route path='/' exact component={HomeScreen} />
        <Route path='/countries/:name'  component={CountriesDetailsScreen} />
    </Router>
  );
};

export default App;
