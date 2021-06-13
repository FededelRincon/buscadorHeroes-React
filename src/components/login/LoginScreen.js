import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/'); // nos redirecciona hasta esta pagina (pero sin sobreescribir el historial)
        // history.replace('/'); // tambien nos redirecciona hasta esta pagina, pero SI sobreescribe el donde esta (osea que si hace para atras, esta pagina nunca existio)

        const lastPath = localStorage.getItem('lastPath') || '/'

        dispatch({
            type: types.login,
            payload: {
                name: 'Fede'
            }
        })

        // history.replace('/');
        history.replace(lastPath);

    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
