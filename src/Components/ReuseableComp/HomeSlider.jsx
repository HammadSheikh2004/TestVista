import { Box, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import Icon20 from "../../assets/Images/icon20.svg";
import Icon21 from "../../assets/Images/icon21.svg";
import Icon22 from "../../assets/Images/icon22.svg";
import Icon23 from "../../assets/Images/icon23.svg";
import Icon24 from "../../assets/Images/icon24.svg";
import Icon25 from "../../assets/Images/icon25.svg";
import Icon26 from "../../assets/Images/icon26.svg";
import Icon27 from "../../assets/Images/icon27.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ButtonComp2 from './ButtonComp2';
import "../../Helper/SliderBtnCss.css";

const HomeSlider = () => {
    const SliderData = [
        { image: Icon20, title: 'Programming', description: 'Level up your tech team recruitment with coding tests in 20+ languages, helping you identify top developer talent with ease.' },

        { image: Icon21, title: 'Cognitive ability', description: 'Uncover problem solving and critical thinking skills with tests to assess verbal and numerical understanding.' },

        { image: Icon22, title: 'Personality and culture', description: 'Gauge personality traits to match individuals to cultures where they will thrive, ensuring team compatibility and job satisfaction.' },

        { image: Icon23, title: 'Languages', description: 'Evaluate language proficiency for roles requiring linguistics skills and to ensure effective communication across global teams.' },

        { image: Icon24, title: 'Role specific', description: 'Tailor assessments to specific job roles, helping you spot candidates with the necessary skills and knowledge to excel in their positions.' },

        { image: Icon25, title: 'Situational judgment', description: 'Test decision making and problem solving in real-world scenarios, predicting how candidates handle workplace challenges.' },

        { image: Icon26, title: 'Software skills', description: 'Measure proficiency in essential software, from productivity tools to specialized applications, so you can pick job-ready candidates.' },

        { image: Icon27, title: 'Typing speed', description: 'Assess typing accuracy and speed, crucial for roles requiring fast and efficient data entry or content creation.' },
    ];
    const ButtonStyle = {
        width: '100%',
    }
    return (
        <>
            <Container sx={{margin:'40px 0px'}}>
                <Swiper
                    slidesPerView={3} loop={true} spaceBetween={30} breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {
                        SliderData.map((data, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index} className="hand-cursor">
                                        <Card sx={{ maxWidth: 345, padding: '10px', rounded:'10px' }}>
                                            <CardMedia
                                                sx={{ height: 140, width: 160, margin: '0 auto' }}
                                                image={data.image}
                                                title={data.title}
                                            />
                                            <CardContent>
                                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                                                    {data.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} color="text.secondary">
                                                    {data.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{width:'100%'}}>
                                                <ButtonComp2 buttonTwo="See More" classes="sliderBtn" />
                                            </CardActions>
                                        </Card>
                                    </SwiperSlide>
                                </>
                            )

                        })
                    }
                </Swiper>
            </Container>
        </>
    )
}

export default HomeSlider