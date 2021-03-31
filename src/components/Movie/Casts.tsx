import { Box, createStyles, makeStyles, Theme, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
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
    root: {
      maxWidth: 345,
    },
    media: {
      width: '100%',
      height: 'auto',
    },
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
      width: '80rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 24,
    },
    itemClass: {
      width: '8rem !important',
    },
    cardContent: {
      height: '4rem',
      backgroundColor: '#2a2a2a',
    },
    characterNameText: {
      fontWeight: 'bold',
    },
    sliderClass: {
      gap: '10px',
    },
    castText: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: 'white'
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
      min: 500,
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
        sliderClass={classes.sliderClass}
        slidesToSlide={1}
        swipeable
      >
        {casts.map((cast) => {
          return cast.profile_path !== null ? (
            <React.Fragment key={cast.id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={cast.name}
                    height="140"
                    src={`${url}${cast.profile_path}`}
                    title={cast.name}
                    classes={{
                      media: classes.media,
                    }}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className={`${classes.castText} ${classes.characterNameText}`}>
                      {cast.character}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.castText}>
                      {cast.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </React.Fragment>
          ) : null
        })}
      </Carousel>)}
    </>
  )
}

export default Casts;
