import React, {lazy, Suspense} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

function PrivateRoute({ element, ...props }) {
    const loggedUser = localStorage.getItem('loggedUser');
    const isAuthenticated = !!loggedUser;

    return isAuthenticated ? element : <Navigate to="/login" />;
}

function RoutePath(){

    const Layout = lazy(()=>import('../container/layout'));
    const HomePage = lazy(() => import('../pages/homepage'));
    const Login = lazy(()=> import('../pages/login'));
    const SignUp = lazy(()=> import('../pages/signup'));
    const CartPage = lazy(()=>import('../pages/cartPage'));


    return (
        <Suspense>
            <Routes>
            <Route path="/" element={<Navigate to="/signup" replace />} />

            <Route path='/' element={<Layout/>}>
                <Route path='/homepage' element={<PrivateRoute element={<HomePage />} />} />
                <Route path='/mycart' element={<PrivateRoute element={<CartPage />} />}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        
            </Routes>
        </Suspense>
    )
}

export default RoutePath;
