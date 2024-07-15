import React, { useContext } from 'react';
import { Context } from '../ContextApi/Context';
import "../../Helper/SearchCss.css";
import ButtonComp from './ButtonComp';

const SearchComp = () => {
    const { theme } = useContext(Context);
    return (
        <div className="search-container">
            <input
                type="search"
                className='search'
                placeholder="Search..."
            />
            <ButtonComp button="Try for free!" classes='search-button' />
        </div>
    );
}

export default SearchComp;
