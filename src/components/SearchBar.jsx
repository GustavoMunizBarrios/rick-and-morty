import {useState} from 'react';

export default function SearchBar({ onSearch }) {

   const[id,setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value) // event.target.value extrae el valor del input       
   }

   //onChange detecta cambios en el input y manda llamar a la función handleChange
   // value= {id} guarda el value (lo que escrivimos en el input) en el estado local id 
   //()=> onSearch(id) le estamos pasando el estado id como argumento cuando ejecutamos la función onSearch
   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=> {onSearch(id); setId('')} }>Agregar</button>
      </div>
   );
}
