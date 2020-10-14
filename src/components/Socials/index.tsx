import React from 'react';
import makeStyle from '@material-ui/core/styles/makeStyles';
import Link from '@material-ui/core/Link';
import { graphql, useStaticQuery } from 'gatsby';

import Icon from '../Icon';

const useStyles = makeStyle(({ palette, spacing }) => ({
  root: {},
  icon: {
    fill: palette.common.white,
    marginRight: spacing(1),
  },
}));

interface SocialsProps {
  facebook?: string;
  instagram?: string;
}

const Socials: React.FC<SocialsProps> = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      strapiSiteConfig {
        facebook
        instagram
      }
    }
  `);
  const { facebook, instagram } = data.strapiSiteConfig;

  return (
    <div className={classes.root}>
      {facebook && (
        <Link href={facebook}>
          <Icon size={20} className={classes.icon} icon="facebook" />
        </Link>
      )}
      {instagram && (
        <Link href={instagram}>
          <Icon size={20} className={classes.icon} icon="instagram" />
        </Link>
      )}
    </div>
  );
};

export default Socials;
