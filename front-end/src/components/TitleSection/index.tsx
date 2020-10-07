import React from 'react';
import Typo from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(({ spacing }) => ({
  title: {
    fontWeight: 600,
  },
}));

const TitleSection: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const classes = useStyles();
  return (
    <Typo variant="h4" className={clsx(className, classes.title)}>
      {children}
    </Typo>
  );
};

export default TitleSection;
