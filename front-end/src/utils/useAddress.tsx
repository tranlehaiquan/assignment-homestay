import { useStaticQuery, graphql } from 'gatsby';

function useAddress(): string {
  const { strapiSiteConfig } = useStaticQuery(
    graphql`
      query {
        strapiSiteConfig {
          address
        }
      }
    `
  );

  return strapiSiteConfig.address;
}
export default useAddress;
