import Image from 'next/image';
import { ProjectProps } from '../data.props';

export const ProjectDetails = ({ title, cover, images, link, technologies, year, company, type, description }: ProjectProps) => {
    return (
        <div className='flex flex-col gap-4'>
            <h1>{title}</h1>
            <Image src={cover.src} alt={cover.alt} width={500} height={300} />
            <span>Descrição: {description}</span>
            <span>Empresa: {company}</span>
            <span>Tipo: {type}</span>
            <span>Link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></span>
            <div>
                <h2>Tecnologias</h2>
                {technologies.map((technology, index) => (
                    <span key={index}>{technology}, </span>
                ))}
            </div>
            <span>{year}</span>
            {images.length > 0 && (
                <div>
                    <h2>Imagens</h2>
                    {images.map((image, index) => (
                        <Image src={image.src} alt={image.alt} key={index} width={500} height={300} />
                    ))}
                </div>
            )}
        </div>
    )
}