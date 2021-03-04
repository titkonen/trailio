import './App.css';
import { Button } from 'react-bootstrap';
import firebase from './firebase';

const Tracker = () => {
   return (
      <div className="App">
         <h1>This is tracker view</h1>

         <Button onClick={() => firebase.auth().signOut()}>
            Log out
         </Button>
         {/* <Nav>
                     <LinkContainer to="/info"><Nav.Link onClick={() => firebase.auth().signOut()}>Log out</Nav.Link></LinkContainer>
                  </Nav> */}


      </div>
     );
}
 
export default Tracker;