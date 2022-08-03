import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import FetchData from './FetchData';
import { Outlet } from 'react-router'
import StoriesHeader from './components/StoriesHeader';
import Stories from './components/Articles';
import HomeHeader from './components/HomeHeader';


function App() {
  return(
    <div className='App'>
      <FetchData />
      {/* <Outlet /> */}
    </div>
  )
}

export default App;
