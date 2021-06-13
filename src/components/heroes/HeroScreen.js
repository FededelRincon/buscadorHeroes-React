import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {



    const { heroeId } = useParams(); //no hay otra cosa mas que heroeId kkk
    

    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);  //por el useMemo, si el publisher cambia, entonces renderiza de nuevo, sino mostra "lo que tenias"
    // const hero = getHeroById( heroeId );

    
    if ( !hero  /*si hero no existe */ ) {
        return <Redirect to="/" /> /*mandame a la pagina de inicio */
    };

    const handleReturn = () => {
        //me fijo en el historial... si tiene mas de 2 cosas es xq vino navegando, ergo volvete para atras, pero si tiene menos de 2 es xq entro directamente desde la url, entonces redireccioname a la pagina de inicio
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }

    }

    const {
        // id, //ya lo saco del heroeId
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    // src={`../assets/heroes/${heroeId}.jpg`}
                    src={ `./assets/heroes/${ heroeId }.jpg` }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={ superhero}
                />
            </div>

            <div className="col-8 animate__animated animate__fadeInRight">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> {"\u00A0"} {alter_ego} </li>
                    <li className="list-group-item"> <b> Publisher: </b> {"\u00A0"} {publisher} </li>
                    <li className="list-group-item"> <b> First appearance: </b> {"\u00A0"} {first_appearance} </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
