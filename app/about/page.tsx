import React from "react";
import InfoLayout from "../shared/components/InfoLayout/InfoLayout";
import AboutCard from "../components/AboutCard/AboutCard";
import Home from "../shared/icons/components/Home";
import { Metadata } from "next";
import { MetadataBuilder } from "../shared/domain/helpers/metadata-builder";

export const metadata: Metadata = {
  title: MetadataBuilder.title("About me"),
};

export default function Page() {
  return (
    <InfoLayout
      title="About Me"
      description="A little bit about my interests and journey."
    >
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-x-3 gap-y-4 justify-items-center">
        <AboutCard
          icon={Home}
          title="My Studies"
          description="I'm currently a high school student focusing on Physics, Chemistry, Math, and Biology (PCMB). I find the fundamental principles of science deeply fascinating and enjoy the process of learning how the world works."
        />

        <AboutCard
          icon={Home}
          title="Curiosity & Hobbies"
          description="Outside of my core subjects, I have a strong interest in electronics and how software and hardware can work together. For the past few years, I've enjoyed tinkering with Arduino and ESP boards, and I'm always trying to learn more about C, Python, and using tools like Git."
        />

        <AboutCard
          icon={Home}
          title="Collaboration"
          description="I believe that working with others is one of the best ways to learn. In school, I've had opportunities to participate in group activities and student bodies, which has been a valuable experience in teamwork and responsibility."
        />
      </div>
    </InfoLayout>
  );
}
