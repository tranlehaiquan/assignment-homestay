import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Container from '../Container';

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
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Typo className={classes.title}>Logo</Typo>
            <Typo className={classes.desc}>
              We always strive for growth and development as StylemixThemes. We
              don’t want to have a large team, we want to have a team that works
              in unity. Our slogan is “Every day is the last day”.
            </Typo>
          </Grid>
          <Grid item md={3}>
            <Typo className={classes.title}>GALLERY</Typo>
          </Grid>
          <Grid item md={3}>
            <Typo className={classes.title}>Contact us</Typo>
            <Typo className={classes.desc}>
              1010 Berkler avenue, Brooklyn, New York City, NY 10018 US <br />
              Tel.: +1 998 150 3020 <br />
              Fax.: +1 998 150 3020 <br />
              info@stylemixthemes.com
            </Typo>
          </Grid>
          <Grid item md={3}>
            <Typo className={classes.title}>Socials</Typo>

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
