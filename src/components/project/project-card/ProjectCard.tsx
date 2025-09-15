import Image from 'next/image';
import { ProjectProps } from '../data.props';
import Link from 'next/link';

export const ProjectCard = ({ title, cover, subtitle, slug }: ProjectProps) => {
  return (
    <Link href={`/projetos/${slug}`}>
      <div className="flex flex-col gap-4 rounded-md w-full max-w-[300px] h-[350px] p-4 shadow-md bg-white">
        <div className="flex flex-row justify-center w-full h-[200px] overflow-hidden">
          {cover.src ? (
            <Image
              src={cover.src}
              alt={cover.alt}
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <Image
              src="/images/Image-not-found.jpg"
              alt="Image not found"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-md"
            />
          )}
        </div>
        <h1 className="text-lg font-bold">{title}</h1>
        <span className="text-gray-500">{subtitle}</span>
      </div>
    </Link>
  );
};
