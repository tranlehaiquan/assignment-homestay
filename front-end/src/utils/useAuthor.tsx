import { useStaticQuery, graphql } from 'gatsby';

function useAuthor() {
  const { strapiSiteConfig } = useStaticQuery(
    graphql`
      query {
        strapiSiteConfig {
          id
          author
          description
          email
          phone
          title
          navLinks {
            label
            value
          }
        }
      }
    `
  );
  return strapiSiteConfig.author;
}
export default useAuthor;
