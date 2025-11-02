import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section className="flex flex-col w-full items-center text-center mb-20">
      <h2 className="font-title-semibold! text-2xl text-primary mb-8">
        {title}
      </h2>

      {children}
    </section>
  );
}
