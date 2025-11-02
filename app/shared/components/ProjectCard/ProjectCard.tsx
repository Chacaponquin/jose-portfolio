import GithubOne from "../../icons/components/GithubOne";
import Button from "../Button/Button";

interface Props {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <article className="flex flex-col rounded-lg shadow-lg w-full bg-white px-6 py-4 text-left">
      <div className="flex flex-col grow mb-5">
        <h3 className="mb-1 text-xl font-title-semibold! text-primary">
          {title}
        </h3>

        <span className="text-sm leading-6">{description}</span>
      </div>

      <a href={link}>
        <div className="flex justify-end w-full">
          <Button icon={GithubOne}>Ver en Github</Button>
        </div>
      </a>
    </article>
  );
}
