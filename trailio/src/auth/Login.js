import React, { useState, useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Jumbotron, Container, Row, Button, Tabs, Tab } from 'react-bootstrap';
import '../App.css';
import Trailiologo from '../assets/logo.svg';


// ENVIRONMENT IMPORT
// import app from "./base.js";
import { AuthContext } from "./Auth.js";
import firebase from '../firebase';

const Login = ({ history }) => {
   const [key, setKey] = useState('home');

   const handleLogin = useCallback(async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
         await firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
         history.push("/");
      } catch (error) {
         alert(error);
      }
   }, [history]);

   const handleSignUp = useCallback(async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
         await firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
         history.push("/");
      } catch (error) {
         alert(error);
      }
   }, [history]);

   const { currentUser } = useContext(AuthContext);

   if (currentUser) {
      return <Redirect to="/" />;
   }

   return (
      <div>
         <Jumbotron fluid className="background">
            <Container>
               <Row>
                  <img src={Trailiologo} alt="Logo" />
               </Row>   
               <Row>
                  <h1 className="title">Trailio</h1>
               </Row> 
               <Row>
                  <h3 className="ingress">Track your rides or runs</h3>
               </Row>
               <Row>
                  <div className="login-form">
                     <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} >
                        <Tab eventKey="home" title="Log in" >
                           <form onSubmit={handleLogin}>
                              <h2 className="subheading">Log in</h2>
                              <input className="input-login" name="email" type="email" placeholder="Email" />
                              <input className="input-login" name="password" type="password" placeholder="Password" />
                              <Button className="button-primary" type="submit" variant="primary">Log in</Button>
                           </form>
                        </Tab>
                        <Tab eventKey="profile" title="Sign up">
                           <form onSubmit={handleSignUp}>
                              <h2 className="subheading">Sign up</h2>
                              <input className="input-login" name="email" type="email" placeholder="Email" />
                              <input className="input-login" name="password" type="password" placeholder="Password" />
                              <Button className="button-primary" type="submit" variant="primary">Sign up</Button>
                           </form>
                        </Tab>
                     </Tabs>
                  </div>
               </Row>
            </Container>
         </Jumbotron >
      </div >
   );
};

export default withRouter(Login);