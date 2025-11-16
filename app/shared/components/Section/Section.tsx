import React from "react";
import { IconComponent } from "../../icons/domain/icon-component";

interface Props {
  title: string;
  description?: string;
  icon?: IconComponent;
  children?: React.ReactNode;
}

export default function Section({ title, children, description, icon }: Props) {
  return (
    <section className="flex flex-col w-full items-center text-center mb-20">
      <div className="w-full flex flex-col mb-8 items-center">
        {icon && (
          <i className="rounded-full border border-primary flex justify-center items-center w-[42px] h-[42px] stroke-primary bg-primary/10 mb-3">
            {icon({ size: 26 })}
          </i>
        )}

        <h2 className="font-title-semibold! text-2xl text-primary">{title}</h2>

        {description && (
          <p className="mt-2 text-gray-500 text-sm">{description}</p>
        )}
      </div>

      {children}
    </section>
  );
}
