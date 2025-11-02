import { Metadata } from "next";
import Header from "./components/Header/Header";
import Links from "./components/Links/Links";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { MetadataBuilder } from "./shared/domain/helpers/metadata-builder";

export const metadata: Metadata = {
  title: MetadataBuilder.title("Portfolio"),
};

export default function Home() {
  return (
    <>
      <Header />
      <Links />
      <Projects />
      <Skills />
    </>
  );
}
