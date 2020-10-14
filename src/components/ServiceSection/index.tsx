import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

import Icon from '../Icon';
import Container from '../Container';

const useStyle = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.grey[200],
    paddingBottom: spacing(5),
    paddingTop: spacing(5),
  },
  serviceItem: {
    display: 'flex',
  },
  icon: {
    flex: '0 0 70px',
    paddingRight: spacing(2),
    paddingTop: spacing(1.5),
  }
}));

export default function ServiceSection() {
  const classes = useStyle();

  return (
    <section className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <div className={classes.serviceItem}>
              <Icon icon="wifi_ouline" className={classes.icon} />
              <div>
                <Typo variant="h6">Enjoy free Wi-Fi</Typo>
                <Typo>
                  We believe that when a hotel advertises free WiFi, they should
                  provide travelers with a fast and reliable connection.
                </Typo>
              </div>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.serviceItem}>
              <Icon icon="serving4" className={classes.icon} />
              <div>
                <Typo variant="h6">Concierge service</Typo>
                <Typo>
                  Top-tier hotels have a lot to recommend them: luxurious spas,
                  twice-daily room service and superb on-site restaurants.
                </Typo>
              </div>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.serviceItem}>
              <Icon icon="pool" className={classes.icon} />
              <div>
                <Typo variant="h6">Pool access</Typo>
                <Typo>
                  Hotel has pool room, in particular, hotels based in big cities
                  might require keycard access to get into the pool. Spa, and
                  amenity access.
                </Typo>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
