import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './auth/Auth';
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./auth/Login";

import LoggedIn from "./LoggedIn";

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
            <PrivateRoute exact path="/" component={LoggedIn} />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
