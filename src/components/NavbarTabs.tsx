import { useEffect, useState } from "react";

export default function NavbarTabs() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry = null;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (
              !bestEntry ||
              entry.intersectionRatio > bestEntry.intersectionRatio
            ) {
              bestEntry = entry;
            }
          }
        }

        if (bestEntry?.target?.id) {
          setActive(bestEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-15% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (name: string) =>
    `rounded-lg px-4 py-2 transition-all duration-300 ${
      active === name
        ? "bg-mauve text-white shadow-md shadow-mauve/30"
        : "text-ink hover:bg-blush/30 hover:text-mauve"
    }`;

  return (
    <div className="sticky top-0 z-10 flex items-center gap-2 text-sm font-medium justify-center bg-cream/80 backdrop-blur-sm">
      <a href="#about" className={linkClass("about")}>
        About
      </a>

      <a href="#skills" className={linkClass("skills")}>
        Skills
      </a>

      <a href="#projects" className={linkClass("projects")}>
        Projects
      </a>

      <a href="#experience" className={linkClass("experience")}>
        Experience
      </a>

      <a href="#contact" className={linkClass("contact")}>
        Contact
      </a>
    </div>
  );
}
