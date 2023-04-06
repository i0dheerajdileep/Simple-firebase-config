import React from  'react'
import {db} from './firebase/config'
import { collection, getDocs,addDoc,deleteDoc ,doc} from 'firebase/firestore'
function App() {
  const handleRead = () =>{
    getDocs(collection(db, "products"))
    .then(snapshots=>{
      snapshots.forEach((doc) => {
      console.log(doc.data(),doc.id)
      })
    });
  }
  const handlePost=()=>{
    addDoc(collection(db,"products"),
    {
      name : 'mi',
      price: '1500'
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  const handleDelete=()=>{
    deleteDoc(doc(collection(db,"products"),"D7im1yBXJdtNoGu55huh"))
    .then(()=>{
      console.log("Succesfully deleted")
      })
  }
  return (
    <div>
      <button onClick={handleRead}>Read data</button>
      <button onClick={handlePost}>Post data</button>
      <button onClick={handleDelete}>Delete data</button>

    </div>
  )
}

export default App
