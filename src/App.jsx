import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from './Component/Note'
import Input from "./Component/Input"
import { NotesContext } from './Context/Notes'
import { Route,Routes } from 'react-router-dom'
import Container from './Component/Container'
import Pages from "./Component/Pages"
function App() {
  const [count, setCount] = useState(0)
   const {notes} =useContext(NotesContext);
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Container/>}></Route>
      <Route path="/:id" element ={<Pages/>}></Route>
    </Routes>
    </>
  )
}

export default App
