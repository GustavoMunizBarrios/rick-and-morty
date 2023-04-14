import { Link } from 'react-router-dom';
import {addFav, removeFav} from '../redux/actions'
import { connect } from 'react-redux';

function Card({ id, name, species, gender, image, onClose }) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`}> {/* la ruta me va a dirigir a a /detail mas el id que le pasemos por parámetro a Card */}
            <h2>{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         {/* <h2>{status}</h2>
         <h2>{origin}</h2> */}
         <img src={image} alt='' />
      </div>
   );
}
const mapDispatchToProps = (dispatch) => { //dispatach de las dos actions
   return {
      addFav: () => {dispatch(addFav())}, //necesitamos despachar siempre para obtener un objeto
      removeFav: () => {dispatch(removeFav())}
   }
}
export default connect(
   null,
   mapDispatchToProps
)(Card);