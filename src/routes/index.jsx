import React, {lazy, Suspense} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';



function RoutePath(){

    const Layout = lazy(()=>import('../container/layout/index'));
    const HomePage = lazy(() => import('../pages/homepage'));


    return (
        <Suspense>
            <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />

            <Route path='/' element={<Layout/>}>
                <Route path='/homepage' element={<HomePage/>}/>
            </Route>
                
            </Routes>
        </Suspense>
    )
}

export default RoutePath;
