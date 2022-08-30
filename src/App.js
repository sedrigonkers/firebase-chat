import './App.css';
import React from 'react';
import { db, auth } from './firebase';
import SignIn from './components/SignIn'

function App() {

  const inputRef = React.createRef()

  function addCollection(msg) {
    db.collection('messages').add({
      time: Date.now(),
      message: msg
    })
      .then(
        (docRef) => console.log(docRef.id)
      )
      .catch(
        (err) => console.log('asdasdasdasd')
      )

  }

  return (
    <div className="App">
      {/* <form>
        <input ref={inputRef} placeholder='Enter your message' />
        <button onClick={() => addCollection(inputRef.current.value)}>Add Collection</button>
      </form> */}
      <SignIn />
    </div>
  );
}

export default App;
