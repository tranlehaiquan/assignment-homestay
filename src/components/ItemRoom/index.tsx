import React from 'react';
import Img from 'gatsby-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import Typo from '@material-ui/core/Typography';
import { Room } from 'types/room';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Link } from 'gatsby';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    border: '1px solid ' + palette.grey[300],
    position: 'relative',
  },
  description: {
    padding: spacing(2),
  },
  guests: {
    display: 'flex',
  },
  iconGuest: {
    marginRight: spacing(1),
  },
  link: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  }
}));

interface RoomItemProps extends Room {
  className?: string;
}

const RoomItem: React.FC<RoomItemProps> = ({
  preview,
  name,
  summary,
  className = '',
  guests,
  id,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Img
        fluid={{
          ...preview.childImageSharp.fluid,
          aspectRatio: 1.4,
        }}
      />
      <div className={classes.description}>
        <Typo variant="h6">{name}</Typo>
        <Typo variant="subtitle1" className={classes.guests}>
          <PeopleOutlineIcon className={classes.iconGuest} /> Max guests{' '}
          {guests}
        </Typo>
        <Typo variant="body2">{summary}</Typo>
      </div>
      <Link to={`/room/${id}`} className={classes.link} title={name}>
      </Link>
    </div>
  );
};

export default RoomItem;
