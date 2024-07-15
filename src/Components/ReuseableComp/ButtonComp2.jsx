import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Context } from '../ContextApi/Context';
import { BorderColor } from '@mui/icons-material';

const ButtonComp2 = ({ buttonTwo, classes }) => {
    const { theme } = useContext(Context);
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyles = {
        backgroundColor: isHovered ? theme.secondaryColor : theme.whiteColor,
        color: theme.blackColor,
        padding: '10px 15px',
        borderRadius: '50px',
        border: '1px solid',
        borderColor: theme.blackColor,        
        cursor: 'pointer',
    };

    return (
        <button className={classes} style={buttonStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {buttonTwo}
        </button>
    );
}

export default ButtonComp2