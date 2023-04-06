import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'f99ef8399d40.cea0bfba7c15f21eb580';

function App() {
   const [characters, setCharacters] = useState([]); //characters es un estado del tipo array de objetos

   const onSearch = (id) => {
      //Con axios le hago peticiones a una api al servidor, el id lo estamos obteniendo del input, 
      //es decir de lo que escribe el usuario. Una vez que tiene una respuesta en el .then 

      //Axios retorna un objeto con una propiedad llamada data y ahi dentro es donde tengo la información de la api
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))// si da true se queda si da false se va el character
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />

         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
        
      </div>
   );
}

export default App;