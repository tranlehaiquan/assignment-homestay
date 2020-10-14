import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Tag from '../Tag';

const useStyles = makeStyles(({ spacing }) => ({
  root: {},
  tag: {
    marginRight: spacing(1),
  },
}));

interface TagProps {
  tags: { name: string; id: string }[];
  className?: string;
}

const Tags: React.FC<TagProps> = ({ tags, className = '' }) => {
  const classes = useStyles();

  if(!tags.length) return null;

  return (
    <div className={className}>
      Tags:{' '}
      {tags.map(tag => (
        <Tag key={tag.id} className={classes.tag} name={tag.name} />
      ))}
    </div>
  );
};

export default Tags;
