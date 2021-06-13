import { heroes } from '../data/heroes';

export const getHeroById = ( id ) => {

    // const validPublisher = ['DC Comics', 'Marvel Comics'];

    // if( !validPublisher.includes(publisher) ){
    //     throw new error (`Publisher "${publisher}" no es correcto `)
    // }

    // return heroes.filter( hero => hero.id === id); //filter consigue el 1er y sigue buscando por el 2do
    return heroes.find( hero => hero.id === id); //este encuentra el 1er y corta la busqueda


}
