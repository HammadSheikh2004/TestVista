import React, { useContext, useState } from 'react'
import { Context } from '../ContextApi/Context'
import { Box, Button, Checkbox, Container, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import SignInImage from '../../assets/Images/signin.png';
import GoogleIcon from '../../assets/Images/google.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NavLink } from 'react-router-dom';
import '../../Helper/ButtonCss.css';
import ButtonComp from '../ReuseableComp/ButtonComp';


const SignIn = () => {
  const { theme } = useContext(Context);
  const currentYear = new Date().getFullYear();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={{ backgroundColor: theme.blackColor, height: '850px' }}>
        <Container>
          <Grid container item xs={12}>
            <Grid item md={12} sm={12} xs={12} lg={6} order={{ sm: 2, xs: 2, md: 1, lg: 1 }}>
              <Box sx={{ backgroundColor: theme.whiteColor, height: 'auto', padding: '80px', }}>
                <Box sx={{}}>
                  <Typography sx={{ fontSize: '30px', fontWeight: 'bolder' }}>
                    TestVista
                  </Typography>
                  <Typography sx={{ fontSize: '25px', textAlign: 'left', marginTop: '10px', fontWeight: 'bolder' }}>
                    We’re glad to see you again
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
                    <OutlinedInput
                      id="outlined-adornment-password"
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      sx={{
                        width: '100%',
                        marginTop: '20px',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.blackColor,
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.blackColor,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.blackColor,
                        },
                      }}
                    />
                    <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Stack direction="row" sx={{ marginRight: { xs: '10px' } }} >
                        <Checkbox
                          sx={{
                            color: theme.primaryColor,
                            '&:hover': {
                              backgroundColor: theme.secondaryColor
                            },
                            '&.Mui-checked': {
                              color: theme.primaryColor,
                            }
                          }}
                        />
                        <Typography sx={{ marginTop: '10px', fontSize: { xs: '14px' } }}>
                          Keep me logged In
                        </Typography>
                      </Stack>

                      <NavLink style={{ fontSize: { xs: '14px', lg: '18px', md: '18px', sm: '18px' }, color: theme.primaryColor }}>
                        Forget Password
                      </NavLink>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                      <ButtonComp classes='signUpBtn' button="Sign In!" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item sm={12} xs={12} lg={6} order={{ sm: 1, xs: 1, lg: 2 }} sx={{ display: { md: 'none', sm: 'none', lg: 'block', xs: 'none' } }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography sx={{
                    color: theme.lightColor, fontSize: {
                      lg: '35px'
                    }, maxWidth: '500px', fontWeight: 'bolder', lineHeight: '40px', textAlign: 'center'
                  }}>
                    SKILLS-BASED HIRING IS THE #1 WAY TO RECRUIT
                  </Typography>
                  <Typography sx={{ maxWidth: '420px', fontSize: '16px', marginTop: '10px', textAlign: 'center', color: theme.lightColor, }}>
                    Discover more insights in our new report on the State of Skills-Based Hiring {currentYear}
                  </Typography>
                  <img src={SignInImage} style={{ marginTop: '20px' }} width='100%' height='100%' alt="" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default SignIn