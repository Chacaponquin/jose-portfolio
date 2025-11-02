import Github from "@/app/shared/icons/components/Github";
import Gmail from "@/app/shared/icons/components/Gmail";
import Linkedin from "@/app/shared/icons/components/Linkedin";

const skills = [
  {
    icon: Linkedin,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/jos%25C3%25A9-carlos-garc%25C3%25A",
  },
  {
    title: "Github",
    icon: Github,
    link: "https://github.com/JoseCarlosGarcia",
  },
  { title: "Mail", icon: Gmail, link: "mailto:josecgc1201@gmail.com" },
];

export default function Links() {
  return (
    <div className="flex flex-col gap-y-3 w-full mb-20">
      {skills.map((s, index) => (
        <a
          className="flex items-center rounded-lg shadow-lg justify-between bg-white gap-x-3 text-gray-700 fill-gray-700 px-7 py-5 border-[1.5px] border-transparent duration-200 transition-all hover:border-primary/50 hover:shadow-primary/20"
          href={s.link}
          key={index}
        >
          <i className="">{s.icon({ size: 25 })}</i>

          <p className="text-base font-title-medium!">{s.title}</p>

          <div></div>
        </a>
      ))}
    </div>
  );
}
