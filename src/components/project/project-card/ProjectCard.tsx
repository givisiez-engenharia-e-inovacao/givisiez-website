import Image from 'next/image';
import { ProjectProps } from '../data.props';

export const ProjectCard = ({ title, cover, description }: ProjectProps) => {
    return (
        <div className='flex flex-col gap-4 rounded-md border-2 border-gray-300 w-full max-w-[300px] h-[350px] p-4'>
            <div className='flex flex-row justify-center w-full h-[200px] overflow-hidden'>
                {cover.src ? <Image src={cover.src} alt={cover.alt} width={300} height={200} className='w-full h-full object-cover rounded-md' /> : <Image src="/images/Image-not-found.jpg" alt='Image not found' width={300} height={200} className='w-full h-full object-cover rounded-md' />}
            </div>
            <h1>{title}</h1>
            <span>{description}</span>
        </div>
    )
}