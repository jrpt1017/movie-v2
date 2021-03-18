import { Box, createStyles, Grid, GridList, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      width: '90rem',
      // height: '10rem',
    },
    itemClass: {
      width: 220,
    },
    box: {
      gap: 2,
    },
  });
});
const url = 'https://image.tmdb.org/t/p/w185';

const images = [
  '/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg',
  '/v2daUrk7hZryH6vtCWK9ESf6gAG.jpg',
  '/bzvi6adMl3zmzC7gWhS4cmO61S4.jpg',
  '/r5yu8cnSaVA36j0CTSC8TjiYYE5.jpg',
  '/aXbTKgL4u6oVumQ459B9VkGTn4A.jpg',
  '/ukmfsl59Isvn9odgzMWBidA3cmt.jpg',
  '/bEd5FvgkrZloJ0Vb9A3ijEwEV5f.jpg'
];


const CarouselTest: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div>
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
            <Box display="flex" className={classes.box} key={img}>
              <img src={`${url}${img}`} alt={img} />
            </Box>
          )
        })}
      </Carousel>
    </div>
  )
}

export default CarouselTest;
