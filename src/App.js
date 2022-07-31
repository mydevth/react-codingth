import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/detail">
          <DetailPage />
        </Route>
        <Route path="/menu">
          <MenuPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
