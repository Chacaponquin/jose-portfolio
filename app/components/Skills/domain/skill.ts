import Docker from "@/app/shared/icons/components/Docker";
import Git from "@/app/shared/icons/components/Git";
import Nestjs from "@/app/shared/icons/components/Nestjs";
import Numpy from "@/app/shared/icons/components/Numpy";
import Pandas from "@/app/shared/icons/components/Pandas";
import Postgresql from "@/app/shared/icons/components/Postgresql";
import Python from "@/app/shared/icons/components/Python";
import React from "@/app/shared/icons/components/React";
import ScikitLearn from "@/app/shared/icons/components/ScikitLearn";
import Ts from "@/app/shared/icons/components/Ts";
import { IconComponent } from "@/app/shared/icons/domain/icon-component";

export interface Skill {
  name: string;
  image: IconComponent;
}

export const TOP_SKILLS: Skill[] = [
  { name: "TS / JS", image: Ts },
  { name: "React", image: React },
  { name: "Postgresql", image: Postgresql },
  { name: "Nestjs", image: Nestjs },
  { name: "Git", image: Git },
];

export const BOTTOM_SKILLS: Skill[] = [
  { name: "Python", image: Python },
  { name: "Docker", image: Docker },
  { name: "Pandas", image: Pandas },
  { name: "NumPy", image: Numpy },
  { name: "Scikit Learn", image: ScikitLearn },
];

export const CORE_LANGUAGES_SKILLS: Skill[] = [
  { name: "Python", image: Python },
  { name: "TS / JS", image: Ts },
  { name: "Git", image: Git },
];

export const WEB_SKILLS: Skill[] = [
  { name: "Docker", image: Docker },
  { name: "React", image: React },
  { name: "Postgresql", image: Postgresql },
  { name: "Nestjs", image: Nestjs },
  { name: "Pandas", image: Pandas },
  { name: "NumPy", image: Numpy },
  { name: "Scikit Learn", image: ScikitLearn },
];
