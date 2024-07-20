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
        <Box sx={{ backgroundColor: theme.primaryColor, height: 'auto' }}>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <div style={{ marginTop: '100px' }}>
                    <Typography sx={{
                        fontSize: {
                            xs: '21px', // font size for extra-small screens
                            sm: '30px', // font size for small screens
                            md: '50px', // font size for medium screens
                            lg: '60px' // font size for large screens
                        }, margin: '0 auto', textAlign: 'center', maxWidth: '600px', lineHeight: '48px', fontWeight: 'bold', color: theme.whiteColor, width: '100%'
                    }}>
                        HIRING DOWN TO A SCIENCE
                    </Typography>
                    <Typography sx={{
                        fontSize: {
                            xs: '15px', // font size for extra-small screens
                            sm: '20px', // font size for small screens
                            md: '30px', // font size for medium screens
                            lg: '17px' // font size for large screens
                        },
                        textAlign: 'center',
                        maxWidth: {
                            xs: '300px', // max width for extra-small screens
                            sm: '400px', // max width for small screens
                            md: '500px', // max width for medium screens
                            lg: '900px' // max width for large screens
                        },
                        margin: '30px auto', color: theme.whiteColor
                    }}>
                        Across 400+ tests, developed by 15 specialists with 12 PhDs between them, you can screen talent on exactly what matters. Making smarter, faster, more accurate decisions, the first time of asking.
                    </Typography>
                    <Container>
                        {/* <HomeSlider /> */}
                    </Container>
                    <Box sx={{
                        margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
                    }}>
                        <ButtonComp2 classes="btn2" buttonTwo="Go For a test Run" />
                        <ButtonComp classes="btn" button="Explore All Test" />
                    </Box>
                </div>
            </Container>
        </Box>
    )
}

export default HomeBanner4;
