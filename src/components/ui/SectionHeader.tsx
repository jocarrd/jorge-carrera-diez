type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeader({ title, text }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-300">{text}</p> : null}
    </div>
  );
}
