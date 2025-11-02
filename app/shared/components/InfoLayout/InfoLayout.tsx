interface Props {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function InfoLayout({ description, title, children }: Props) {
  return (
    <div className="flex flex-col w-full">
      <header className="text-center mb-14">
        <h1 className="font-title-semibold! text-5xl mb-2 text-primary">
          {title}
        </h1>

        {description && (
          <p className="text-base text-gray-500">{description}</p>
        )}
      </header>

      {children}
    </div>
  );
}
