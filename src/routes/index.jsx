import React, {lazy, Suspense} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';



function RoutePath(){

    const Layout = lazy(()=>import('../container/layout'));
    const HomePage = lazy(() => import('../pages/homepage'));
    const Login = lazy(()=> import('../pages/login'));
    const SignUp = lazy(()=> import('../pages/signup'));


    return (
        <Suspense>
            <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />

            <Route path='/' element={<Layout/>}>
                <Route path='/homepage' element={<HomePage/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
                
            </Routes>
        </Suspense>
    )
}

export default RoutePath;
