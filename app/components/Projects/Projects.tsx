import ProjectsContainer from "@/app/shared/components/ProjectsContainer/ProjectsContainer";
import Section from "@/app/shared/components/Section/Section";
import React from "react";
import { PROJECTS } from "./domain/project";

export default function Projects() {
  return (
    <Section title="Featured Projects">
      <ProjectsContainer projects={PROJECTS} />
    </Section>
  );
}
