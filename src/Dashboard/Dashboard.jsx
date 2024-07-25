import React from 'react'
import SideBar from './SideBar'
import { Box, Container } from '@mui/material'
import MainContent from './MainContent'
import DashboardFooter from './DashboardFooter'

const Dashboard = () => {
    return (
        <>
            <SideBar />
            <Container sx={{ marginTop: '80px' }}>
                <Box>
                    <MainContent />
                    <DashboardFooter />
                </Box>
            </Container>

        </>
    )
}

export default Dashboard