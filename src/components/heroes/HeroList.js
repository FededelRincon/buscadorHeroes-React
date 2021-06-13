import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);  //por el useMemo, si el publisher cambia, entonces renderiza de nuevo, sino mostra "lo que tenias"
    
    // const heroes = getHeroesByPublisher( publisher );
    
    return (
        <div className="card-columns animate__animated animate__fadeIn ">
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero } // mando id, superhero, character, etc... todo junto
                    />
                ))
            }
        </div>
    )
}
