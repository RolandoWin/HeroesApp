import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter />', () => {
    
    test('1.- Debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false,           
        }
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue } >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        //screen.debug();
        expect( screen.getAllByText('Login').length ).toBe(2);

    });

    test('2.- Debe de mostrar el componente de marvel si esta logeado', () => {
        
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Rolando Lázaro'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue } >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        //screen.debug();
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

    });    
    
});