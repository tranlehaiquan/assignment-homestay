import { Typography } from '@material-ui/core';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface RoomDetailProps {
  guests: number;
  size: number;
  bed: number;
  roomType: string;
  className?: string;
}

const useStyles = makeStyles(({ spacing }) => ({
  title: {
    marginBottom: spacing(1),
  },
  detail: {
    borderBottom: '1px solid black',
    paddingTop: spacing(1.5),
    paddingBottom: spacing(1.5),
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const RoomDetail: React.FC<RoomDetailProps> = ({
  guests,
  size,
  bed,
  roomType,
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={className}>
      <Typography className={classes.title}>ROOM DETAILS</Typography>
      <div>
        <div className={classes.detail}>
          Guests: <strong>{guests}</strong>
        </div>
        <div className={classes.detail}>
          Room Size: <strong>{size} (m2)</strong>
        </div>
        <div className={classes.detail}>
          Bed(s): <strong>{bed}</strong>
        </div>
        <div className={classes.detail}>
          Room Type: <strong>{roomType}</strong>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
