import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';

import Icon from '../Icon';
import clsx from 'clsx';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    backgroundColor: palette.common.white,
    padding: spacing(2, 1),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: spacing(1),
  },
  name: {
    fontSize: 12,
  }
}));

interface RoomFacilityProps {
  name: string;
  icon: string;
  className?: string;
}

const RoomFacility: React.FC<RoomFacilityProps> = ({ name, icon, className }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Icon icon={icon} size={35} className={classes.icon} />
      <Typo className={classes.name}>{name}</Typo>
    </div>
  )
}

export default RoomFacility;