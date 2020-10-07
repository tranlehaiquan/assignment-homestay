import React from 'react';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(({ spacing, palette }) => ({
  tag: {
    border: '1px solid ' + palette.grey[200],
    padding: spacing(0.5, 1),
    borderRadius: spacing(2),
    display: 'inline-block',
  },
}));

const Tag: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const classes = useStyles();

  return (
    <Typo className={clsx(classes.tag, className)} component="span">
      {name}
    </Typo>
  );
};

export default Tag;
