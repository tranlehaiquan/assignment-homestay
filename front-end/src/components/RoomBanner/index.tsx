import React from 'react';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import bg from '../../images/default-bg.jpg';
import Container from '../Container';
import { SpaceBar } from '@material-ui/icons';

interface RoomBannerProps {
  title: string;
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    minHeight: 300,
    display: 'flex',
    alignItems: 'flex-end',
    color: 'white',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'none',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      opacity: 0.2,
    }
  },
  content: {
    position: 'relative',
    zIndex: 1,
    paddingBottom: spacing(2)
  }
}));

const RoomBanner: React.FC<RoomBannerProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typo className={classes.content} variant="h3" component="h1">{title}</Typo>
      </Container>
    </div>
  );
};

export default RoomBanner;
