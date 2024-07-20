import React, { useContext } from 'react'
import { Context } from '../ContextApi/Context'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import SignUpImage from "../../assets/Images/signup.png"
import { NavLink } from 'react-router-dom';
import GoogleIcon from '../../assets/Images/google.svg';
import ButtonComp from '../ReuseableComp/ButtonComp';
import '../../Helper/ButtonCss.css';

const SignUp = () => {
    const { theme } = useContext(Context);
    return (
        <>
            <Box sx={{ backgroundColor: theme.lightColor, height: 'auto' }}>
                <Container>
                    <Grid container item xs={12}>
                        <Grid item md={6} sm={12} xs={12} lg={6} order={{ sm: 2, xs: 2, md: 1, lg: 1 }}>
                            <Box sx={{ backgroundColor: theme.whiteColor, height: 'auto', borderRadius: '20px', padding: { xs: '10px', md: '80px', sm: '80px', lg: '80px' } }}>
                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' } }}>
                                    <Typography sx={{ fontSize: '30px', }}>
                                        TestVista
                                    </Typography>
                                    <Typography sx={{ fontSize: '15px', marginLeft: { xs: '0', sm: '0', md: '30px' }, textAlign: 'center', marginTop: { xs: '10px', sm: '10px', md: '0' } }}>
                                        All ready an Account <NavLink style={{ color: theme.primaryColor }} to='/signin'>Sign In</NavLink>
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontSize: '23px', marginTop: '20px', fontWeight: 'bolder' }}>
                                    Get started with your Free plan
                                </Typography>
                                <Box sx={{ marginTop: '20px' }}>
                                    <Typography sx={{ fontSize: '14px', }}>
                                        Account creation is exclusively for companies. If you’re a candidate,
                                        <Box component='span' sx={{ color: theme.primaryColor }}>visit the support center</Box>
                                    </Typography>
                                    <Button variant="outlined" sx={{ marginTop: '30px', width: '100%', borderRadius: '30px', padding: '10px', textTransform: 'capitalize', color: theme.blackColor, '&:hover': { backgroundColor: 'rgba(0, 0, 0, .1)', borderColor: theme.blackColor }, borderColor: theme.blackColor, fontSize: { xs: '11px', sm: '14px', md: '16px', lg: '16px' } }}>
                                        <Box component="img" src={GoogleIcon} alt="Google Icon" sx={{ width: '20px', height: '20px', marginRight: '8px', }} />
                                        Continue with GOOGLE
                                    </Button>
                                    <Box display="flex" alignItems="center" my={5}>
                                        <Box flexGrow={1} height="1px" bgcolor="#D3D3D3" />
                                        <Typography variant="body1" mx={2}>
                                            OR
                                        </Typography>
                                        <Box flexGrow={1} height="1px" bgcolor="#D3D3D3" />
                                    </Box>
                                    <Box sx={{ marginTop: '30px' }}>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Working Email"
                                            placeholder="Email"
                                            multiline
                                            fullWidth
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: theme.blackColor,
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: theme.blackColor,
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: theme.blackColor,
                                                    },
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    '&.Mui-focused': {
                                                        color: theme.blackColor,
                                                    },
                                                },
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ margin: '30px 0' }}>
                                        <ButtonComp classes='signUpBtn' button="Create Free Account!" />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12} lg={6} order={{ sm: 1, xs: 1, md: 2, lg: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography sx={{
                                        color: theme.blackColor, fontSize: {
                                            xs: '25px',
                                            sm: '40px',
                                            md: '50px',
                                            lg: '60px'
                                        }, maxWidth: '500px', fontWeight: 'bolder', lineHeight: { xs: '30px', md: '50px', sm: '50px', lg: '50px' }
                                    }}>
                                        Make data driven<Box sx={{ textAlign: 'center' }}> hiring decisions</Box>
                                    </Typography>
                                    <Typography sx={{ marginTop: '20px', maxWidth: '500px', fontSize: '16px' }}>
                                        <Box sx={{ textAlign: 'center' }}>With the Free plan you can screen candidates for</Box> essential skills applicable to a wide range of job roles
                                    </Typography>
                                    <img src={SignUpImage} style={{ marginTop: '20px' }} width='100%' height='100%' alt="" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </>
    )
}

export default SignUp