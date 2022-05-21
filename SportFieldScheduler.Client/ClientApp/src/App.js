import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import  SportFields  from './components/SportFields';
import ShowAppointments from './components/ShowAppointments';
import ShowUsers from './components/ShowUsers';
import ShowAllSportFields from './components/ShowAllSportFields';
import AddUserForm from './components/AddUserForm';
import SelectDate from './components/SelectDate';
import proba from './components/proba';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path ='/sport-fields' component={SportFields}/>
        <Route path='/show-all-appointments' component={ShowAppointments}/>
        <Route path='/show-all-users' component={ShowUsers}/>
        <Route path='/show-all-sport-fields' component={ShowAllSportFields}/>
        <Route path ='/add-user-form' component={AddUserForm}/>
        <Route path='/select-date/:id' component={SelectDate}/>
        <Route path='/proba' component={proba}/>
      </Layout>
    );
  }
}
