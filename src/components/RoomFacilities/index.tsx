import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

import { Facilities } from '../../types/room';
import useFacilities from '../../utils/useFacilities';
import RoomFacility from './RoomFacility';
import clsx from 'clsx';

interface RoomFacilitiesProps {
  facilities: Facilities;
  className?: string;
}

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.grey[200],
    padding: spacing(2),
  },
  fancility: {
    height: '100%',
  },
}));

const RoomFacilities: React.FC<RoomFacilitiesProps> = ({ className, facilities }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Grid container spacing={2}>
        {facilities.map(({ label, icon }) => (
          <Grid item md={2} xs={6} key={label}>
            <RoomFacility
              className={classes.fancility}
              icon={icon}
              name={label}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RoomFacilities;
