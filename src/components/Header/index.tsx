import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'gatsby';
import clsx from 'clsx';

import NavLinks from '../NavLinks';
import Container from '../Container';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
  },
  staticHeader: {
    position: 'static',
    backgroundColor: '#0f172b',
  },
  logo: {
    maxWidth: 150,
  },
  logoLink: {
    display: 'block',
    flexBasis: 150,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

interface HeaderProps {
  staticHeader?: boolean;
}

const Header: React.FC<HeaderProps> = ({ staticHeader = false }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiSiteConfig {
        logo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, staticHeader && classes.staticHeader)}>
      <Container className={classes.header}>
        <Link to="/" className={classes.logoLink}>
          <Img
            className={classes.logo}
            fluid={data.strapiSiteConfig.logo.childImageSharp.fluid}
          />
        </Link>

        <div>
          <NavLinks />
        </div>
      </Container>
    </div>
  );
};

export default Header;
