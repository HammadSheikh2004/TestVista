import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../Routing/Navbar';
import Routing from '../Routing/Routing';
import FooterComp from '../ReuseableComp/FooterComp';

export const Context = createContext();

const ContextApi = () => {
    const theme = {
        primaryColor: '#D410AA',
        secondaryColor: '#FFE6FA',
        lightColor: '#FFFAF6',
        darkColor: '#A90686',
        whiteColor: 'white',
        blackColor: '#242424',
        grayColor: '#D3D3D3',
    };

    return (
        <Context.Provider value={{ theme }}>
            <MainContent />
        </Context.Provider>
    );
};

const MainContent = () => {
    const location = useLocation();
    const showHeaderFooter = location.pathname.trim() !== '/signup' && location.pathname.trim() !== '/signin' && location.pathname.trim() !== '/dashboard';

    return (
        <>
            {showHeaderFooter && <Navbar />}
            <Routing />
            {showHeaderFooter && <FooterComp />}
        </>
    );
};

export default ContextApi;
