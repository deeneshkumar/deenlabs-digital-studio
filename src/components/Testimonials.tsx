import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { TESTIMONIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Testimonials({ className }: { className?: string }) {
  return (
    <Section className={cn("bg-surface/25", className)}>
      <SectionHeading
        eyebrow="Why trust us"
        title="What people say after working with DeenLabs"
        description="Honest feedback from students, creators and small business owners we've built for."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <figure className="surface-card flex h-full flex-col p-7 sm:p-8">
              <Quote className="size-6 text-primary/60" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-signal)] font-display text-sm font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <figcaption>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
                <span className="ml-auto flex items-center gap-0.5" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-primary text-primary" />
                  ))}
                </span>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
