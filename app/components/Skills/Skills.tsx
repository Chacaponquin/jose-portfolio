"use client";

import Section from "@/app/shared/components/Section/Section";
import { BOTTOM_SKILLS, TOP_SKILLS } from "./domain/skill";
import SkillsScroll from "@/app/shared/components/SkillsScroll/SkillsScroll";

export default function Skills() {
  return (
    <Section title="Skills & Technologies">
      <SkillsScroll className="mb-7" skills={TOP_SKILLS} direction="left" />

      <SkillsScroll skills={BOTTOM_SKILLS} direction="right" />
    </Section>
  );
}
