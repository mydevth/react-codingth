import React from "react";
import { ToastProvider } from "react-toast-notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserStoreProvider from "./context/UserContext";

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
import UploadPage from "./pages/UploadPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MemberPage from "./pages/MemberPage";
import PrivateRoute from "./guard/auth";
import Promptpay from "./pages/PaymentPage";
import { BillPay } from "./pages/billpayment/BillPayment";

// redux setup
import { Provider } from "react-redux";

//thunk setup เข้ามาแล้วไม่ใช้ persist จะใช้ 3 บรรทัดนี้
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// const store = createStore(rootReducer, applyMiddleware(thunk))

// import { createStore } from "redux";    //ของเดิมที่ไม่ได้ใช้ของ persist local storage
// import rootReducer from "./redux/reducers/index"; //ของเดิมที่ไม่ได้ใช้ของ persist local storage
import CartPage from "./pages/CartPage";

// const store = createStore(rootReducer);   //ของเดิมที่ไม่ได้ใช้ของ persist local storage
import configureStore from "./redux/configureStore";
const { store } = configureStore(); // ของ persist

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
        <ToastProvider placement="top-center" autoDismissTimeout={3000}>
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
                <PrivateRoute path="/member">
                  <MemberPage />
                </PrivateRoute>

                <Route path="/cart">
                  <CartPage />
                </Route>
                <Route path="/billpay">
                  <BillPay />
                </Route>
                <Route path="/payment">
                  <Promptpay />
                </Route>
                <Route path="/register">
                  <RegisterPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/upload">
                  <UploadPage />
                </Route>
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
        </ToastProvider>
      </UserStoreProvider>
    </Provider>
  );
}

export default App;
