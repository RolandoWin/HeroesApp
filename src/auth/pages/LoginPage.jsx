import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {

    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogin = ()=>{

        //mostramos la ultima pagina visualizada antes de cerrar sesión
        const lastPath = localStorage.getItem('lastPath') || '/'

        login( 'Rolando Lázaro' );

        navigate(lastPath,{
            replace:true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button 
                className="btn-primary btn"
                onClick={onLogin}>
                Login
            </button>
        </ div>
    )
}
