import React from 'react';
import Typo from '@material-ui/core/Typography';

import Container from '../components/Container';
import Layout from '../components/Layout';

export default function Page({ pageContext }) {
  return (
    <Layout staticHeader>
      <Container>
      <Typo variant="h4" component="h1">{pageContext.name}</Typo>
      <Typo variant="body1">{pageContext.description}</Typo>
      </Container>
    </Layout>
  );
}
