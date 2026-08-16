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
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { FUTURE_SERVICES, LIVE_SERVICES, SITE } from "@/lib/site";

const ICONS = {
  Code2,
  Sparkles,
  Presentation,
  GraduationCap,
  Brain,
  Dumbbell,
  BadgeCheck,
} as const;

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — What DeenLabs Is Building Next" },
      {
        name: "description",
        content:
          "The DeenLabs scale-up plan: AI productivity, business knowledge sessions, tech job preparation, personal growth, fitness transformation and personal branding.",
      },
      { property: "og:title", content: "Roadmap — What DeenLabs Is Building Next" },
      {
        property: "og:description",
        content:
          "AI productivity, business sessions, job prep, personal growth, fitness and personal branding — the DeenLabs ecosystem as it opens.",
      },
    ],
  }),
  component: Roadmap;
});

const PHASES = [
  {
    phase: "Phase 1",
    label: "Live now",
    items: ["Web development for clients"],
  },
  {
    phase: "Phase 2",
    label: "In build",
    items: ["AI for Productivity", "Personal Branding"],
  },
  {
    phase: "Phase 3",
    label: "Planned",
    items: ["Tech Job Preparation", "Business Knowledge Sessions"],
  },
  {
    phase: "Phase 4",
    label: "Vision",
    items: ["Psychology & Personal Growth", "Fitness Transformation"],
  },
];

function Roadmap() {
  return (
    <>
      <PageHero
        eyebrow="Scaling up"
        title={
          <>
            Building an <span className="text-gradient">ecosystem</span>, one service at a time.
          </>
        }
        description={`${SITE.name} started with web development. Everything below is part of the scale-up plan — released only when it's genuinely ready, never as an empty promise.`}
      >
        <Button asChild variant="signal" size="lg">
          <Link to="/contact">
            Get notified at launch <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Timeline" title="How the rollout is sequenced" />
        <div className="relative mt-12">
          <div
            className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px sm:block"
            style={{ background: "var(--gradient-signal)", opacity: 0.35 }}
            aria-hidden="true"
          />
          <ol className="space-y-6">
            {PHASES.map((p, i) => (
              <Reveal key={p.phase} delay={i * 90} as="li">
                <div className="flex gap-6">
                  <span className="mt-6 hidden size-8 shrink-0 place-items-center rounded-full border border-border bg-background text-xs font-semibold text-primary sm:grid">
                    {i + 1}
                  </span>
                  <div className="surface-card w-full p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold">{p.phase}</h3>
                      <span
                        className={`rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] ${
                          i === 0
                            ? "bg-primary/15 text-primary"
                            : "border border-border text-muted-foreground"
                        }`}
                      >
                        {p.label}
                      </span>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2.5">
                      {p.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 rounded-full border border-border bg-background/50 px-3.5 py-1.5 text-sm text-muted-foreground"
                        >
                          {i === 0 ? <Check className="size-3.5 text-primary" /> : null}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-surface/25">
        <SectionHeading
          eyebrow="Future services"
          title="What each one will actually include"
          description="These are the offerings being prepared. Web development remains the only service you can book today."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FUTURE_SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <Reveal key={s.slug} delay={i * 70}>
                <div className="surface-card h-full p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted-foreground">{s.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="surface-card flex flex-col items-start justify-between gap-6 p-9 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Need {LIVE_SERVICES[0].title.toLowerCase()} today?
              </h2>
              <p className="mt-2 text-muted-foreground">
                That part is live and taking projects right now.
              </p>
            </div>
            <Button asChild variant="signal" size="lg">
              <Link to="/services">View services</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
