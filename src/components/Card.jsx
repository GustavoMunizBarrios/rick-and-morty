import { Link } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`}> {/* la ruta me va a dirigir a a /detail mas el id que le pasemos por parámetro a Card */}
            <h2>{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
