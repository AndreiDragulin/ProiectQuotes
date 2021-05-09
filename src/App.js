import { GoogleLogin, GoogleLogout } from 'react-google-login';
import RonSwanson from './RonSwanson.jpg';
import Quotes from './Quotes.js'
import './App.css';
import React, { useState } from 'react';

const clientId = "490047082378-vnkc6dqtcuen7l5svcqfptiiajf7to11.apps.googleusercontent.com";

function App() {
  
  const [loading, setLoading] = useState('Loading...');
  const [user, setUser] = useState(null);
  
  const handleLoginSuccess = (response) => {
    console.log("Login Success ", response);
    setUser(response.profileObj);
    setLoading();
  }
 
  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading();
  }
 
  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
  }
 
  const handleLogoutFailure = error => {
    console.log("Logout Failure ", error);
  }
 
  const handleRequest = () => {
    setLoading("Loading...");
  }
 
  const handleAutoLoadFinished = () => {
    setLoading();
  }
  
  return (
    <div style={{display:'grid', justifyContent: 'center', width: '100%'}} className="quotes-body">
      <h3 style={{textAlign: 'center'}}>Quotes Generator</h3>
      {user ? <div style={{width : '90vw'}}>
      <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={handleLogoutSuccess}
          onFailure={handleLogoutFailure}
        />
        <Quotes/>
      </div> :
        <GoogleLogin
          clientId={clientId}
          buttonText={loading}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          onRequest={handleRequest}
          onAutoLoadFinished={handleAutoLoadFinished}
          isSignedIn={true}
        />}
    </div>
  );
}

function getQuotes(){
  alert('test');
  // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      // console.log(xhr.responseText);
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/' + this.state.animeName);
    // send the request
    xhr.send();
}

export default App;