import React, { createContext } from 'react'
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
    }
    return (
        <>
            <Context.Provider value={{ theme }}>
                <Navbar />
                <Routing />
                <FooterComp />
            </Context.Provider>
        </>
    )
}

export default ContextApi