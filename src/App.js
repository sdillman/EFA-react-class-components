import React, { Component } from 'react';
import { Films } from './films'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Films favNumber={42} fname={"Justin"} />
      </div>
    )
  }
}

// ORIGINAL - CLASS
// function App() {
//   return (
//     <div className="App">
//     <Films />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//     <Films />
//     </div>
//   );
// }

export default App;
