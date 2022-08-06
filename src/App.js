import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import MenuPage from "./pages/MenuPage";
import HospitalPage from "./pages/hospital/HospitalPage";
import IndexPage from "./pages/category/IndexPage";
import CreatePage from "./pages/category/CreatePage";
import EditPage from "./pages/category/EditPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/category"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} exact>
                  <IndexPage />
                </Route>
                <Route path={`${url}/create`}>
                  <CreatePage />
                </Route>
                <Route path={`${url}/edit/:id`}>
                  <EditPage />
                </Route>
              </>
            )}
          ></Route>

          <Route path="/hospital">
            <HospitalPage />
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
          <Route path="/detail/:id/title/:title">
            <DetailPage />
          </Route>
          <Route path="/menu/:id">
            <MenuPage />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
