import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Hello</h1>
        <Modal>
          <p>Click to open a modal</p>
        </Modal>
      </div>
    )
  }
}

export default App;
