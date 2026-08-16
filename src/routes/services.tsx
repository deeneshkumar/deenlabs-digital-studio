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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { LIVE_SERVICES, FUTURE_SERVICES, PROCESS, FAQS } from "@/lib/site";

const ICONS = {
  Code2,
  Sparkles,
  Presentation,
  GraduationCap,
  Brain,
  Dumbbell,
  BadgeCheck,
} as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Development by DeenLabs" },
      {
        name: "description",
        content:
          "DeenLabs builds modern websites, portfolios, landing pages and web apps. See what's live today and what's coming as we scale.",
      },
      { property: "og:title", content: "Services — Web Development by DeenLabs" },
      {
        property: "og:description",
        content:
          "Websites, portfolios, landing pages and web apps built with modern technology — plus the services opening next.",
      },
    ],
  }),
  component: Services,
});

const PACKAGES = [
  {
    name: "Landing Page",
    for: "Creators, freelancers, product launches",
    includes: [
      "Single high-converting page",
      "Custom design & animations",
      "Mobile-first responsive build",
      "Contact form & social links",
      "Basic SEO setup",
    ],
    timeline: "3–5 days",
    featured: false,
  },
  {
    name: "Business Website",
    for: "Small businesses & startups",
    includes: [
      "4–7 page custom website",
      "Design system & brand styling",
      "Blog or gallery section",
      "SEO, analytics & performance pass",
      "Deployment + 2 weeks support",
    ],
    timeline: "1.5–3 weeks",
    featured: true,
  },
  {
    name: "Web Application",
    for: "Startups & internal tools",
    includes: [
      "Auth, database & dashboards",
      "Custom business logic",
      "Admin panel & user roles",
      "Scalable modern architecture",
      "Handover & documentation",
    ],
    timeline: "3+ weeks",
    featured: false,
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we provide"
        title={
          <>
            Web development today. An <span className="text-gradient">ecosystem</span> next.
          </>
        }
        description="We keep the offer narrow on purpose. Web development is what we deliver right now, and it gets our full attention. The rest is being built and will open in phases."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="signal" size="lg">
            <Link to="/contact">Request a quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/roadmap">Upcoming services</Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Live now" title="Web Development" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {LIVE_SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <Reveal key={s.slug} className="md:col-span-2">
                <div className="surface-card grid gap-8 p-8 sm:p-10 md:grid-cols-2">
                  <div>
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{s.summary}</p>
                  </div>
                  <ul className="grid content-center gap-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
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

      <Section className="bg-surface/25">
        <SectionHeading
          eyebrow="Engagements"
          title="Pick the scope that fits"
          description="Pricing depends on scope and is quoted after a short call. No hidden add-ons."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`surface-card flex h-full flex-col p-8 ${p.featured ? "glow-ring border-primary/40" : ""}`}
              >
                {p.featured ? (
                  <span className="mb-4 w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                    Most requested
                  </span>
                ) : null}
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.for}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{inc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  Typical timeline: <span className="text-foreground">{p.timeline}</span>
                </p>
                <Button
                  asChild
                  variant={p.featured ? "signal" : "outline"}
                  className="mt-5 w-full"
                >
                  <Link to="/contact">Enquire</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="How a project runs" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 90}>
              <div className="surface-card h-full p-7">
                <span className="font-display text-3xl font-bold text-gradient">{p.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/25">
        <SectionHeading eyebrow="Scaling up" title="Services opening in future phases" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FUTURE_SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <Reveal key={s.slug} delay={i * 70}>
                <div className="surface-card h-full p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={200} className="mt-10">
          <Button asChild variant="outline">
            <Link to="/roadmap">
              See the full roadmap <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions we get asked" />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>
    </>
  );
}
