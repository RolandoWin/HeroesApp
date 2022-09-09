import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {
    
    test('1.- Debe de retornar el estado por defecto', () => {
        
        const state = authReducer( {logged: false}, {} );
        expect( state ).toEqual( { logged: false } );

    });

    test('2.- Debe de (login) llamar el login autenticar y establecer el user ', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Rolando',
                id: '123'
            }
        }

        const state = authReducer( { logged: false }, action );
        expect( state ).toEqual({ 
            logged: true,
            user: action.payload
        })

    });
    
    test('3.- Debe de (logout) borrar el name del usuario y logged en false', () => {
        
        const state = {
            logged: true,
            user: {id: '123', name: 'Roly' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );
        expect( newState ).toEqual({ logged: false });

    });    
    
});