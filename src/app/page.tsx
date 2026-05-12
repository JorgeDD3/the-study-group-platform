export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#241f1a]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <p className="text-lg font-semibold tracking-tight">
            The Study Group
          </p>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5f574f] sm:flex">
            <a href="#how-it-works" className="hover:text-[#241f1a]">
              How it works
            </a>
            <a href="#subjects" className="hover:text-[#241f1a]">
              Subjects
            </a>
            <a href="#contact" className="hover:text-[#241f1a]">
              Get started
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a2b]">
              Tutoring in Oxford, Mississippi
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Academic support built around students.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f574f]">
              The Study Group connects students with reliable tutoring,
              structured study sessions, and support that fits their classes,
              schedules, and goals.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#241f1a] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#3a332b]"
              >
                Get tutoring help
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-[#d8cbb8] px-6 py-3 text-center text-sm font-semibold text-[#241f1a] hover:bg-white"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e2d6c4] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a2b]">
              Simple process
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <h2 className="text-xl font-semibold">Tell us what you need</h2>
                <p className="mt-2 text-[#5f574f]">
                  Share the class, subject, and type of support you are looking
                  for.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Match with a tutor</h2>
                <p className="mt-2 text-[#5f574f]">
                  We help connect students with tutoring that fits their
                  academic needs.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Build a study rhythm</h2>
                <p className="mt-2 text-[#5f574f]">
                  Sessions are designed to keep students organized, prepared,
                  and confident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-y border-[#e2d6c4] bg-white px-6 py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a2b]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Tutoring that is easy to start.
            </h2>
          </div>

          <div>
            <h3 className="text-xl font-semibold">1. Request support</h3>
            <p className="mt-3 leading-7 text-[#5f574f]">
              Students or families tell us what class, subject, or exam they
              need help with.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">2. Start sessions</h3>
            <p className="mt-3 leading-7 text-[#5f574f]">
              We coordinate the next step and help students stay consistent with
              tutoring.
            </p>
          </div>
        </div>
      </section>

      <section id="subjects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a2b]">
            Subjects
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Support across core classes.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Math", "Science", "Business", "Writing"].map((subject) => (
              <div
                key={subject}
                className="rounded-2xl border border-[#e2d6c4] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{subject}</h3>
                <p className="mt-3 text-[#5f574f]">
                  One-on-one and small-group academic support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#241f1a] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9b98c]">
              Get started
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
              Ready to build a better study plan?
            </h2>
          </div>

          <a
            href="mailto:hello@thestudygroup.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#241f1a] hover:bg-[#f7f3ec]"
          >
            Contact The Study Group
          </a>
        </div>
      </section>
    </main>
  );
}
