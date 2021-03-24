import {
  Box, createStyles, Grid, GridList, makeStyles, Theme,
  Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions,
} from '@material-ui/core';
import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      width: '100%',
      height: 'auto',
    },
    container: {
      width: '90rem',
    },
    itemClass: {
      width: '8rem !important',
    },
    box: {
      gap: 2,
    },
  });
});
const url = 'https://image.tmdb.org/t/p/w185';

const images = [
  // '/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg',
  // '/v2daUrk7hZryH6vtCWK9ESf6gAG.jpg',
  // '/bzvi6adMl3zmzC7gWhS4cmO61S4.jpg',
  // '/r5yu8cnSaVA36j0CTSC8TjiYYE5.jpg',
  // '/aXbTKgL4u6oVumQ459B9VkGTn4A.jpg',
  // '/ukmfsl59Isvn9odgzMWBidA3cmt.jpg',
  '/bEd5FvgkrZloJ0Vb9A3ijEwEV5f.jpg'
];


const CarouselTest: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div style={{ margin: 40 }}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className={classes.container}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass={classes.itemClass}
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 6,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {images.map((img) => {
          return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  src={`${url}${img}`}
                  title="Contemplative Reptile"
                  classes={{
                    media: classes.media,
                  }}
                />
                <CardContent>
                  <Typography >
                    Tony Stark
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Robert Downey
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </Carousel>
    </div>
  )
}

export default CarouselTest;
