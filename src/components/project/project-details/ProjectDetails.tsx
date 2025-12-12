import Image from 'next/image';
import Link from 'next/link';
import { ProjectProps } from '../data.props';
import { privacyPolicyData } from '../privacy-policy/privacyPolicy.data';

export const ProjectDetails = ({
  title,
  slug,
  cover,
  link,
  technologies,
  year,
  company,
  type,
  subtitle,
  generalDescription,
  challenges,
  solutions,
  results,
  images,
  deleteAccountUrl,
}: ProjectProps) => {
  const hasPrivacyPolicy = privacyPolicyData.some(
    policy => policy.title === title
  );
  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold py-4">{title}</h1>
      <span className="text-gray-500">{subtitle}</span>
      <h2 className="text-2xl font-bold">Visão geral</h2>
      <p>{generalDescription}</p>
      <span>Empresa: {company}</span>
      <span>Tipo: {type.join(', ')}</span>
      <span>
        Link:{' '}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        ) : (
          'Sem link disponível, projeto privado'
        )}
      </span>
      <div>
        <span>Tecnologias: </span>
        {technologies.map((technology, index) => (
          <span key={index}>#{technology} </span>
        ))}
      </div>
      <span>Ano: {year}</span>
      {challenges && (
        <>
          <h2 className="text-2xl font-bold">Desafios</h2>
          <p>{challenges}</p>
        </>
      )}
      {solutions && (
        <>
          <h2 className="text-2xl font-bold">Soluções</h2>
          <p>{solutions}</p>
        </>
      )}
      <div className="flex flex-row justify-center w-full overflow-hidden">
        <Image
          src={cover.src ? cover.src : '/images/Image-not-found.jpg'}
          alt={cover.alt}
          width={500}
          height={300}
        />
      </div>
      {images && (
        <div className="flex flex-row justify-center w-full overflow-hidden">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
            />
          ))}
        </div>
      )}
      {results && (
        <>
          <h2 className="text-2xl font-bold">Resultados</h2>
          <p>{results}</p>
        </>
      )}
      {hasPrivacyPolicy && (
        <>
          <h2 className="text-2xl font-bold">Política de privacidade</h2>
          <Link
            href={`/projetos/${slug}/politica-de-privacidade`}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Ver política de privacidade completa
          </Link>
        </>
      )}
      {deleteAccountUrl && (
        <div>
          <Link
            href={deleteAccountUrl}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Excluir Conta
          </Link>
        </div>
      )}
    </div>
  );
};
