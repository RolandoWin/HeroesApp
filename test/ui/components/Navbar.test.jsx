import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Rolando Lázaro',
            id: 'ABC123'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );
    
    test('1.- Debe de mostrar el nombre del usuario logeado', () => {        

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>                
            </AuthContext.Provider>
        );

        //screen.debug();
        expect( screen.getByText( 'Rolando Lázaro' ) ).toBeTruthy();
        
    });

    test('2.- Debe de llamar el logout y navigate cuando se hace click en el boton de logout', () => {

        
        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>                
            </AuthContext.Provider>
        );

        //screen.debug();

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true}); 

    });
        
});