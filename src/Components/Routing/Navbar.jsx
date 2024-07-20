import React, { useContext, useState } from 'react';
import { AppBar, Box, Container, Drawer, Grid, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../ContextApi/Context';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SubNavOne from '../ReuseableComp/SubNavOne';
import SubNavTwo from '../ReuseableComp/SubNavTwo';
import ButtonComp from '../ReuseableComp/ButtonComp';
import ButtonComp2 from '../ReuseableComp/ButtonComp2';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const { theme } = useContext(Context);
    const navLinks = (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Box
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                sx={{ position: 'relative' }}
            >
                <NavLink
                    to='/products'
                    style={{
                        color: theme.blackColor,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '20px 0px',
                        cursor: 'pointer',
                    }}
                >
                    Products
                    <Box sx={{
                        display: 'inline-flex',
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease-in-out',
                    }}>
                        <ArrowDownIcon />
                    </Box>
                </NavLink>
                {dropdownOpen && (
                    <Box sx={{
                        position: 'absolute',
                        top: '100%',
                        backgroundColor: theme.whiteColor,
                        color: theme.blackColor,
                        boxShadow: 1,
                        zIndex: 10,
                        transition: 'opacity 0.3s ease-in-out',
                        opacity: dropdownOpen ? 1 : 0,
                        width: '970px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '-350px'
                    }}>
                        <Grid container spacing={8} sx={{ padding: '30px' }}>
                            <SubNavOne />
                        </Grid>
                    </Box>

                )}
            </Box>
            <NavLink
                to='/pricing'
                style={{
                    color: theme.blackColor,
                    textDecoration: 'none',
                    padding: '20px 0px',
                }}
            >
                Pricing
            </NavLink>
            <Box
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
                sx={{ position: 'relative' }}
            >
                <NavLink
                    to='/resources'
                    style={{
                        color: theme.blackColor,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '20px 0px',
                        cursor: 'pointer',
                    }}
                >
                    Resources
                    <Box component='span' sx={{
                        display: 'inline-flex',
                        transform: resourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease-in-out',
                        alignItems: 'center',
                    }}>
                        <ArrowDownIcon />
                    </Box>
                </NavLink>
                {resourcesOpen && (
                    <Box sx={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: theme.whiteColor,
                        color: theme.blackColor,
                        boxShadow: 1,
                        zIndex: 10,
                        transition: 'opacity 0.3s ease-in-out',
                        opacity: resourcesOpen ? 1 : 0,
                        width: '970px'
                    }}>
                        <Grid container spacing={2} sx={{ padding: '30px' }}>
                            <SubNavTwo />
                        </Grid>
                    </Box>
                )}
            </Box>
            <NavLink
                to='/jobboard'
                style={{
                    color: theme.blackColor,
                    textDecoration: 'none',
                    padding: '20px 0px',
                }}
            >
                Job Board
            </NavLink>
        </Box>
    );

    const navigate = useNavigate();

    const goSignUp = () => {
        navigate("/signup");
    }

    const goSignIn = () => {
        navigate("/signin");
    }

    return (
        <Box>
            <AppBar sx={{ backgroundColor: theme.whiteColor }} position='fixed' width='100%'>
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            sx={{ color: theme.blackColor, '&:hover': { color: theme.orangeColor, cursor: 'pointer' } }}
                            component="div"
                        >
                            TestVista
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                            {navLinks}
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '10px' }}>
                            <ButtonComp2 buttonTwo="Sign Up" click={goSignUp} />
                            <ButtonComp button="Sign In"click={goSignIn} />
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            sx={{ display: { xs: 'block', md: 'none' } }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon sx={{ color: theme.blackColor }} />
                        </IconButton>
                    </Toolbar>
                </Container>
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: theme.whiteColor,
                        padding: "10px 0",
                        p: 2,
                        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        gap: '10px'
                    }}
                >
                    <ButtonComp2 buttonTwo="Sign Up" click={goSignUp} />
                    <ButtonComp button="Sign In" click={goSignIn}/>
                </Box>
            </AppBar>




            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {['Home', 'About', 'Products', 'Contact'].map((text) => (
                            <ListItem button key={text}>
                                <NavLink
                                    to={`/${text.toLowerCase()}`}
                                    style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                                >
                                    {text}
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Navbar;
