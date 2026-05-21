import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work | Logan Riebel",
  description:
    "Portfolio work in marketing analytics and AI-assisted GTM workflows by Logan Riebel.",
  alternates: {
    canonical: `${siteUrl}/work/`
  }
};

export default function WorkPage() {
  const marketingProjects = projects.filter(
    (project) => project.category === "Marketing analytics"
  );
  const agenticProjects = projects.filter(
    (project) => project.category === "Agentic analytics"
  );

  return (
    <>
      <section className="section-shell page-hero">
        <p className="eyebrow">Portfolio work</p>
        <h1>
          What you cannot see on GitHub: how I frame measurement and ship
          workflows.
        </h1>
        <p>
          In about a minute you should see two things: judgment on marketing
          analytics problems (dashboards, metrics, anonymized spend) and how I
          turn repeat GTM work into AI-assisted systems with clear human gates.
        </p>
      </section>

      <section className="section-shell work-guide">
        <h2 className="work-guide-title">How to read this page</h2>
        <ul className="work-guide-list">
          <li>
            <strong>Marketing analytics</strong> — problem framing, Tableau
            wireframes, and decision narratives. Spend is masked on purpose.
          </li>
          <li>
            <strong>Agentic analytics</strong> — stage maps and repos. Each card
            links to code when it exists.
          </li>
          <li>
            <strong>Wireframes</strong> — concept layouts, not production
            screenshots or client data.
          </li>
        </ul>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Marketing analytics</p>
          <h2>From messy inputs to a weekly decision.</h2>
          <p>
            Repos show code. These pieces show how I define metrics, lay out a
            dashboard, and write the story leadership actually uses in a budget
            meeting.
          </p>
        </div>
        <div className="project-grid project-grid-featured">
          {marketingProjects.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Agentic analytics</p>
          <h2>Repeatable GTM loops with review where it counts.</h2>
          <p>
            SEO, paid social, competitor monitoring, outbound, and governed
            metrics exposed to AI tools. Same pattern: explicit stages, human
            approval on high-risk steps, linked repos for depth.
          </p>
        </div>
        <div className="project-grid">
          {agenticProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
