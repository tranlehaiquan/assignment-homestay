import { useStaticQuery, graphql } from 'gatsby';

function useDescription() {
  const { strapiSiteConfig } = useStaticQuery(
    graphql`
      query {
        strapiSiteConfig {
          description
        }
      }
    `
  );
  return strapiSiteConfig.description;
}
export default useDescription;
