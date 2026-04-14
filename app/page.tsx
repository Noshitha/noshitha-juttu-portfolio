import { siteContent } from "../data/siteContent";
import { ExperienceLogo } from "./ExperienceLogo";

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
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  tone?: "light" | "dark";
  ariaLabel?: string;
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
    <a className={`${base} ${styles}`} href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

function SocialIcon({ icon }: { icon?: string }) {
  const baseProps = {
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  if (icon === "github") {
    return (
      <svg {...baseProps}>
        <path d="M9 19c-4.2 1.4-4.2-2.1-6-2.5" />
        <path d="M15 22v-3.4a3 3 0 0 0-.8-2.3c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.4 4.5 4.5 0 0 0-.1-3.4s-1-.3-3.5 1.3a12.1 12.1 0 0 0-6.2 0C6.4 3 5.4 3.3 5.4 3.3a4.5 4.5 0 0 0-.1 3.4A4.8 4.8 0 0 0 4 10.1c0 4.8 2.9 5.9 5.7 6.2a3 3 0 0 0-.7 2.1V22" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.86-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.33V8.98h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.53V8.98H7.1v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  if (icon === "email") {
    return (
      <svg {...baseProps}>
        <path d="M4 6h16v12H4z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    );
  }

  if (icon === "resume") {
    return (
      <svg {...baseProps}>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M9.5 13h5" />
        <path d="M9.5 17h5" />
      </svg>
    );
  }

  if (icon === "huggingface") {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="12" cy="12" r="8.5" fill="#ffcc4d" />
        <path
          d="M7.5 9.4c.6-.8 1.6-1.3 2.6-1.3M13.9 8.1c1 0 2 .5 2.6 1.3"
          stroke="#171914"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
        <path
          d="M9.2 12.2c.5.4 1.1.6 1.8.6s1.3-.2 1.8-.6c.5.4 1.1.6 1.8.6s1.3-.2 1.8-.6"
          stroke="#171914"
          strokeLinecap="round"
          strokeWidth="1.35"
        />
        <path
          d="M6.4 12.6c-1.5.2-2.4 1-2.2 2 .3 1.1 1.7 1.4 3.2.7M17.6 12.6c1.5.2 2.4 1 2.2 2-.3 1.1-1.7 1.4-3.2.7"
          stroke="#171914"
          strokeLinecap="round"
          strokeWidth="1.25"
        />
      </svg>
    );
  }

  if (icon === "scholar") {
    return (
      <svg {...baseProps}>
        <path d="m3 8.5 9-4 9 4-9 4-9-4Z" />
        <path d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" />
        <path d="M21 8.5v5" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1" />
    </svg>
  );
}

function ProfileAvatar({
  image,
  name,
  className = "h-14 w-14",
}: {
  image?: string;
  name: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-lg border border-[#d2ded1] bg-[#e8efe8] ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#13795b]">
        {initials}
      </div>
      {image ? (
        <div
          aria-label={`${name} profile image`}
          role="img"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      ) : null}
    </div>
  );
}

function IconLink({
  href,
  label,
  icon,
  compact = false,
  tone = "light",
}: {
  href: string;
  label: string;
  icon?: string;
  compact?: boolean;
  tone?: "light" | "dark";
}) {
  const toneClass =
    tone === "dark"
      ? "border-white/20 bg-white/5 text-white hover:border-[#72e3aa] hover:text-[#72e3aa]"
      : "border-[#d4ded3] bg-white/75 text-[#30362e] hover:border-[#16a46f] hover:text-[#0f6b4f]";

  return (
    <a
      className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg border text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#16a46f] ${
        compact ? "w-10" : "px-3"
      } ${toneClass}`}
      href={href}
      aria-label={label}
    >
      <SocialIcon icon={icon} />
      {compact ? (
        <span className="sr-only">{label}</span>
      ) : (
        <span>{label}</span>
      )}
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
  const resumeCta = siteContent.ctaLinks.find((link) => link.icon === "resume");
  const socialLinks = siteContent.ctaLinks.filter(
    (link) => link.icon !== "resume",
  );
  const leftRailLinks = siteContent.ctaLinks.filter((link) =>
    ["linkedin", "email"].includes(link.icon),
  );
  const experienceItems = siteContent.experience;

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-[#dfe7df] bg-[#f7f8f5]/90 backdrop-blur lg:hidden">
        <nav className="flex items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <a
            className="flex min-w-0 items-center gap-3"
            href="#top"
            aria-label="Back to top"
          >
            <ProfileAvatar
              image={siteContent.profileImage}
              name={siteContent.name}
              className="h-10 w-10"
            />
            <span className="max-w-[48vw] truncate text-sm font-semibold tracking-tight text-[#171914]">
              {siteContent.name}
            </span>
          </a>
          {resumeCta ? (
            <a
              className="rounded-lg bg-[#171914] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2b3028]"
              href={resumeCta.href}
            >
              {resumeCta.label}
            </a>
          ) : null}
        </nav>
      </header>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 overflow-y-auto border-r border-[#dfe7df] bg-[#f7f8f5]/95 px-7 py-7 backdrop-blur lg:flex lg:flex-col">
        <a
          className="group flex items-center gap-3 rounded-lg p-1 transition hover:bg-white/70"
          href="#top"
          aria-label="Back to top"
        >
          <ProfileAvatar
            image={siteContent.profileImage}
            name={siteContent.name}
          />
          <span>
            <span className="block text-base font-semibold leading-tight tracking-tight text-[#171914]">
              {siteContent.name}
            </span>
            <span className="mt-1.5 block text-[13px] leading-5 text-[#555d52]">
              {siteContent.shortRole}
            </span>
          </span>
        </a>
        <nav
          className="mt-9 border-t border-[#dfe7df] pt-5"
          aria-label="Primary"
        >
          <div className="flex flex-col gap-1">
            {siteContent.navItems.map((item) => (
              <a
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#555d52] transition hover:bg-white hover:text-[#13795b]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="mt-auto rounded-lg border border-[#dfe7df] bg-white/55 p-4">
          <p className="text-sm font-semibold tracking-tight text-[#171914]">
            Based in {siteContent.locationShort}
          </p>
          <p className="mt-1.5 text-sm leading-5 text-[#6a7367]">
            {siteContent.availabilityShort}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {leftRailLinks.map((link) => (
              <IconLink
                compact
                href={link.href}
                icon={link.icon}
                key={link.label}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
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
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-24 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#13795b] sm:text-sm">
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
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {resumeCta ? (
                  <ButtonLink
                    href={resumeCta.href}
                    variant="primary"
                    ariaLabel={resumeCta.label}
                  >
                    <span className="mr-2">
                      <SocialIcon icon={resumeCta.icon} />
                    </span>
                    {resumeCta.label}
                  </ButtonLink>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <IconLink
                      href={link.href}
                      icon={link.icon}
                      key={link.label}
                      label={link.label}
                      compact
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-end lg:justify-end">
              <div className="w-full max-w-md space-y-4">
                <div className="ml-auto flex max-w-sm items-center gap-4 rounded-lg border border-white/70 bg-white/78 p-4 shadow-[0_18px_60px_rgba(23,25,20,0.09)] backdrop-blur">
                  <ProfileAvatar
                    image={siteContent.profileImage}
                    name={siteContent.name}
                    className="h-24 w-24"
                  />
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#13795b]">
                      Based in
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-[#171914]">
                      {siteContent.location}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#555d52]">
                      {siteContent.availability}
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

      <section
        className="border-y border-[#dfe7df] bg-[#eef5ef]"
        id="experience"
      >
        <div className={sectionClass}>
          <SectionHeader
            eyebrow={siteContent.sections.experience.eyebrow}
            title={siteContent.sections.experience.title}
            description={siteContent.sections.experience.description}
          />
          <div className="grid gap-4">
            {experienceItems.map((item, index) => {
              const visibleHighlights = item.highlights.slice(0, 2);

              return (
                <article
                  className="rounded-lg border border-[#dce4dc] bg-white p-5 shadow-[0_18px_50px_rgba(23,25,20,0.055)] transition hover:border-[#c7d5c7] sm:p-6"
                  key={`${item.period}-${item.company}-${item.project}`}
                >
                  <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
                    <div className="min-w-0">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <ExperienceLogo
                          company={item.company}
                          logo={item.logo}
                        />
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="text-xl font-semibold tracking-tight text-[#171914]">
                              {item.role}
                            </h3>
                            {index === 0 ? (
                              <span className="rounded-lg border border-[#b9d9c5] bg-[#eef8f1] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#13795b]">
                                Current
                              </span>
                            ) : null}
                            {item.company === "Deloitte USI" ? (
                              <span className="rounded-lg border border-[#cfd8ce] bg-[#f2f6f2] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#425043]">
                                Deloitte path
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-1 font-medium text-[#13795b]">
                            {item.company}
                          </p>
                          {item.details ? (
                            <p className="mt-1 text-sm leading-6 text-[#6a7367]">
                              {item.details}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <p className="mt-4 leading-7 text-[#555d52]">
                        {item.description}
                      </p>
                      <ul className="mt-4 grid gap-2.5 xl:grid-cols-2">
                        {visibleHighlights.map((highlight) => (
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
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="rounded-lg border border-[#dce4dc] bg-[#f7faf7] px-4 py-3">
                        <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7367]">
                          Period
                        </p>
                        <p className="mt-1 font-mono text-sm font-semibold text-[#13795b]">
                          {item.period}
                        </p>
                      </div>
                      {item.project ? (
                        <div className="rounded-lg border border-[#dce4dc] bg-[#f7faf7] px-4 py-3">
                          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7367]">
                            Initiative
                          </p>
                          <p className="mt-1 text-sm font-semibold leading-6 tracking-tight text-[#30362e]">
                            {item.project}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
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
                className="flex min-h-[440px] flex-col rounded-lg border border-[#c9d9c8] bg-[#f7faf7] p-6 shadow-[0_18px_50px_rgba(23,25,20,0.055)]"
                key={build.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#13795b]">
                      {build.hackathon}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#6a7367]">
                      {build.type}
                    </p>
                  </div>
                  <p className="rounded-lg border border-[#c9d9c8] bg-white px-3 py-1 font-mono text-xs font-semibold text-[#425043]">
                    {build.buildTime}
                  </p>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {build.title}
                </h3>
                <div className="mt-5 rounded-lg border border-[#dce4dc] bg-white px-4 py-3">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#6a7367]">
                    Theme
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#30362e]">
                    {build.theme}
                  </p>
                </div>
                <p className="mt-5 flex-1 leading-7 text-[#555d52]">
                  {build.description}
                </p>
                {"insights" in build && build.insights ? (
                  <ul className="mt-4 grid gap-2">
                    {build.insights.slice(0, 3).map((insight) => (
                      <li
                        className="flex gap-2.5 text-sm leading-6 text-[#444c42]"
                        key={insight}
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16a46f]" />
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-5">
                  <Tags items={build.tags} />
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {"links" in build && build.links
                    ? build.links.map((link) => (
                        <a
                          className="inline-flex text-sm font-semibold text-[#0f6b4f] hover:text-[#171914]"
                          href={link.href}
                          key={link.href}
                        >
                          {link.label}
                        </a>
                      ))
                    : (
                        <a
                          className="inline-flex text-sm font-semibold text-[#0f6b4f] hover:text-[#171914]"
                          href={build.link}
                        >
                          {siteContent.sections.hackathons.linkLabel}
                        </a>
                      )}
                </div>
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
              {resumeCta ? (
                <ButtonLink
                  href={resumeCta.href}
                  variant="primary"
                  tone="dark"
                  ariaLabel={resumeCta.label}
                >
                  <span className="mr-2">
                    <SocialIcon icon={resumeCta.icon} />
                  </span>
                  {resumeCta.label}
                </ButtonLink>
              ) : null}
              {socialLinks.map((link) => (
                <IconLink
                  href={link.href}
                  icon={link.icon}
                  key={link.label}
                  label={link.label}
                  tone="dark"
                />
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
      </div>
    </main>
  );
}
