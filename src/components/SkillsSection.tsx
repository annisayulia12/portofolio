import {
  CodeBracketIcon,
  PaintBrushIcon,
  ServerIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-10 py-20 bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-14 text-ink">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {/* FRONTEND */}
        <div className="p-6 rounded-xl border border-blush/30 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <CodeBracketIcon className="w-6 h-6 text-mauve" />
            <h3 className="text-xl font-semibold text-ink">Frontend</h3>
          </div>

          <ul className="text-ink/70 space-y-1">
            <li>HTML, CSS, JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* UI / DESIGN */}
        <div className="p-6 rounded-xl border border-blush/30 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <PaintBrushIcon className="w-6 h-6 text-mauve" />
            <h3 className="text-xl font-semibold text-ink">UI / Design</h3>
          </div>

          <ul className="text-ink/70 space-y-1">
            <li>Figma</li>
            <li>HeroUI</li>
          </ul>
        </div>

        {/* BACKEND */}
        <div className="p-6 rounded-xl border border-blush/30 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <ServerIcon className="w-6 h-6 text-mauve" />
            <h3 className="text-xl font-semibold text-ink">Backend</h3>
          </div>

          <ul className="text-ink/70 space-y-1">
            <li>Django</li>
            <li>Laravel</li>
            <li>REST API</li>
          </ul>
        </div>

        {/* DATABASE */}
        <div className="p-6 rounded-xl border border-blush/30 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <CircleStackIcon className="w-6 h-6 text-mauve" />
            <h3 className="text-xl font-semibold text-ink">Database</h3>
          </div>

          <ul className="text-ink/70 space-y-1">
            <li>PostgreSQL</li>
          </ul>
        </div>

        {/* TOOLS */}
        <div className="p-6 rounded-xl border border-blush/30 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <WrenchScrewdriverIcon className="w-6 h-6 text-mauve" />
            <h3 className="text-xl font-semibold text-ink">Tools</h3>
          </div>

          <ul className="text-ink/70 space-y-1">
            <li>Git & GitHub</li>
            <li>Vite</li>
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </div>

        {/* 3D / AR */}
        <div className="p-6 rounded-xl border border-blush/30 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-mauve text-xl">🧊</span>
            <h3 className="text-xl font-semibold text-ink">
              3D / AR Development
            </h3>
          </div>

          <ul className="text-ink/70 space-y-1">
            <li>Blender (3D Modeling)</li>
            <li>Unity (Game Engine)</li>
            <li>Vuforia (AR Development)</li>
            <li>Augmented Reality Basics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
