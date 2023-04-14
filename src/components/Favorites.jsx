import Card from './Card';
import { connect } from 'react-redux';


const Favorites = ({myFavorites}) => { //estado global myFavorites por props

    return (
        <div>
            {// mapeamos el estado myfavorites (que es un array) y lo randerizamos utilizando el componente Card
                myFavorites.map(fav => {
                    return(
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                        />
                    )
                })
            }
        </div>
    )
}

//mapStateToProps trae el estado global myFavorite
const mapStateToProps = (state) => { //recibe el estado global completo 
    return {
       myFavorites: state.myFavorites 
    }
 }


export default connect( //conecta el componente Favorites con la funcion mapStateToProps
    mapStateToProps,
    null
 )(Favorites);