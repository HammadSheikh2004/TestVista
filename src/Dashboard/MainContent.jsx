import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Cards from '../Components/ReuseableComp/Cards'

const MainContent = () => {
    return (
        <>
            <Container sx={{ ml: { xs: '30px', sm: '0px' }, }}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Cards title="Hello 1" textAlign="left" description="This is Card Component." btn="Click Here" />
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Cards title="Hello 1" textAlign="left" description="This is Card Component." btn="Click Here" />
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Cards title="Hello 1" textAlign="left" description="This is Card Component." btn="Click Here" />
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default MainContent