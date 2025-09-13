import ProjectList from "@/components/project/project-list";
import { projectsContent } from "../../components/project/data";
import Header from "@/components/header";

export default function Projects() {
  return (
    <>
      <Header />
      <div className="w-full max-w-7xl mx-auto">
        <h1>Projetos</h1>
          <ProjectList projects={projectsContent} />
      </div>
    </>
  );
}