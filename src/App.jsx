import React, { Suspense, lazy, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Note from "./Component/Note";
import Input from "./Component/Input";
import { NotesContext } from "./Context/Notes";
import { Route, Routes } from "react-router-dom";
import Card from "./Component/Card";
import Loader from "./Component/Loader";
// Correct way to use lazy()
const Container = lazy(() => import("./Component/Container"));
const Pages = lazy(() => import("./Component/Pages"));

function App() {
  const [count, setCount] = useState(0);
  const { notes, status, setstatus } = useContext(NotesContext);

  return (
    <>
      <Suspense fallback={<div><Loader/></div>}>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/:id" element={<Pages />} />
        </Routes>

        {status ? <Card /> : null}
      </Suspense>
    </>
  );
}

export default App;