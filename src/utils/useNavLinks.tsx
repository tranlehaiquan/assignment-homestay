import { useStaticQuery, graphql } from 'gatsby';

function useNavLinks() {
  const data: {
    strapiSiteConfig: { navLinks: { label: string; value: string }[] };
  } = useStaticQuery(
    graphql`
      query {
        strapiSiteConfig {
          navLinks {
            label
            value
          }
        }
      }
    `
  );
  return data.strapiSiteConfig.navLinks;
}
export default useNavLinks;
