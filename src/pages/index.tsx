import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Room } from 'types/room';

import HomePageBanner from '../components/HomePageBanner';
import SpecialRoom from '../components/SpecialRoom';
import WelcomeSection from '../components/WelcomeSection';
import ServiceSection from '../components/ServiceSection';
import BestRoomSection from '../components/BestRoomSection';
import Layout from '../components/Layout';
import SEO from '../components/seo';

type DataType = {
  allStrapiRoom: {
    nodes: Room[];
  };
  strapiRoom: Room;
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
          isSpecial
          preview {
            childImageSharp {
              fluid(jpegQuality: 80, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      strapiRoom(isSpecial: { eq: true }) {
        id
        name
        preview {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  `);
  const specialRoom = data.strapiRoom;

  return (
    <Layout>
      <SEO title="Home" />
      <HomePageBanner />
      <WelcomeSection />
      {specialRoom && <SpecialRoom {...specialRoom} />}
      <ServiceSection />
      <BestRoomSection rooms={data.allStrapiRoom.nodes} />
    </Layout>
  );
};

export default IndexPage;
