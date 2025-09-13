import ProjectCard from "../project-card"
import { ProjectProps } from "../data.props"

export const ProjectList = ({ projects }: { projects: ProjectProps[] }) => {
    return (
        <div className="flex flex-row flex-wrap gap-4">
            {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
            ))}
        </div>
    )
}