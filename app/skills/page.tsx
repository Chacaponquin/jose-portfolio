import React from "react";
import InfoLayout from "../shared/components/InfoLayout/InfoLayout";
import { Metadata } from "next";
import { MetadataBuilder } from "../shared/domain/helpers/metadata-builder";

export const metadata: Metadata = {
  title: MetadataBuilder.title("Skills"),
};

export default function Page() {
  return <InfoLayout title="Skills & Technologies"></InfoLayout>;
}
