import { Box, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../ContextApi/Context'
import SearchComp from '../ReuseableComp/SearchComp';
import HomeBanner from "../../assets/Images/img1.webp";
import HomeBanner2 from '../ReuseableComp/HomeBanner2';
import HomeBanner3 from '../ReuseableComp/HomeBanner3';
import HomeBanner4 from '../ReuseableComp/HomeBanner4';

const Home = () => {
  const { theme } = useContext(Context);
  return (
    <>
      <Box sx={{ backgroundColor: theme.lightColor, height: 'auto' }}>
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <div style={{ marginTop: '170px' }}>
            <Typography sx={{ fontSize: '60px', margin: '0 auto', textAlign: 'center', maxWidth: '600px', lineHeight: '48px', fontWeight: 'bold' }}>
              SKILLS TESTS TO HIRE THE BEST
            </Typography>
            <Typography sx={{ fontSize: '17px', textAlign: 'center', marginTop: '10px' }}>
              Talent assessments that replace resumes with results.
            </Typography>
            <SearchComp />
            <img src={HomeBanner} width="100%" height="100%" style={{ marginBottom: '30px' }} alt="" />
          </div>
        </Container>
      </Box>
      <HomeBanner2 />
      <HomeBanner3 />
      <HomeBanner4 />
    </>
  )
}

export default Home