import { StaticImageData } from 'next/image';

export interface ProjectProps {
  title: string;
  slug: string;
  company: string;
  subtitle: string;
  generalDescription: string;
  challenges?: string;
  solutions?: string;
  results?: string;
  cover: ImageProjectProps;
  link?: string;
  type: string[];
  technologies: string[];
  year: number;
}

export interface ImageProjectProps {
  src: string | StaticImageData;
  alt: string;
}
