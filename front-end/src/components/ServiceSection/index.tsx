import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

import Container from '../Container';

const useStyle = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.grey[200],
    paddingBottom: spacing(5),
    paddingTop: spacing(5),
  },
}));

export default function ServiceSection() {
  const classes = useStyle();

  return (
    <section className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Typo variant="h6">Enjoy free Wi-Fi</Typo>
            <Typo>
              We believe that when a hotel advertises free WiFi, they should
              provide travelers with a fast and reliable connection.
            </Typo>
          </Grid>
          <Grid item sm={4}>
            <Typo variant="h6">Concierge service</Typo>
            <Typo>
              Top-tier hotels have a lot to recommend them: luxurious spas,
              twice-daily room service and superb on-site restaurants.
            </Typo>
          </Grid>
          <Grid item sm={4}>
            <Typo variant="h6">Pool access</Typo>
            <Typo>
              Hotel has pool room, in particular, hotels based in big cities
              might require keycard access to get into the pool. Spa, and
              amenity access.
            </Typo>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
