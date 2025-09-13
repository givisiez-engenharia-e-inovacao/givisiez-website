import { StaticImageData } from "next/image";

export interface ProjectProps {
    title: string;
    slug: string;
    company: string;
    description: string;
    cover: ImageProjectProps;
    images: ImageProjectProps[];
    link: string;
    type: string[];
    technologies: string[];
    year: number;
}

export interface ImageProjectProps {
    src: string | StaticImageData;
    alt: string;
}
