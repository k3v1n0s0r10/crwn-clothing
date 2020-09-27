import React, { useState, useEffect } from 'react';

import './App.css';

import { Route, Switch } from "react-router-dom";

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils'

function App( { holi } ) {

  const [ currentUser, setCurrentUser ] = useState(null)

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return () => {
      unSubscribeFromAuth();
    };
  },[])
  
  return (
    <>
    <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </>
  )
}

export default App;
