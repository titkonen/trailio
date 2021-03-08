import React from "react";
import firebase from '../../firebase';
import { ReadSavedtime } from './ReadSavedtime';
import '../../App.css';

function Diary() {
  const [saveTime, setSaveTime] = React.useState([]);
  // const [savedTimemap, setSavedTimemap] = React.useState([]);

  React.useEffect(() => {
    const db = firebase.firestore();
    return db.collection('timers').orderBy('date').onSnapshot((snapshot) => {
      const saveTimeData = [];
      snapshot.forEach(doc => saveTimeData.push({ ...doc.data(), id: doc.id }));
      setSaveTime(saveTimeData);
    });
  }, []);

  return (
    <div className="table-container">
    
      <h1 className="heading">Saved trails</h1>

      {saveTime.map(aika => (
        <div className="grid-container" key={aika.uusiaika}>
          <div className="grid-item"><ReadSavedtime aika={aika} /></div>
        </div>
      ))}

    </div>
  );
}

export default Diary;