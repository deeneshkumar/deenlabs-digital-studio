import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Youtube, Instagram, Linkedin, Send, Copy, Check, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section } from "@/components/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DeenLabs — Start Your Project" },
      {
        name: "description",
        content:
          "Get in touch with DeenLabs. Email deenesh.official@gmail.com or send a project brief and get a reply with scope, timeline and next steps.",
      },
      { property: "og:title", content: "Contact DeenLabs — Start Your Project" },
      {
        property: "og:description",
        content: "Tell us about your project and get an honest answer on scope and timeline.",
      },
    ],
  }),
  component: Contact,
});

const PROJECT_TYPES = [
  "Landing page",
  "Business website",
  "Portfolio website",
  "Web application",
  "Something else",
];

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const valid = name.trim().length > 1 && /\S+@\S+\.\S+/.test(email) && message.trim().length > 9;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) {
      toast.error("Please add your name, a valid email and a short message.");
      return;
    }
    const subject = `New project enquiry — ${type} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${type}`,
      `Budget: ${budget || "Not specified"}`,
      "",
      "Details:",
      message,
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app with the brief ready to send.");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      toast.success("Email address copied.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy it manually.");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Tell us what you're <span className="text-gradient">building</span>.
          </>
        }
        description="Share a few details and you'll get a reply with an honest view on scope, timeline and cost. No pressure, no sales script."
      />

      <Section className="pt-4">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form onSubmit={handleSubmit} className="surface-card p-7 sm:p-9" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Deenesh Kumar"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Project type</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROJECT_TYPES.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (optional)</Label>
                  <Input
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. ₹15,000 – ₹40,000"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">What do you need?</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="A short description of your idea, goals and any deadline."
                  rows={6}
                  required
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button type="submit" variant="signal" size="lg" disabled={!valid}>
                  Send project brief <Send className="size-4" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Opens your email app with everything pre-filled.
                </p>
              </div>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="surface-card p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                  <Mail className="size-5" />
                </span>
                <h2 className="mt-5 text-lg font-semibold">Email us directly</h2>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 block break-all text-sm text-primary hover:underline"
                >
                  {SITE.email}
                </a>
                <Button variant="outline" size="sm" className="mt-4" onClick={copyEmail}>
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Copied" : "Copy address"}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="surface-card p-7">
                <h2 className="text-lg font-semibold">Follow the work</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  See how {SITE.founder} builds, thinks and shares before you hire.
                </p>
                <div className="mt-5 space-y-2.5">
                  <SocialRow
                    href={SITE.socials.youtube}
                    icon={<Youtube className="size-4" />}
                    label="YouTube"
                    handle="@deeneshkumarj"
                  />
                  <SocialRow
                    href={SITE.socials.instagram}
                    icon={<Instagram className="size-4" />}
                    label="Instagram"
                    handle="@deenesh.real"
                  />
                  <SocialRow
                    href={SITE.socials.linkedin}
                    icon={<Linkedin className="size-4" />}
                    label="LinkedIn"
                    handle="deenesh2006"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="surface-card flex items-start gap-4 p-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/12 text-primary">
                  <Clock className="size-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Response time</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Usually within 24 hours, Monday to Saturday. Currently accepting new web
                    development projects.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

function SocialRow({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-3 rounded-2xl border border-border bg-background/50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
    >
      <span className="text-primary">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
      <span className="ml-auto text-xs text-muted-foreground">{handle}</span>
    </a>
  );
}
