import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Login2 from './components/Login2';
import { SignUp } from './components/SignUp';
import { SportFields } from './components/SportFields';

import './custom.css'
import Test from './components/Test';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/test' component={Test} />
        <Route path='/signUp' component={SignUp}/>
        <Route path='/login' component={Login2}/>
        <Route path ='/sport-fields' component={SportFields}/>
      </Layout>
    );
  }
}
