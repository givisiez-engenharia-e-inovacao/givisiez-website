import Image from 'next/image';
import { ProjectProps } from '../data.props';

export const ProjectDetails = ({
  title,
  cover,
  images,
  link,
  technologies,
  year,
  company,
  type,
  description,
}: ProjectProps) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto">
      <h1>{title}</h1>
      <div className="flex flex-row justify-center w-full overflow-hidden">
        <Image src={cover.src} alt={cover.alt} width={500} height={300} />
      </div>
      <span>Descrição: {description}</span>
      <span>Empresa: {company}</span>
      <span>Tipo: {type.join(', ')}</span>
      <span>
        Link:{' '}
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </span>
      <div>
        <span>Tecnologias: </span>
        {technologies.map((technology, index) => (
          <span key={index}>#{technology} </span>
        ))}
      </div>
      <span>Ano: {year}</span>
      <h2>Imagens</h2>
      {images.length > 0 ? (
        <div className="flex flex-row gap-4 flex-wrap">
          {images.map((image, index) => (
            <Image
              src={image.src}
              alt={image.alt}
              key={index}
              width={300}
              height={300}
              className="w-full h-full max-w-[400px] max-h-[400px] object-contain"
            />
          ))}
        </div>
      ) : (
        <span>Nenhuma imagem encontrada</span>
      )}
    </div>
  );
};
