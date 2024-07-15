import React, { useContext } from 'react'
import { Context } from '../ContextApi/Context'
import { Box, Container, Typography } from '@mui/material';
import HomeSlider from './HomeSlider';
import ButtonComp from './ButtonComp';
import ButtonComp2 from './ButtonComp2';
import "../../Helper/SliderBtnCss.css";


const HomeBanner4 = () => {
    const { theme } = useContext(Context);
    return (
        <>
            <Box sx={{ backgroundColor: theme.primaryColor, height: 'auto', overflow:'hidden' }}>
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'100%'}}>
                    <div style={{ marginTop: '170px' }}>
                        <Typography sx={{ fontSize: '60px', margin: '0 auto', textAlign: 'center', maxWidth: '600px', lineHeight: '48px', fontWeight: 'bold', color: theme.whiteColor }}>
                            HIRING DOWN TO A SCIENCE
                        </Typography>
                        <Typography sx={{ fontSize: '17px', textAlign: 'center', maxWidth: '900px', margin: '30px auto', color: theme.whiteColor }}>
                            Across 400+ tests, developed by 15 specialists with 12 PhDs between them, you can screen talent on exactly what matters. Making smarter, faster, more accurate decisions, the first time of asking.
                        </Typography>
                            <HomeSlider />
                        <div style={{
                            margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
                        }}>
                            <ButtonComp2 classes="btn2" buttonTwo="Go For a test Run" />
                            <ButtonComp classes="btn" button="Explore All Test" />
                        </div>
                    </div>
                </Container>
            </Box>
        </>
    )
}

export default HomeBanner4