import { IconComponent } from "@/app/shared/icons/domain/icon-component";

interface Props {
  icon: IconComponent;
  title: string;
  description: string;
}

export default function AboutCard({ description, icon, title }: Props) {
  return (
    <article className="w-full max-w-[360px] px-7 py-5 bg-white rounded-lg flex flex-col shadow-lg items-center text-center transition-all duration-300 hover:shadow-primary/20">
      <i className="p-3.5 rounded-full bg-primary/20 stroke-primary flex justify-center items-center mb-6">
        {icon({ size: 32 })}
      </i>

      <h2 className="font-title-semibold! text-2xl mb-2 text-primary">
        {title}
      </h2>

      <p className="text-sm leading-6 text-gray-600 mb-6">{description}</p>
    </article>
  );
}
