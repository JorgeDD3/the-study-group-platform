type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageShell({ eyebrow, title, description }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-16 text-[#241f1a]">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a2b]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold">{title}</h1>
        <p className="mt-4 max-w-2xl text-[#5f574f]">{description}</p>
      </div>
    </main>
  );
}
