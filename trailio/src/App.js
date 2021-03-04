import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './auth/Auth';
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./auth/Login";

import Tracker from "./Tracker";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">



          <Switch>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <div>
            <PrivateRoute exact path="/" component={Tracker} />
            {/* <Route exact path="/signup" component={SignUp} /> */}
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
