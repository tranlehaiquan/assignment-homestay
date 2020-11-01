import React from 'react';
import Typo from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Container from '../components/Container';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

const useStyles = makeStyles(({ spacing }) => ({
  root: {},
  banner: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    color: 'white',
    bottom: spacing(5),
  },
  content: {
    paddingTop: spacing(2),
  }
}));

export default function Page({ pageContext }) {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "valeriia" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1080, quality: 90, cropFocus: SOUTH, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout staticHeader>
      <div className={classes.banner}>
        <Img fluid={data.file.childImageSharp.fluid} />

        <Container>
          <Typo variant="h2" component="h1" className={classes.title}>
            {pageContext.name}
          </Typo>
        </Container>
      </div>
      <div className={classes.content}>
        <Container>
          <ReactMarkdown source={pageContext.description}></ReactMarkdown>
        </Container>
      </div>
    </Layout>
  );
}
