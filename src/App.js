import './App.css';
import LeftPane from './components/LeftPane';
import MainPane from './components/MainPane';
import RightPane from './components/RightPane';
import React, { useState, useEffect } from "react";

  function App() {
  return (
    <div className="App">
        <LeftPane />
        <MainPane />
        <RightPane />
        {/* <Outlet /> */}
    </div>
  );
}

export default App;
