import { Button } from "@heroui/react";
import HeroPhoto from "./HeroFoto";
import {
  EnvelopeIcon,
  CodeBracketIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-10 bg-transparent"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <p className="text-blush font-medium mb-2">Hi, I’m</p>

          <h2 className="text-5xl font-bold leading-tight text-ink">
            Frontend <span className="text-mauve">Enthusiast</span>
          </h2>

          <p className="mt-5 text-ink/70 leading-relaxed">
            I build modern, responsive, and user-friendly web applications using
            React, TypeScript, and clean UI design principles. I enjoy turning
            ideas into real, interactive digital experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <Button
              size="sm"
              className="
                px-5 py-3 
                bg-mauve text-cream 
                rounded-full 
                hover:bg-ink 
                transition
              "
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outline"
              className="
                px-5 py-3 
                border border-blush 
                text-ink 
                rounded-full 
                hover:bg-blush hover:text-cream 
                transition
              "
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact Me
            </Button>
          </div>

          {/* LET'S CONNECT */}
          <div className="mt-8">
            <p className="text-sm text-ink/60 mb-3">Let’s connect</p>

            <div className="flex gap-3">
              <a
                href="mailto:annisa.vita07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                title="Email"
              >
                <Button isIconOnly variant="ghost">
                  <EnvelopeIcon className="w-5 h-5 text-ink" />
                </Button>
              </a>

              <a
                href="https://github.com/annisayulia12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Button isIconOnly variant="ghost">
                  <CodeBracketIcon className="w-5 h-5 text-ink" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/annisa-yulia-vita-0b485432a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Button isIconOnly variant="ghost">
                  <BriefcaseIcon className="w-5 h-5 text-ink" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <HeroPhoto />
      </div>
    </section>
  );
}
