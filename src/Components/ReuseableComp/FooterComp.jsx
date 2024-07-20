import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Context } from '../ContextApi/Context'
import { NavLink } from 'react-router-dom';
import FooterIcon from "../../assets/Images/footerIcon.svg";

const FooterComp = () => {
    const { theme } = useContext(Context);
    const currentYear = new Date().getFullYear();
    const FooterNavLink = ({ children, to }) => {
        const [isHovered, setIsHovered] = useState(false);
        const footerLinkStyle = {
            textDecoration: 'none',
            color: isHovered ? theme.grayColor : theme.blackColor,
            transition: '.2s ease-in-out',
        }

        return (
            <Typography
                variant='subtitle1'
                sx={{ textAlign: 'left', marginBottom: '10px', lineHeight: '15px' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <NavLink to={to} style={footerLinkStyle}>
                    {children}
                </NavLink>
            </Typography>
        );
    }

    return (
        <Box sx={{ backgroundColor: theme.whiteColor, height: 'auto', marginTop: '30px', marginBottom: { sm: '80px', xs: '80px', lg:'0px' } }}>
            <Container>
                <Grid container item spacing={2} xs={12}>
                    <Grid item lg={6} xs={12} sm={6}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'left', marginTop: '30px' }}>
                            TestVista
                        </Typography>
                    </Grid>

                    <Grid item lg={2} xs={12} sm={6}>
                        <FooterNavLink to="/help-center">Help Center</FooterNavLink>
                        <FooterNavLink to="/information-for-candidates">Information for candidates</FooterNavLink>
                        <FooterNavLink to="/site-map">Site map</FooterNavLink>
                        <FooterNavLink to="/legal-staff">Legal staff</FooterNavLink>
                    </Grid>

                    <Grid item lg={2} xs={12} sm={6}>
                        <FooterNavLink to="/Careers">Careers</FooterNavLink>
                        <FooterNavLink to="/Blog">Blog</FooterNavLink>
                        <FooterNavLink to="/ROI-calculator">ROI calculator</FooterNavLink>
                        <FooterNavLink to="/Privacy-Policy">Privacy Policy</FooterNavLink>
                        <FooterNavLink to="/Contact">Contact</FooterNavLink>
                    </Grid>

                    <Grid item lg={2} xs={12} sm={6}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={FooterIcon} alt="" height="100px" width="200px" />
                        </Typography>
                    </Grid>
                </Grid>

                <hr style={{ margin: "30px 0px", borderColor: theme.grayColor }} />

                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '30px 0px',
                    fontSize: { xs: '13px', md: '20px' }
                }}>
                    &copy; <Box component='span' sx={{ fontSize: { xs: '25px', md: '30px' }, color: theme.primaryColor, margin: '0px 8px', fontWeight: 'bold' }}>TestVista</Box> {currentYear}. All right reversed.
                </Typography>
            </Container>
        </Box>
    )
}

export default FooterComp
