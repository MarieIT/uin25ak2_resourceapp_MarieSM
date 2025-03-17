import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"; 
import Resources from "./components/Resources"; 
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
