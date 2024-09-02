import React from 'react';
import Button from "./components/button/button";
import { ReactComponent as MusicIcon } from './icons/music.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button variant="rectangular" onClick={() => console.log("hi")} text={"Play!"}></Button>
      <Button variant="circular" onClick={() => {}} icon={<MusicIcon />}></Button>
    </div>
  );
}

export default App;
