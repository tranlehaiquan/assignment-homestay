import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid, Typography as Typo } from '@material-ui/core';

import TitleSection from '../TitleSection';
import Container from '../Container';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(5),
    paddingBottom: spacing(5),
  },
  wrapper: {
    alignItems: 'center',
  }
}));

export default function WelcomeSection() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container>
        <Grid container spacing={2} className={classes.wrapper}>
          <Grid item md={12} lg={4}>
            <TitleSection>Enjoy Your Stay in Our Hotel</TitleSection>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Typo>
              Elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit,
            </Typo>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Typo>
              Elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Typo>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
