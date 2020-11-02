import { useStaticQuery, graphql } from 'gatsby';

function useUnit() {
  const { strapiSiteConfig } = useStaticQuery(
    graphql`
      query {
        strapiSiteConfig {
          payUnit
        }
      }
    `
  );

  return strapiSiteConfig.payUnit;
}
export default useUnit;
