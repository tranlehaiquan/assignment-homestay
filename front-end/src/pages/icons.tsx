import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyle from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import { useStaticQuery, graphql } from 'gatsby';

import RoomFacilities from '../components/RoomFacilities';
import { Facilities } from '../types/room';
import Container from '../components/Container';
import Seo from '../components/seo';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import useIcoMoon from '../utils/useIcoMoon';

const useStyles = makeStyle(({ spacing, palette }) => ({
  root: {
    paddingTop: spacing(10),
    paddingBottom: spacing(10),
  },
  icon: {
    textAlign: 'center',
    padding: spacing(3),
  },
}));

export default function Icons() {
  const iconSet = useIcoMoon();
  const classes = useStyles();
  const { allStrapiFacility } = useStaticQuery(graphql`
    {
      allStrapiFacility {
        nodes {
          id
          icon
          name
          label
        }
      }
    }
  `);
  const facilities: Facilities = allStrapiFacility.nodes;

  return (
    <Layout staticHeader>
      <Seo title="Icons site" />
      <div className={classes.root}>
        <Container>
          <Grid container spacing={2}>
            {iconSet.icons.map(({ icon, properties }) => (
              <Grid item md={2} xs={6}>
                <div className={classes.icon} key={properties.name}>
                  <Icon icon={properties.name} size={30} />
                  <Typo>{properties.name}</Typo>
                </div>
              </Grid>
            ))}
          </Grid>
          <RoomFacilities facilities={facilities} />
        </Container>
      </div>
    </Layout>
  );
}
