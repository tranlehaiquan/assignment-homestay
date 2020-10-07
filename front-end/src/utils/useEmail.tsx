import { useStaticQuery, graphql } from 'gatsby';

function useEmail() {
  const {strapiSiteConfig} = useStaticQuery(
    graphql`
      query {
        strapiSiteConfig {
          email
        }
      }
    `
  );

  return strapiSiteConfig.email;
}
export default useEmail;
