import { useStaticQuery, graphql } from 'gatsby';

function useEmail() {
  const { strapiSiteConfig } = useStaticQuery(
    graphql`
      query {
        strapiSiteConfig {
          phone
        }
      }
    `
  );

  return strapiSiteConfig.phone;
}
export default useEmail;
