import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Icon1 from "../../assets/Images/icon1.svg";
import Icon2 from "../../assets/Images/icon2.svg";
import Icon3 from "../../assets/Images/icon3.svg";
import Icon4 from "../../assets/Images/icon4.svg";
import Icon5 from "../../assets/Images/icon5.svg";
import Icon6 from "../../assets/Images/icon6.svg";
import Icon7 from "../../assets/Images/icon7.svg";
import Icon8 from "../../assets/Images/icon8.svg";
import Icon9 from "../../assets/Images/icon9.svg";
import { Context } from '../ContextApi/Context';
const SubNavOne = () => {
    const { theme } = useContext(Context);
    return (
        <>

                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap' }}>
                        Product Information
                    </Typography>
                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                        <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={Icon1} alt="" style={{ width: '20px', height: '20px' }} />
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                                <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Product Tour</span>
                                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                    See our features in action
                                </Typography>
                            </div>
                        </div>
                    </Box>
                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                        <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={Icon2} alt="" style={{ width: '20px', height: '20px' }} />
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                                <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Science Behind the TestVista</span>
                                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                    How skills based Hiring works
                                </Typography>
                            </div>
                        </div>
                    </Box>

                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                        <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={Icon3} alt="" style={{ width: '20px', height: '20px' }} />
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                                <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>ATS integration</span>
                                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                    Explore all our integrations
                                </Typography>
                            </div>
                        </div>
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap' }}>
                        Test Library
                    </Typography>
                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                        <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={Icon4} alt="" style={{ width: '20px', height: '20px' }} />
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                                <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Programming</span>
                                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                    Assess Coding Skills
                                </Typography>
                            </div>
                        </div>
                    </Box>

                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                        <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={Icon5} alt="" style={{ width: '20px', height: '20px' }} />
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                                <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Personality and Culture</span>
                                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                    Discover what drives candidates
                                </Typography>
                            </div>
                        </div>
                    </Box>
                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                        <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={Icon6} alt="" style={{ width: '20px', height: '20px' }} />
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                                <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Cognivity ability</span>
                                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                    Test thinking and coding skills
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap' }}>
                        Solution For
                    </Typography>
                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                        <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={Icon7} alt="" style={{ width: '20px', height: '20px' }} />
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                                <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>BPO and outsourcing</span>
                                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                    Improve hiring and speed quality
                                </Typography>
                            </div>
                        </div>
                    </Box>

                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                        <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={Icon8} alt="" style={{ width: '20px', height: '20px' }} />
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                                <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Finanice companies</span>
                                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                    Secure leading talent fast
                                </Typography>
                            </div>
                        </div>
                    </Box>

                    <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                        <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <img src={Icon9} alt="" style={{ width: '20px', height: '20px' }} />
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                                <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Sale representative</span>
                                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                    Hire better, sale more
                                </Typography>
                            </div>
                        </div>
                    </Box>

                </Grid>
        </>
    )
}

export default SubNavOne