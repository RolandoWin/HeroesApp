import { types } from '../../../src/auth/types/types';

describe('Pruebas en "Types.js"', () => {
    
    test('1.- Debe de regresar estos types', () => {
        
        expect(types).toEqual({
            login:  '[Auth] login',
            logout: '[Auth] logout',
        })

    });
    
});