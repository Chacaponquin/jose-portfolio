import { Project } from "@/app/components/Projects/domain/project";
import ProjectCard from "../ProjectCard/ProjectCard";

interface Props {
  projects: Project[];
}

export default function ProjectsContainer({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-5 gap-y-4">
      {projects.map((p, index) => (
        <ProjectCard
          key={index}
          link={p.link}
          title={p.title}
          description={p.description}
        />
      ))}
    </div>
  );
}
