import React from "react";
import InfoLayout from "../shared/components/InfoLayout/InfoLayout";
import { Metadata } from "next";
import { MetadataBuilder } from "../shared/domain/helpers/metadata-builder";
import ProjectsContainer from "../shared/components/ProjectsContainer/ProjectsContainer";
import { PROJECTS } from "../components/Projects/domain/project";

export const metadata: Metadata = {
  title: MetadataBuilder.title("Projects"),
};

export default function Page() {
  return (
    <InfoLayout title="Projects & Contributions">
      <ProjectsContainer projects={PROJECTS} />
    </InfoLayout>
  );
}
