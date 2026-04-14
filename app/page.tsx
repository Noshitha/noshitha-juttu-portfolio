import { siteContent } from "../data/siteContent";

const sectionClass =
  "mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10";

function SectionHeader({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`font-mono text-sm font-semibold uppercase tracking-[0.18em] ${
          inverted ? "text-[#72e3aa]" : "text-[#13795b]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
          inverted ? "text-white" : "text-[#171914]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            inverted ? "text-[#c7d0c6]" : "text-[#555d52]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ButtonLink({
  href,
  children,
  variant = "secondary",
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  tone?: "light" | "dark";
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#16a46f] focus:ring-offset-2";
  const styles =
    tone === "dark"
      ? variant === "primary"
        ? "bg-white text-[#171914] hover:bg-[#e8efe8]"
        : "border border-[#546052] bg-transparent text-white hover:border-[#72e3aa] hover:text-[#72e3aa]"
      : variant === "primary"
        ? "bg-[#171914] text-white hover:bg-[#2b3028]"
        : "border border-[#cfd8ce] bg-white/80 text-[#171914] hover:border-[#16a46f] hover:text-[#0f6b4f]";

  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-lg border border-[#dce4dc] bg-white p-6 shadow-[0_18px_50px_rgba(23,25,20,0.06)] ${className}`}
    >
      {children}
    </article>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          className="rounded-lg border border-[#dce4dc] bg-[#f2f6f2] px-3 py-1 text-xs font-medium text-[#425043]"
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const navCta = siteContent.ctaLinks[siteContent.ctaLinks.length - 1];
  const chronologicalExperience = [...siteContent.experience].reverse();

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-[#dfe7df] bg-[#f7f8f5]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
          <a
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfd8ce] bg-white/80 text-sm font-semibold tracking-tight text-[#171914]"
            href="#top"
            aria-label="Back to top"
          >
            NJ
          </a>
          <div className="hidden items-center gap-5 md:flex">
            {siteContent.navItems.map((item) => (
              <a
                className="text-sm font-medium text-[#555d52] transition hover:text-[#13795b]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            className="rounded-lg bg-[#171914] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2b3028]"
            href={navCta.href}
          >
            {navCta.label}
          </a>
        </nav>
      </header>

      <section
        className="relative isolate flex min-h-[86svh] items-end overflow-hidden"
        id="top"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('${siteContent.heroImage}')`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(247,248,245,0.96),rgba(247,248,245,0.84)_42%,rgba(247,248,245,0.34))]"
        />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-[#13795b]">
              {siteContent.role}
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight text-[#171914] sm:text-6xl lg:text-7xl">
              {siteContent.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#30362e]">
              {siteContent.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#555d52] sm:text-lg">
              {siteContent.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {siteContent.ctaLinks.map((link) => (
                <ButtonLink
                  href={link.href}
                  key={link.label}
                  variant={link.variant === "primary" ? "primary" : "secondary"}
                >
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>
          <div className="flex items-end lg:justify-end">
            <div className="w-full max-w-md space-y-4">
              <div className="ml-auto flex max-w-sm items-center gap-4 rounded-lg border border-white/70 bg-white/70 p-4 shadow-[0_18px_60px_rgba(23,25,20,0.1)] backdrop-blur">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-[#dce4dc] bg-[#e7eee6]">
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-[#13795b]">
                    NJ
                  </div>
                  <div
                    aria-label={`${siteContent.name} profile image`}
                    role="img"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${siteContent.profileImage}')`,
                    }}
                  />
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#13795b]">
                    Based in
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-[#171914]">
                    {siteContent.location}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#555d52]">
                    AI systems, retrieval, and data infrastructure.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg border border-white/60 bg-white/75 p-5 shadow-[0_24px_80px_rgba(23,25,20,0.12)] backdrop-blur">
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#13795b]">
                  {siteContent.heroFocusLabel}
                </p>
                <Tags items={siteContent.focusAreas} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClass} id="about">
        <SectionHeader
          eyebrow={siteContent.about.eyebrow}
          title={siteContent.about.title}
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5 text-lg leading-8 text-[#444c42]">
            {siteContent.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {siteContent.about.stats.map((stat) => (
              <div
                className="rounded-lg border border-[#dce4dc] bg-white p-5"
                key={stat.label}
              >
                <p className="text-sm font-medium text-[#6a7367]">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfe7df] bg-[#eef5ef]" id="experience">
        <div className={sectionClass}>
          <SectionHeader
            eyebrow={siteContent.sections.experience.eyebrow}
            title={siteContent.sections.experience.title}
            description={siteContent.sections.experience.description}
          />
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-[#bfd0bf] md:block"
            />
            <div className="space-y-6">
              {chronologicalExperience.map((item, index) => (
                <article
                  className="relative grid gap-4 rounded-lg border border-[#dce4dc] bg-white/80 p-5 shadow-[0_18px_50px_rgba(23,25,20,0.045)] md:grid-cols-[9rem_1fr] md:border-0 md:bg-transparent md:p-0 md:shadow-none"
                  key={`${item.role}-${item.company}-${item.details || index}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#b8c9b8] bg-[#eef5ef] md:flex">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#16a46f]" />
                    </span>
                    <p className="font-mono text-sm font-semibold text-[#13795b] md:pt-1">
                      {item.period}
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#dce4dc] bg-white p-6 shadow-[0_18px_50px_rgba(23,25,20,0.06)]">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-[#13795b]">{item.company}</p>
                        {item.details ? (
                          <p className="mt-1 text-sm leading-6 text-[#6a7367]">
                            {item.details}
                          </p>
                        ) : null}
                      </div>
                      <p className="rounded-lg border border-[#dce4dc] bg-[#f2f6f2] px-3 py-1 font-mono text-xs font-semibold text-[#425043]">
                        {index === 0
                          ? "Start"
                          : index === chronologicalExperience.length - 1
                            ? "Recent"
                            : "Step"}
                      </p>
                    </div>
                    <p className="mt-5 leading-7 text-[#555d52]">
                      {item.description}
                    </p>
                    <ul className="mt-5 grid gap-3 lg:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <li
                          className="flex gap-3 text-sm leading-6 text-[#444c42]"
                          key={highlight}
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16a46f]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClass} id="projects">
        <SectionHeader
          eyebrow={siteContent.sections.projects.eyebrow}
          title={siteContent.sections.projects.title}
          description={siteContent.sections.projects.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.projects.map((project) => (
            <Card className="flex min-h-[320px] flex-col" key={project.title}>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#13795b]">
                {project.type}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-[#555d52]">
                {project.description}
              </p>
              <div className="mt-5">
                <Tags items={project.tags} />
              </div>
              <a
                className="mt-6 text-sm font-semibold text-[#0f6b4f] hover:text-[#171914]"
                href={project.link}
              >
                {siteContent.sections.projects.linkLabel}
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="border-y border-[#dfe7df] bg-white"
        id="hackathons"
      >
        <div className={sectionClass}>
          <SectionHeader
            eyebrow={siteContent.sections.hackathons.eyebrow}
            title={siteContent.sections.hackathons.title}
            description={siteContent.sections.hackathons.description}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {siteContent.hackathons.map((build) => (
              <article
                className="flex min-h-[420px] flex-col rounded-lg border border-[#c9d9c8] bg-[#f7faf7] p-6 shadow-[0_18px_50px_rgba(23,25,20,0.055)]"
                key={build.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#13795b]">
                    {build.type}
                  </p>
                  <p className="rounded-lg border border-[#c9d9c8] bg-white px-3 py-1 font-mono text-xs font-semibold text-[#425043]">
                    {build.buildTime}
                  </p>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {build.title}
                </h3>
                <dl className="mt-5 space-y-3 border-y border-[#dce4dc] py-4">
                  <div>
                    <dt className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#6a7367]">
                      Hackathon
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-[#30362e]">
                      {build.hackathon}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#6a7367]">
                      Theme
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[#444c42]">
                      {build.theme}
                    </dd>
                  </div>
                </dl>
                <p className="mt-5 flex-1 leading-7 text-[#555d52]">
                  {build.description}
                </p>
                <div className="mt-5">
                  <Tags items={build.tags} />
                </div>
                <a
                  className="mt-6 inline-flex text-sm font-semibold text-[#0f6b4f] hover:text-[#171914]"
                  href={build.link}
                >
                  {siteContent.sections.hackathons.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#dfe7df] bg-white"
        id="publications"
      >
        <div className={sectionClass}>
          <SectionHeader
            eyebrow={siteContent.sections.publications.eyebrow}
            title={siteContent.sections.publications.title}
            description={siteContent.sections.publications.description}
          />
          <div className="grid gap-5 md:grid-cols-2">
            {siteContent.publications.map((publication) => (
              <Card key={publication.title}>
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {publication.title}
                  </h3>
                  <p className="font-mono text-sm text-[#6a7367]">
                    {publication.year}
                  </p>
                </div>
                <p className="mt-2 text-[#13795b]">{publication.venue}</p>
                <p className="mt-4 leading-7 text-[#555d52]">
                  {publication.description}
                </p>
                <a
                  className="mt-5 inline-flex text-sm font-semibold text-[#0f6b4f] hover:text-[#171914]"
                  href={publication.link}
                >
                  {siteContent.sections.publications.linkLabel}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass} id="tech-stack">
        <SectionHeader
          eyebrow={siteContent.sections.techStack.eyebrow}
          title={siteContent.sections.techStack.title}
          description={siteContent.sections.techStack.description}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(siteContent.techStack).map(([group, items]) => (
            <Card key={group}>
              <h3 className="capitalize text-lg font-semibold tracking-tight">
                {group}
              </h3>
              <div className="mt-5">
                <Tags items={items} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#171914] text-white" id="contact">
        <div className={sectionClass}>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <SectionHeader
              eyebrow={siteContent.sections.contact.eyebrow}
              title={siteContent.contact.title}
              description={siteContent.contact.description}
              inverted
            />
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {siteContent.ctaLinks.map((link) => (
                <ButtonLink
                  href={link.href}
                  key={link.label}
                  variant={link.variant === "primary" ? "primary" : "secondary"}
                  tone="dark"
                >
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2c312a] bg-[#171914] px-6 py-6 text-sm text-[#c7d0c6] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Portfolio</p>
          <p>{siteContent.location}</p>
        </div>
      </footer>
    </main>
  );
}
