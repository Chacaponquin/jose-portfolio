import React from "react";
import InfoLayout from "../shared/components/InfoLayout/InfoLayout";
import { Metadata } from "next";
import { MetadataBuilder } from "../shared/domain/helpers/metadata-builder";
import Section from "../shared/components/Section/Section";
import Translate from "../shared/icons/components/Translate";
import Code from "../shared/icons/components/Code";
import SkillsScroll from "../shared/components/SkillsScroll/SkillsScroll";
import {
  CORE_LANGUAGES_SKILLS,
  WEB_SKILLS,
} from "../components/Skills/domain/skill";

export const metadata: Metadata = {
  title: MetadataBuilder.title("Skills"),
};

export default function Page() {
  return (
    <InfoLayout title="Skills & Technologies">
      <Section
        title="Core languages"
        description="The foundational languages I use for problem-solving and building projects."
        icon={Translate}
      >
        <SkillsScroll direction="left" skills={CORE_LANGUAGES_SKILLS} />
      </Section>

      <Section
        icon={Code}
        title="Web & AI Technologies"
        description="Technologies I use for web projects, data analysis, and AI."
      >
        <SkillsScroll direction="right" skills={WEB_SKILLS} />
      </Section>
    </InfoLayout>
  );
}
