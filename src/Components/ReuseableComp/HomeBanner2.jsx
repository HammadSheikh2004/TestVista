import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../ContextApi/Context'
import Icon15 from "../../assets/Images/icon15.svg";
import Icon16 from "../../assets/Images/icon16.svg";
import Icon17 from "../../assets/Images/icon17.svg";
import Icon18 from "../../assets/Images/icon18.svg";
import Icon19 from "../../assets/Images/icon19.svg";

const HomeBanner2 = () => {
    const { theme } = useContext(Context);
    return (
        <>
            <Box sx={{ backgroundColor: theme.blackColor, height: 'auto', padding: '40px 50px' }}>
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <div style={{ marginTop: '90px' }}>
                        <Typography sx={{ fontSize: '60px', margin: '0 auto', textAlign: 'center', maxWidth: '1000px', lineHeight: '48px', fontWeight: 'bold', color: theme.whiteColor }}>
                            JOIN 10,000+ COMPANIES WHO HIRE WITH TESTGORILLA
                        </Typography>
                        <Box
                            sx={{
                                marginTop: '70px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Grid
                                container
                                item
                                spacing={2}
                                xl={12}
                                sx={{ justifyContent: 'center' }}
                            >
                                {[Icon15, Icon16, Icon17, Icon18, Icon19].map((icon, index) => (
                                    <Grid
                                        item
                                        key={index}
                                        xs={6}
                                        sm={1.6}
                                        lg={2.4}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <img src={icon} alt={`icon-${index}`} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>


                    </div>
                </Container>
            </Box>
        </>
    )
}

export default HomeBanner2