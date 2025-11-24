import React from "react";
import InfoLayout from "../shared/components/InfoLayout/InfoLayout";
import AboutCard from "../components/AboutCard/AboutCard";
import { Metadata } from "next";
import { MetadataBuilder } from "../shared/domain/helpers/metadata-builder";
import Book from "../shared/icons/components/Book";
import Telescope from "../shared/icons/components/Telescope";
import Peoples from "../shared/icons/components/Peoples";

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
          icon={Book}
          title="My Studies"
          description="I'm a Computer Engineer specialized in backend development. My passion is designing scalable and efficient software architectures. I enjoy the challenge of transforming business logic into robust and well-structured code, creating solutions that not only solve the immediate problem but are also easy to maintain and scale in the future."
        />

        <AboutCard
          icon={Telescope}
          title="Curiosity & Hobbies"
          description="I’m a software developer who loves building clean and purposeful solutions. Outside of coding, I enjoy exploring new tech, creating small side projects, and diving into hobbies like gaming, photography, and electronic music. Always learning, experimenting, and trying to make things work better."
        />

        <AboutCard
          icon={Peoples}
          title="Collaboration"
          description="I believe that working with others is one of the best ways to learn. In school, I've had opportunities to participate in group activities and student bodies, which has been a valuable experience in teamwork and responsibility."
        />
      </div>
    </InfoLayout>
  );
}
