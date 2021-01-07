import React, { useState, useEffect } from "react";

import "./App.css";

import { Route, Switch } from "react-router-dom";

import { auth } from "./firebase/firebase.utils";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </>
  );
};

export default App;
