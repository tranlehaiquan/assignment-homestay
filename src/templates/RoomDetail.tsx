import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';

import Slider from '../components/Slider';
import PriceBox from '../components/PriceBox';
import RoomDetail from '../components/RoomDetail';
import RoomFacilities from '../components/RoomFacilities';
import Tags from '../components/Tags';
import Container from '../components/Container';
import Layout from '../components/Layout';
import DirectContact from '../components/DirectContact';
import Seo from '../components/seo';
import { Room } from '../types/room';
import clsx from 'clsx';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(5),
    paddingBottom: spacing(5),
  },
  details: {
    marginTop: spacing(5),
  },
  tags: {
    marginTop: spacing(2),
  },
  title: {
    marginBottom: spacing(2),
  },
  facilities: {
    marginBottom: spacing(2),
  },
  imgSlide: {
    marginBottom: spacing(1),
  },
}));

export default function RoomDetailPage({ pageContext }: { pageContext: Room }) {
  const classes = useStyles();
  const { images: roomImages, facilities, price } = pageContext;
  return (
    <Layout staticHeader>
      <Seo title={pageContext.name} />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className={classes.root}>
        <Container>
          <Typo variant="h4" component="h1" className={classes.title}>
            {pageContext.name}
          </Typo>
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              {roomImages.length && (
                <Slider>
                  {roomImages.map(imageItem => (
                    <img
                      key={imageItem.id}
                      src={`${imageItem.localImage.publicURL}`}
                      className={clsx('img-fluid', classes.imgSlide)}
                    />
                  ))}
                </Slider>
              )}
              <RoomFacilities
                facilities={facilities}
                className={classes.facilities}
              />
              <ReactMarkdown source={pageContext.description}></ReactMarkdown>
              <RoomDetail
                size={pageContext.size}
                bed={pageContext.bed}
                roomType={pageContext.roomType}
                guests={pageContext.guests}
                className={classes.details}
              />
              <Tags className={classes.tags} tags={pageContext.categories} />
            </Grid>
            <Grid item md={4}>
              <PriceBox {...price} />
              <DirectContact />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
}
