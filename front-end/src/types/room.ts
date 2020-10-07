import { FixedObject, FluidObject } from 'gatsby-image';

export interface Room {
  id: string;
  description: string;
  summary: string;
  size: number;
  bed: number;
  roomType: string;
  name: string;
  isSpecial: boolean;
  guests: number;
  previewRemoteImage: {
    childImageSharp: {
      fluid: FluidObject;
      fixed: FixedObject;
    };
  };
  categories: {
    id: string;
    name: string;
  }[];
  images: ImageRoom[];
}

type ImageRoom = {
  id: string;
  formats: {
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
  };
};

interface ImageFormat {
  id: string;
  publicURL: string;
}
