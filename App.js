import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './screens/Login';
import Secured from './screens/Secured';
import Display from './screens/Display';

class App extends Component {

  state = {
    isSignUp: false
  }

  render() {

    // if (this.state.isLoggedIn) 
    //   return <Secured 
    //       onLogoutPress={() => this.setState({isLoggedIn: false})}
    //     />;
    // else 
    //   return <Login 
    //       onLoginPress={() => this.setState({isLoggedIn: true})}
    //     />;

    if(this.state.isSignUp)
    return<Login
    onLoginPress={()=>this.setState({isSignUp:true})}/>
    else if(this.state.isSignUp)
      return<Secured 
      onLoggedOutPress={()=>this.setState({isSignUp:true})}/>
  
    else
    return<Display
    onDisplayPress={()=>this.setState({isSignUp:true})}/>
   }

  
}
export default App;