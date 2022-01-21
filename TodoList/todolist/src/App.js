import React, { useEffect, useState } from "react";
import GetAPI from "./components/GetAPI";
import NavBar from "./components/NavBar";

function App() {
  const [tasks, setTasks] = useState([]);

  const initialURL = "http://localhost:2500/task";
  //http://localhost:2500/task
  //https://rickandmortyapi.com/api/character

  const fetchTasks = (url) => {};

  useEffect(() => {
    fetchTasks(initialURL);
  }, []);

  return (
    <>
      <NavBar brand="To do list Proyect" />

      <GetAPI />
    </>
  );
}

export default App;
