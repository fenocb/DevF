import axios from "axios";
import React, { useEffect, useState } from "react";


const urlAPI = "https://rickandmortyapi.com/api/character";

const Cards = () => {
    const [character, setCharacter] = useState([]);
  
    const peticionGet = () => {
    axios
      .get(urlAPI)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((e) => {
        console.log(e.mensage);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return(
      <div>
          <h2>Hola mundo</h2>
          {console.log(character)}
      </div>
      
      
  )
};
export default Cards;
