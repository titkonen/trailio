import React from 'react';
import firebase from '../../firebase';
import { Button } from 'react-bootstrap';

export const ReadSavedtime = ({ aika }) => {
   const [uusiaika, setUusiaika] = React.useState(aika.uusiaika);
   const [date, setDate] = React.useState(aika.date);
   
   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('timers').doc(aika.id).delete()
   }

   return (
      <div className="TimeListContainer">
         <div className="TimeList">
            <input 
               value={uusiaika}
               className="Timelist-time"
               onChange={(event) => setUusiaika(event.target.value)}
            />
            <input 
               value={date}
               className="Timelist-date"
               onChange={(event) => setDate(event.target.value)}
            />
            <div className="delete-button">
               <Button onClick={onDelete}>
                  Delete
               </Button>
            </div>
         </div>
      </div>
   )
}