import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Typography as Typo } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'hsl(0 0% 0% / 0.4)',
      zIndex: 3,
    },
  },
  description: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 10,
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  },
}));

const HomePageBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strapiSiteConfig {
        homePageBanner {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        description
      }
    }
  `);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Img fluid={data.strapiSiteConfig.homePageBanner.childImageSharp.fluid} />
      <div className={classes.description}>
        <Typo variant="h4">{data.strapiSiteConfig.title}</Typo>
        <br />
        <Typo>
          {data.strapiSiteConfig.description}
        </Typo>
      </div>
    </div>
  );
};

export default HomePageBanner;
