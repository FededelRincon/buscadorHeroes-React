import { types } from '../types/types';


// const state = {
//     name: 'Fernando',
//     logged: true
// }

// const state = {
//     name: '',
//     logged: false
// }


export const authReducer = (state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false  //asi xq no me interesa el payload para hacer logout
            }
    
        default:
            return state;
    }



}