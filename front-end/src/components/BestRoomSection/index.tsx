import { Room } from 'types/room';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import ItemRoom from '../ItemRoom';
import Container from '../Container';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(5, 0),
  },
  img: {
    width: '100%',
  },
  item: {
    height: '100%',
  },
}));

interface BestRoomSectionProps {
  rooms: Room[];
}

const BestRoomSection: React.FC<BestRoomSectionProps> = ({ rooms }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          {rooms.map(room => (
            <Grid item md={4} xs={12} key={room.id}>
              <ItemRoom className={classes.item} {...room} key={room.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default BestRoomSection;
