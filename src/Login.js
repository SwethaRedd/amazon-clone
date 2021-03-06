import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory(); // it allows us to programatically change the url
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault(); // prevents the page from refresh.
    
    // some fancy firebase login stufff....
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        console.log(auth);
        history.push('/')
    })
    .catch((error) => {
        alert(error.message)
    })
  };

  const register = (e) => {
    e.preventDefault();
    
    //do some fancy firebase register stuff...
    auth
      .createUserWithEmailAndPassword(email, password) // create a user and password in the firebase
      .then((auth) => {
        // it successfully created a user with email and password
        console.log(auth);
        if(auth){
            history.push('/') // redirecting the logged in user to the main page
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
