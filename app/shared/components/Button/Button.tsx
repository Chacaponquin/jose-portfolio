import { IconComponent } from "../../icons/domain/icon-component";
import "./styles/style.css";

interface Props {
  children?: React.ReactNode;
  icon?: IconComponent;
}

export default function Button({ children, icon }: Props) {
  return (
    <button className="button text-sm flex gap-x-2 items-center">
      {icon && <i className="">{icon({ size: 18 })}</i>}

      <p className="font-title-medium!">{children}</p>
    </button>
  );
}
