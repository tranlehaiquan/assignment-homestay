import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import makeStyles from '@material-ui/core/styles/makeStyles';

import useNav from '../../utils/useNavLinks';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {

  },
  link: {
    padding: spacing(2, 1),
    textDecoration: 'none',
    color: palette.common.white,
  }
}));

export default function NavLinks() {
  const navs = useNav();
  const classes = useStyles();

  return (
    <div>
      {navs.map(({ label, value }) => (
        <Link underline='none' key={label} to={value} className={classes.link}>
          {label}
        </Link>
      ))}
    </div>
  );
}
