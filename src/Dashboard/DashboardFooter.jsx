import { Box, Typography } from '@mui/material'
import React from 'react'

const DashboardFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <Box sx={{ position: 'relative', height: '60vh' }}>
                {/* Other content */}
                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '30px 0px',
                    fontSize: { xs: '13px', md: '20px' },
                    position: 'absolute',
                    bottom: '0px',
                    width: '100%',
                    left: '0px',
                    textAlign: 'center'
                }}>
                    &copy; <Box component='span' sx={{ fontSize: { xs: '25px', md: '30px' }, color: 'black', margin: '0px 8px', fontWeight: 'bold' }}>TestVista</Box> {currentYear}. All right reserved.
                </Typography>
            </Box>

        </>
    )
}

export default DashboardFooter