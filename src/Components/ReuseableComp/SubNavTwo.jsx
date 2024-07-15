import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../ContextApi/Context';
import Icon10 from "../../assets/Images/icon10.svg";
import Icon11 from "../../assets/Images/icon11.svg";
import Icon12 from "../../assets/Images/icon12.svg";
import Icon13 from "../../assets/Images/icon13.svg";
import Icon14 from "../../assets/Images/icon14.svg";
import NavFeaturedImage from "../../assets/Images/navFeaturedimg.webp";

const SubNavTwo = () => {
    const { theme } = useContext(Context);
    return (
        <>
            <Grid item xs={12} md={6} lg={3}>
                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap' }}>
                    Discover
                </Typography>
                <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                    <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <img src={Icon10} alt="" style={{ width: '20px', height: '20px' }} />
                        <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                            <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Blog</span>
                            <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                Expert insight on Hiring
                            </Typography>
                        </div>
                    </div>
                </Box>
                <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                    <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <img src={Icon11} alt="" style={{ width: '20px', height: '20px' }} />
                        <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                            <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Talent assessment hub</span>
                            <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                How to screen for skills
                            </Typography>
                        </div>
                    </div>
                </Box>

                <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                    <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <img src={Icon12} alt="" style={{ width: '20px', height: '20px' }} />
                        <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                            <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Skills based hiring hub</span>
                            <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                Why it works and how to adopt it
                            </Typography>
                        </div>
                    </div>
                </Box>

            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap' }}>
                    Decide
                </Typography>
                <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                    <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <img src={Icon13} alt="" style={{ width: '20px', height: '20px' }} />
                        <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                            <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>Case Studies</span>
                            <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                Our customer success stories
                            </Typography>
                        </div>
                    </div>
                </Box>

                <Box component='div' sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '10px', '&:hover': { backgroundColor: theme.secondaryColor, width: '240px', borderRadius: '10px' }, padding: '10px' }}>
                    <div style={{ backgroundColor: theme.grayColor, width: '40px', height: '40px', borderRadius: '50%', padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <img src={Icon14} alt="" style={{ width: '20px', height: '20px' }} />
                        <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
                            <span style={{ whiteSpace: 'nowrap', fontSize: '13px' }}>ROI calculator</span>
                            <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap', fontSize: '13px' }} component='span'>
                                Your saving, quantified
                            </Typography>
                        </div>
                    </div>
                </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <Typography variant='subtitle1' sx={{ color: theme.blackColor, whiteSpace: 'nowrap' }}>
                    Featured
                </Typography>
                <Box component='div'>
                    <img src={NavFeaturedImage} alt="" style={{ width: '300px', height: '200px' }} />
                    <Typography sx={{ fontSize: '15px', color: theme.blackColor, whiteSpace: 'nowrap' }}>
                        The state of skill based Hiring
                    </Typography>
                    <Typography sx={{ fontSize: '13px', color: theme.blackColor, width:'260px' }}>
                        Our third report on state of skill based hiring is here. Discover how to hire better.
                    </Typography>
                </Box>

            </Grid>
        </>
    )
}

export default SubNavTwo