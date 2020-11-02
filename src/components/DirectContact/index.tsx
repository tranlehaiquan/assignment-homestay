import React from 'react';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import useEmail from '../../utils/useEmail';
import usePhone from '../../utils/usePhone';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.grey[200],
    padding: spacing(3),
  },
  title: {
    marginBottom: spacing(1),
  },
}));

export default function DirectContext() {
  const classes = useStyles();
  const email = useEmail();
  const phone = usePhone();

  return (
    <div className={classes.root}>
      <Typo className={classes.title} variant="h6">DIRECT RESERVATION</Typo>
      <Typo>
        <a href={`tel: ${phone}`}>
          {phone}
        </a>
      </Typo>
      <Typo>
        <a href={`mailto: ${email}`}>
          {email}
        </a>
      </Typo>
    </div>
  );
}
