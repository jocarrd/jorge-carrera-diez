type TechTagProps = {
  children: string;
};

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}
