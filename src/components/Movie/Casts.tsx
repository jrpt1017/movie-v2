import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Cast } from '../../types/movieTypes'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
interface ICasts {
  casts: Cast[],
}
const url = 'https://image.tmdb.org/t/p/w185';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    items: {
      position: 'relative',
      backgroundColor: 'black',
      '&:hover $imgTile': {
        opacity: 1,
      }
    },
    imgTile: {
      position: 'absolute',
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)', /* Black see-through */
      color: '#f1f1f1',
      width: '-webkit-fill-available',
      transition: '.5s ease',
      opacity: 0,
      padding: 20,
      textAlign: 'center',
      display: 'inherit',
      cursor: 'pointer',
    },
    container: {
      width: '90rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 24,
    },
    itemClass: {
      width: 220,
    },
  });
});

const responsive = {
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
};

const Casts: React.FC<ICasts> = ({ casts }: ICasts) => {

  const classes = useStyles();
  return (
    <>
      {casts && (<Carousel
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
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {casts.map((cast) => {
          return cast.profile_path !== null ? (
            <Box display="flex" className={classes.items}>
              <img src={`${url}${cast.profile_path}`} alt={cast.name} />
              <Box display="flex" className={classes.imgTile}>
                {`${cast.name} as ${cast.character}`}
              </Box>
            </Box>
          ) : null
        })}
      </Carousel>)}
    </>
  )
}

export default Casts;
