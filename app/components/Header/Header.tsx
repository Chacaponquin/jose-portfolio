import Image from "next/image";

const skills = [
  "Physics Enthusiast",
  "Student",
  "Open-Source Contributor",
].join("   .   ");

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center mb-12 text-center">
      <figure className="mb-8">
        <Image
          src="/profile.webp"
          alt="Jose profile"
          className="rounded-full w-36 h-36 object-top"
          width={160}
          height={160}
          loading="eager"
        />
      </figure>

      <h1 className="text-4xl mb-2.5 font-title-semibold!">
        Jose Carlos García Cruz
      </h1>

      <p className="text-gray-500 text-base">{skills}</p>
    </header>
  );
}
