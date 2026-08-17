import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Presentation,
  GraduationCap,
  Brain,
  Dumbbell,
  BadgeCheck,
  UserRound,
  Radio,
  Cpu,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { SITE, LIVE_SERVICES, FUTURE_SERVICES, TRUST_POINTS, PROCESS } from "@/lib/site";
import { Testimonials } from "@/components/Testimonials";
import heroBg from "@/assets/hero-bg.jpg";
import founderAsset from "@/assets/founder.png.asset.json";

const founder = founderAsset.url;

const ICONS = {
  Code2,
  Sparkles,
  Presentation,
  GraduationCap,
  Brain,
  Dumbbell,
  BadgeCheck,
  UserRound,
  Radio,
  Cpu,
  MessagesSquare,
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DeenLabs — Web Development & Digital Growth Agency" },
      {
        name: "description",
        content:
          "DeenLabs is a technology-focused digital agency by Deenesh Kumar, building modern websites and web apps for students, creators, startups and businesses.",
      },
      { property: "og:title", content: "DeenLabs — Web Development & Digital Growth Agency" },
      {
        property: "og:description",
        content:
          "Modern websites and web apps for students, creators, startups and businesses. Founder-led, fast and built to grow.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-30"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--background) 55%, transparent), var(--background) 88%)",
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden="true" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <Eyebrow>Web development · Open for projects</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.03] sm:text-6xl md:text-[4.2rem]">
                Turning ideas into <span className="text-gradient">digital products</span> and
                opportunities.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {SITE.name} is a technology-focused digital agency founded by {SITE.founder}. We help
                students, creators, startups and businesses build a digital presence with modern
                technology and practical solutions.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild variant="signal" size="lg">
                  <Link to="/contact">
                    Start a project <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7">
                {[
                  { k: "Founder-led", v: "1:1" },
                  { k: "Avg. landing page", v: "3–5 days" },
                  { k: "Services in build", v: "6+" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                      {s.v}
                    </dt>
                    <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.k}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-6 rounded-[2.5rem] opacity-30 blur-3xl animate-pulse-glow"
              style={{ background: "var(--gradient-signal)" }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface animate-float-slow">
              <img
                src={founder}
                alt={`${SITE.founder}, founder of ${SITE.name}`}
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-border bg-background/80 p-4 backdrop-blur-xl">
                <p className="font-display text-base font-semibold">{SITE.founder}</p>
                <p className="text-xs text-muted-foreground">Founder · Developer · Creator</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-surface/40 py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-10">
              {[
                "React & TypeScript",
                "Responsive by default",
                "SEO ready",
                "Fast load times",
                "Modern UI/UX",
                "Web apps & dashboards",
                "Personal branding",
              ].map((t) => (
                <span
                  key={`${dup}-${t}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Who we are"
          title={
            <>
              A small studio with a <span className="text-gradient">long-term mission</span>.
            </>
          }
          description="DeenLabs exists to make good technology accessible to people who are just getting started — and to those scaling something serious."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { label: "Mission", body: SITE.mission },
            { label: "Vision", body: SITE.vision },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="surface-card h-full p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {item.label}
                </p>
                <p className="mt-4 font-display text-xl leading-snug sm:text-2xl">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-8">
          <Button asChild variant="outline">
            <Link to="/about">
              More about DeenLabs <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Section className="bg-surface/25">
        <SectionHeading
          eyebrow="What we do"
          title="Services that are live today"
          description="One service, done properly. Everything else is on the roadmap and opening in phases."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {LIVE_SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <Reveal key={s.slug}>
                <div className="surface-card h-full p-8 sm:p-10">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.summary}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="signal" className="mt-8">
                    <Link to="/contact">Get a quote</Link>
                  </Button>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={120}>
            <div className="surface-card h-full p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Coming next
              </p>
              <h3 className="mt-4 text-2xl font-semibold">Six more services in build</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                AI productivity, business sessions, job prep, personal growth, fitness and personal
                branding — each one opening as it's ready.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {FUTURE_SERVICES.map((s) => {
                  const Icon = ICONS[s.icon as keyof typeof ICONS];
                  return (
                    <li
                      key={s.slug}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm transition-colors hover:border-primary/40"
                    >
                      <Icon className="size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{s.title}</span>
                    </li>
                  );
                })}
              </ul>
              <Button asChild variant="outline" className="mt-8">
                <Link to="/roadmap">
                  See the roadmap <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why trust us"
          title="No agency theatre. Just work you can verify."
          description="You can watch how we think and build before you ever send a message."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TRUST_POINTS.map((t, i) => {
            const Icon = ICONS[t.icon as keyof typeof ICONS];
            return (
              <Reveal key={t.title} delay={i * 80}>
                <div className="surface-card h-full p-7">
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-surface/25">
        <SectionHeading eyebrow="How it works" title="A simple four-step process" />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 90} as="li">
              <div className="surface-card h-full p-7">
                <span className="font-display text-3xl font-bold text-gradient">{p.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Testimonials />

      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border p-10 text-center sm:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{ background: "var(--gradient-signal)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Have an idea? Let's turn it into something real.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us what you're building. You'll get an honest answer on scope, timeline and
                whether it's worth doing.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="signal" size="lg">
                  <Link to="/contact">
                    Contact DeenLabs <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`mailto:${SITE.email}`}>Email directly</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
