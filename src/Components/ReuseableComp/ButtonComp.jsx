import React, { useContext, useState } from 'react';
import { Context } from '../ContextApi/Context';

const ButtonComp = ({ button, classes }) => {
    const { theme } = useContext(Context);
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyles = {
        backgroundColor: isHovered ? theme.darkColor : theme.primaryColor,
        color: theme.whiteColor,
        padding: '10px 15px',
        borderRadius: '50px',
        border: 'none',
        cursor: 'pointer',
        outline: 'none'
    };

    return (
        <button
            className={classes}
            style={buttonStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {button}
        </button>
    );
}

export default ButtonComp;
