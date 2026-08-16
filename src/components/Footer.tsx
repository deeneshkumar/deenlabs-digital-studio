import { Link } from "@tanstack/react-router";
import { Mail, Youtube, Instagram, Linkedin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30 px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-[image:var(--gradient-signal)] font-display text-sm font-bold text-primary-foreground">
              D
            </span>
            <span className="font-display text-lg font-semibold">{SITE.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A technology-focused digital agency founded by {SITE.founder}, helping students,
            creators, startups and businesses build a digital presence that works.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <SocialLink href={SITE.socials.youtube} label="YouTube">
              <Youtube className="size-4" />
            </SocialLink>
            <SocialLink href={SITE.socials.instagram} label="Instagram">
              <Instagram className="size-4" />
            </SocialLink>
            <SocialLink href={SITE.socials.linkedin} label="LinkedIn">
              <Linkedin className="size-4" />
            </SocialLink>
            <SocialLink href={`mailto:${SITE.email}`} label="Email">
              <Mail className="size-4" />
            </SocialLink>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Pages
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Get in touch
          </h3>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-4 block break-all text-sm text-foreground transition-colors hover:text-primary"
          >
            {SITE.email}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Replies usually within 24 hours, Mon–Sat.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p>Built by {SITE.founder}.</p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
    >
      {children}
    </a>
  );
}
