import { graphql, useStaticQuery } from 'gatsby';

interface Icon {
  width: number;
  tags: string[];
  paths: string[];
  isMulticolor2: boolean;
  isMulticolor: boolean;
  grid: number;
  defaultCode: number;
}

interface IcoMoonProps {
  icons: {
    icon: Icon;
    properties: {
      name: string;
    };
  }[];
}

const useIcoMoon = (): IcoMoonProps => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      strapiSiteConfig {
        icoMoon {
          icons {
            icon {
              width
              tags
              paths
              isMulticolor2
              isMulticolor
              grid
              defaultCode
            }
            properties {
              name
            }
          }
        }
      }
    }
  `);

  return data.strapiSiteConfig.icoMoon;
};

export default useIcoMoon;
