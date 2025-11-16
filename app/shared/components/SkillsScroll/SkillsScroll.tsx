import { Skill } from "@/app/components/Skills/domain/skill";
import Marquee from "react-fast-marquee";
import SkillCard from "../SkillCard/SkillCard";
import clsx from "clsx";

interface Props {
  className?: string;
  skills: Skill[];
  direction: "left" | "right";
}

export default function SkillsScroll({ skills, className, direction }: Props) {
  return (
    <Marquee
      className={clsx(className)}
      speed={35}
      pauseOnHover
      direction={direction}
      autoFill
      gradient
    >
      {skills.map((s, index) => (
        <SkillCard key={index} icon={s.image} name={s.name} />
      ))}
    </Marquee>
  );
}
