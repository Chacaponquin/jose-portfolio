import { IconComponent } from "../../icons/domain/icon-component";

interface Props {
  name: string;
  icon: IconComponent;
}

export default function SkillCard({ name, icon }: Props) {
  return (
    <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl px-9 pb-3 pt-4 flex flex-col items-center text-center justify-center ml-4">
      <i className="mb-3">{icon({ size: 36 })}</i>

      <p className="text-base font-title-semibold!">{name}</p>
    </div>
  );
}
