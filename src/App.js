import React from 'react';
import './index.css';
import MemoryVerse from './components/MemoryVerse';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">EST Memory Verse Training - May 19, 2019</h1>
        <br />
        <div className="Verse">
          <MemoryVerse />
        </div>
      </div>
    );
  }
}

export default App;
