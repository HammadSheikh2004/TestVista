import { Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import ButtonComp2 from './ButtonComp2';
import "../../Helper/SliderBtnCss.css";

const Cards = ({ image, title, description, btn }) => {
    return (
        <>
            <Container>

                <Card sx={{ maxWidth: 345, padding: '10px', borderRadius: '10px' }}>
                    <CardMedia
                        sx={{ height: 140, width: 160, margin: '0 auto' }}
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%' }}>
                        <ButtonComp2 buttonTwo={btn} classes="sliderBtn" />
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}

export default Cards
