import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage} from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { CheckoutPage } from './pages/checkout/checkout.component';
import { PageNotFoundPage } from './pages/404/404.component'

import { Header } from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Unsubscribe } from 'redux';
import {CurrentUserContext} from './contexts/current-user/current-user.context';

interface AppProps {
  props: any
}

interface AppState {
  currentUser: null | any
  
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null,
    }

  }
  // unsubscribeFromAuth: null | Unsubscribe = null;

  unsubscribeFromAuth: null | Unsubscribe  = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot(snapShot => {
          this.setState({currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }});
        });
      }

      this.setState({ currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    if(this.unsubscribeFromAuth){
      this.unsubscribeFromAuth();
    }
   
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header></Header>
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.state.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route component={PageNotFoundPage} />
        </Switch>
      </div>
    );
  }
}
