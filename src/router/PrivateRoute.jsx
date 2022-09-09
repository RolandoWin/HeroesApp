import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';

export const PrivateRoute = ( { children } ) => {

    //verificamos si esta autenticado en el useContext
    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    //Se puede utilizar useMemo o un useEffect si el pathname o el search cambia
    const lastPath = pathname + search;
    localStorage.setItem( 'lastPath', lastPath );

    // Si logged es true ingresa al children sino lo devuelve al login
    return  ( logged ) ? children : <Navigate to = "/login" />

}
