import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Youtube, Instagram, Linkedin, Target, Eye, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { SITE, TRUST_POINTS } from "@/lib/site";
import founderImg from "@/assets/founder.jpg";

const founder = founderImg;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DeenLabs — Founded by Deenesh Kumar" },
      {
        name: "description",
        content:
          "DeenLabs is a technology-focused digital agency founded by Deenesh Kumar, with a mission to transform ideas into digital products and opportunities.",
      },
      { property: "og:title", content: "About DeenLabs — Founded by Deenesh Kumar" },
      {
        property: "og:description",
        content:
          "Our mission, vision and the person behind DeenLabs — a founder-led digital agency for students, creators and startups.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    icon: Target,
    title: "Mission",
    body: SITE.mission,
  },
  {
    icon: Eye,
    title: "Vision",
    body: SITE.vision,
  },
  {
    icon: Compass,
    title: "Principle",
    body: "Practical over fancy. Ship something that works, then make it better.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title={
          <>
            Technology, creativity and <span className="text-gradient">entrepreneurship</span> in
            one place.
          </>
        }
        description={`${SITE.name} is a technology-focused digital agency founded by ${SITE.founder}. We help students, creators, startups and businesses build their digital presence through modern technology and practical solutions.`}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-5 rounded-[2.5rem] opacity-25 blur-3xl"
              style={{ background: "var(--gradient-signal)" }}
              aria-hidden="true"
            />
            <img
              src={founder}
              alt={`${SITE.founder}, founder of ${SITE.name}`}
              loading="lazy"
              width={1024}
              height={1280}
              className="relative rounded-[2rem] border border-border object-cover"
            />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="The founder"
              title={SITE.founder}
              description="Developer, creator and the person you actually work with. DeenLabs started from a simple observation: most people with good ideas get stuck at the technical step. That gap is what this agency closes."
            />
            <Reveal delay={120} className="mt-8 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Alongside client work, I share what I learn publicly — building, tech, productivity
                and personal growth. That habit keeps the work honest: everything DeenLabs offers is
                something I've actually done, not something I read about.
              </p>
              <p className="leading-relaxed">
                Today the agency's focus is web development. As DeenLabs scales, that focus widens
                into AI productivity, business knowledge, career guidance, personal growth, fitness
                and personal branding — an ecosystem, not a service list.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <a href={SITE.socials.youtube} target="_blank" rel="noreferrer noopener">
                  <Youtube className="size-4" /> YouTube
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={SITE.socials.instagram} target="_blank" rel="noreferrer noopener">
                  <Instagram className="size-4" /> Instagram
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={SITE.socials.linkedin} target="_blank" rel="noreferrer noopener">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/25">
        <SectionHeading eyebrow="What drives us" title="Mission, vision and one principle" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="surface-card h-full p-8">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why trust us"
          title="Reasons people choose to work with DeenLabs"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TRUST_POINTS.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <div className="surface-card h-full p-7">
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-10">
          <Button asChild variant="signal" size="lg">
            <Link to="/contact">
              Work with us <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
