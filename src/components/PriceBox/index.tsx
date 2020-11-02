import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { RoomPrice } from 'types/room';
import Typo from '@material-ui/core/Typography';

import useUnit from '../../utils/useUnit';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: '#3a3138',
    padding: spacing(3),
    color: 'white',
    marginBottom: spacing(3),
  },
  price: {
    border: '1px solid white',
    padding: spacing(3),
    textAlign: 'center'
  },
}));

interface PriceBoxProps extends RoomPrice {
  className?: string;
}

const PriceBox: React.FC<PriceBoxProps> = ({ className, price, duration }) => {
  const classes = useStyles();
  const unit = useUnit();

  return (
    <div className={classes.root}>
      <div className={classes.price}>
        <Typo variant="h6">
          {price} {unit} / {duration}
        </Typo>
      </div>
    </div>
  );
};

export default PriceBox;
