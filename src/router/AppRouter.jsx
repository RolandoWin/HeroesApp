import { Route, Routes } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>           
            <Routes>  

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                {/* para proteger una ruta privada incluimos dentro del HighOrder Component las rutas que deseamos proteger */}

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
                               
                {/* <Route path="/*" element={<HeroesRoutes />} /> */}

            </Routes>
        </>
    )
}
