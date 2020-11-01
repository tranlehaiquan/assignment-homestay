import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import Socials from '../Socials';
import usePhone from '../../utils/usePhone';
import useEmail from '../../utils/useEmail';
import useAddress from '../../utils/useAddress';
import Container from '../Container';
import clsx from 'clsx';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    padding: spacing(5, 0),
    backgroundColor: palette.common.black,
  },
  title: {
    color: palette.common.white,
    marginBottom: spacing(3),
  },
  desc: {
    color: palette.grey[300],
  },
  copyRight: {
    color: palette.common.white,
    textAlign: 'center',
  },
  logo: {
    maxWidth: 150,
  },
  linkColor: {},
}));

function Footer() {
  const classes = useStyles();
  const phone = usePhone();
  const mail = useEmail();
  const address = useAddress();
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

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Img
              className={clsx(classes.logo, classes.title)}
              fluid={data.strapiSiteConfig.logo.childImageSharp.fluid}
            />
            <Typo className={classes.desc}>
              We always strive for growth and development as StylemixThemes. We
              don’t want to have a large team, we want to have a team that works
              in unity. Our slogan is “Every day is the last day”.
            </Typo>
          </Grid>
          <Grid item md={3}>
            <Typo className={classes.title}>Contact us</Typo>
            <Typo className={classes.desc}>
              Address: {address} <br />
              Tel.: <Link href={`tel:${phone}`}>{phone}</Link>
              <br />
              Mail: <Link href={`mailto:${mail}`}>{mail}</Link>
            </Typo>
          </Grid>

          <Grid item md={3}></Grid>
          <Grid item md={3}>
            <Typo className={classes.title}>Socials</Typo>
            <Socials facebook="123" instagram="123" />
          </Grid>
          <Grid item xs={12}>
            <Typo className={classes.copyRight}>Copy Right @Quan Tran</Typo>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
