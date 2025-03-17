import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, useParams} from "react-router-dom"; 
import Resources from "./components/Resources"; 
import Nav from "./components/Nav"; 
import Layout from './components/Layout';

function App() {
  const [presentCategory, setPresentCategory] = useState("html");
  
  return (
    <>
      <Layout presentCategory={presentCategory}>
        <Routes>
          <Route path="/" element={<Resources setPresentCategory={setPresentCategory} isStartPage={true}/>}></Route>
          <Route path="/:category" element={<Resources setPresentCategory={setPresentCategory} isStartPage={false}/>}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
