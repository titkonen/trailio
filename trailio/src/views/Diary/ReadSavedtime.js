import React from 'react';
import firebase from '../../firebase';
import '../../App.css';
import { Button } from 'react-bootstrap';


export const ReadSavedtime = ({ aika }) => {
   const [uusiaika, setUusiaika] = React.useState(aika.uusiaika);
   const [date, setDate] = React.useState(aika.date);

   const onUpdate = (event) => {
      const db = firebase.firestore()
      db.collection('timers').doc(aika.id).set({ ...aika, date, uusiaika })
      event.preventDefault();
   }

   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('timers').doc(aika.id).delete()
   }

   return (
      <div className="#">
         <div className="#">
            <input
               value={uusiaika}
               className="input"
               size="10"
               onChange={(event) => setUusiaika(event.target.value)}
            />
            <input
               value={date}
               className="input"
               size="10"
               onChange={(event) => setDate(event.target.value)}
            />
            <Button className="button-secondary" onClick={onUpdate}>
               Update
            </Button>
            <Button className="button-secondary" onClick={onDelete}>
               Delete
            </Button>

         </div>
      </div>
   )
}