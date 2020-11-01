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
  preview: {
    childImageSharp: {
      fluid: FluidObject;
      fixed: FixedObject;
    };
  };
  facilities: Facilities;
  categories: {
    id: string;
    name: string;
  }[];
  images: ImageRoom[];
}

export default Room;

type ImageRoom = {
  id: string;
  formats: {
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
  };
  url: string;
  localImage: ImageFormat;
};

export type Facility = {
  icon: string;
  label: string;
  id: number;
  name: string;
};

export type Facilities = {
  icon: string;
  label: string;
  id: number;
  name: string;
}[];

interface ImageFormat {
  id: string;
  publicURL: string;
}
