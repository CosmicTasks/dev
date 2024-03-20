import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'
import LandingPage from './components/pages/LandingPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCalendarCheck,
  faMobileScreen,
  faPalette,
  faPuzzlePiece,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
 
library.add(
  faCalendarCheck,
  faMobileScreen,
  faPalette,
  faPuzzlePiece,
  faPenToSquare
);
function App() {

  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App
