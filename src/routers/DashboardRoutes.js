import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-4">
                <Switch >
                    <Route exact path="/marvel" component={ MarvelScreen } /> {/* pagina de todos los marvels */}
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } /> {/*pagina de un heroe en concreto */}
                    <Route exact path="/dc" component={ DcScreen } /> {/*pagina de todos los heroes de DC */}
                    <Route exact path="/search" component={ SearchScreen } /> {/*pagina de todos los heroes de DC */}


                    <Redirect to="/marvel" /> {/*entro con la pagina q sea a este router, y si no combina con ninguno, quiero q me mandes al /marvel  */}
                </Switch>    
            </div>   
        </>
    )
}
