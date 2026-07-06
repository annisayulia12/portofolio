export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen px-10 py-20 bg-transparent"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-ink">
        Experience
      </h2>

      <div className="space-y-10 max-w-4xl mx-auto">
        {/* SIREP */}
        <div className="border-l-4 border-mauve pl-6">
          <h3 className="text-xl font-semibold text-ink">
            SIREP - System Information & Reporting
          </h3>

          <p className="text-sm text-blush">Frontend Developer</p>

          <p className="text-ink/70 mt-3 leading-relaxed">
            Built a web-based information system for managing conveyor and
            operational data. Developed responsive UI using React, TypeScript,
            and Tailwind CSS. Implemented dynamic charts using Recharts and
            drag-and-drop reordering using dnd-kit. Integrated REST API for
            database communication.
          </p>

          <p className="text-sm text-ink/50 mt-2">
            Tech: React, TypeScript, Tailwind CSS, Recharts, dnd-kit, REST API,
            Lucide React
          </p>
        </div>

        {/* SMART PACK */}
        <div className="border-l-4 border-blush pl-6">
          <h3 className="text-xl font-semibold text-ink">
            SMART PACK - Packaging Management System
          </h3>

          <p className="text-sm text-blush">Frontend Developer</p>

          <p className="text-ink/70 mt-3 leading-relaxed">
            Developed a packaging management interface with focus on usability
            and clean UI design. Built component-based UI using HeroUI and
            Heroicons. Integrated backend APIs for real-time data processing and
            state updates.
          </p>

          <p className="text-sm text-ink/50 mt-2">
            Tech: React, TypeScript, Tailwind CSS, HeroUI, Heroicons, REST API
          </p>
        </div>

        {/* SPATIRA */}
        <div className="border-l-4 border-mauve pl-6">
          <h3 className="text-xl font-semibold text-ink">
            SPATIRA - Data Analysis & Web System
          </h3>

          <p className="text-sm text-blush">Fullstack Developer</p>

          <p className="text-ink/70 mt-3 leading-relaxed">
            Developed a fullstack system for dengue fever case analysis and
            visualization. Built backend using Django and PostgreSQL for data
            management. Applied Hierarchical Clustering for case grouping and
            ARIMA for time-series prediction. Frontend built using React with
            Leaflet for geospatial visualization and Recharts for statistical
            charts. Integrated GeoJSON for map-based data rendering.
          </p>

          <p className="text-sm text-ink/50 mt-2">
            Tech: React, TypeScript, Tailwind CSS, Django, PostgreSQL, Leaflet,
            GeoJSON, Recharts, ARIMA, Hierarchical Clustering
          </p>
        </div>

        {/* AR PROJECT */}
        <div className="border-l-4 border-blush pl-6">
          <h3 className="text-xl font-semibold text-ink">
            PINTAR BU - Augmented Reality Application
          </h3>

          <p className="text-sm text-blush">AR Developer</p>

          <p className="text-ink/70 mt-3 leading-relaxed">
            Developed a 3D augmented reality application using Blender for
            modeling and animation. Created object rigging using armature
            system. Implemented AR experience in Unity using C# scripting.
            Integrated Vuforia for marker-based tracking and interactive AR
            content.
          </p>

          <p className="text-sm text-ink/50 mt-2">
            Tech: Blender, Unity (C#), Vuforia, AR Development, 3D Animation
          </p>
        </div>
      </div>
    </section>
  );
}
