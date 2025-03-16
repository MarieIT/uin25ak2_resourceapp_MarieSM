import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"; 
import Resources from "./components/Resources"; 
import Nav from "./components/Nav"; 
import Layout from './components/Layout';

function App() {
  const [presentCatagory, setPresentCategory] = useState("/");

  return (
    <>
      <Nav/>
      <Layout>
        <Routes>
          <Route path="/" element={<Resources/>}></Route>
          <Route path=":category" element={<Resources/>}></Route>
        </Routes>
      </Layout>
      
    </>
  )
}

export default App
