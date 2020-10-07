import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Room } from 'types/room';

import HomePageBanner from '../components/HomePageBanner';
import WelcomeSection from '../components/WelcomeSection';
import ServiceSection from '../components/ServiceSection';
import BestRoomSection from '../components/BestRoomSection';
import Layout from '../components/Layout';
import SEO from '../components/seo';

type DataType = {
  allStrapiRoom: {
    nodes: Room[];
  };
};

const IndexPage = () => {
  const data: DataType = useStaticQuery(graphql`
    query {
      allStrapiRoom {
        nodes {
          id
          summary
          name
          guests
          previewRemoteImage {
            childImageSharp {
              fluid (jpegQuality: 80, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <HomePageBanner />
      <WelcomeSection />
      <ServiceSection />
      <BestRoomSection rooms={data.allStrapiRoom.nodes} />
    </Layout>
  );
};

export default IndexPage;
