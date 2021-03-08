import './App.css';
// import { Button } from 'react-bootstrap';
// import firebase from './firebase';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";

import Record from './views/Record/Record';
import Diary from './views/Diary/Diary';
// import Maintenance from './views/Maintenance/Maintenance';
// import Notes from './views/Notes/Notes';
// import Spots from './views/Spots/Spots';

const LoggedIn = () => {
   return (
      <div className="App">
         <BrowserRouter>
            <h5>User is logged in.</h5>
            <Navigation />
            <Switch>
               <Route path="/record" component={Record} />
               <Route path="/diary" component={Diary} />
               {/* <Route path="/maintenance" component={Maintenance} />
               <Route path="/notes" component={Notes} />
               <Route path="/spots" component={Spots} /> */}
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default LoggedIn;