import React, { useContext, useState } from 'react';
import { Box, Button, ButtonGroup, Container, Grid, Typography } from '@mui/material';
import { Context } from '../ContextApi/Context';
import ButtonComp from './ButtonComp';
import ButtonComp2 from './ButtonComp2';
import "../../Helper/HomeBanner3.css";
import Sel1 from "../../assets/Images/sel1.webp";
import Sel2 from "../../assets/Images/sel2.webp";
import Sel3 from "../../assets/Images/sel3.webp";
import Sel4 from "../../assets/Images/sel4.webp";
import Sel5 from "../../assets/Images/sel5.webp";
import LabelIcon from '@mui/icons-material/Label';

const HomeBanner3 = () => {
    const { theme } = useContext(Context);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleButtonClick = (index) => {
        setActiveButtonIndex(index);
    };

    const buttonStyles = (index) => ({
        marginTop: '10px',
        marginBottom: '10px',
        border: 'none',
        backgroundColor: activeButtonIndex === index || hoveredIndex === index ? '#FFE6FA' : theme.whiteColor,
        color: theme.blackColor,
        padding: '15px',
        borderRadius: '10px',
        cursor: 'pointer',
        textTransform: 'capitalize'
    });
    const images = [Sel1, Sel2, Sel3, Sel4, Sel5];
    return (
        <>
            <Box sx={{ backgroundColor: theme.lightColor, height: 'auto' }}>
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ marginTop: '90px' }}>
                        <Typography sx={{ fontSize: '60px', margin: '0 auto', textAlign: 'center', maxWidth: '700px', lineHeight: '48px', fontWeight: 'bold' }}>
                            LET THEIR SKILLS DO THE TALKING
                        </Typography>
                        <Typography sx={{ fontSize: '17px', textAlign: 'center', maxWidth: '700px', margin: '10px auto' }}>
                            A resume only tells you what a candidate wants you to hear. Our talent assessment goes deeper, evaluating skills, behavior, and culture add to make hiring less gut feeling. More great feeling.
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', margin: '20px 0' }}>
                            <ButtonComp button='Get Started' classes='hb3' />
                            <ButtonComp2 buttonTwo='Free demo!' classes='hb3' />
                        </Box>

                        <Box>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} md={6}>
                                    <ButtonGroup orientation="vertical">
                                        {[
                                            "Predict job success, with 400+ test",
                                            "Handle thousand of application with ease, with ranked shortlist in minutes",
                                            "Create a seamless workflow, with our ATS integrations",
                                            "Provide a hiring process candidates love, focused on their skills",
                                            "Unlock bias-free hiring"
                                        ].map((text, index) => (
                                            <Button
                                                key={index}
                                                style={{ ...buttonStyles(index), display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}
                                                onClick={() => handleButtonClick(index)}
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            >
                                                <LabelIcon sx={{ margin: '0px 10px', color:theme.primaryColor, }} />
                                                <span>{text}</span>
                                            </Button>
                                        ))}
                                    </ButtonGroup>

                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box display="flex" justifyContent="center">
                                        <img style={{ width: '100%', height: 'auto' }} src={images[activeButtonIndex]} alt={`Selection ${activeButtonIndex + 1}`} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                    </div>
                </Container>
            </Box>
        </>
    );
}

export default HomeBanner3;
