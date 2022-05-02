import React, { Component } from 'react';

export default class Login extends Component {
render () {
  return (<div>
    <div>Login </div>
    <form>
      <label for="username">Username</label>

<br></br>  
  </form>
  </div>);
    // return (
    //   <div>
    //       <div> Login </div>
    //       <form>
    //         <label for="username">Username: </label> <br>
    //         <input type="text" id="username" name="username" placeholder="user123">
    //         <label for="password">Password:</label> <br>
    //         <input type="text" id="password" name="password" placeholder="passworD00">  <br>
    //        </form>
    //   </div>
    // );
  }
}   