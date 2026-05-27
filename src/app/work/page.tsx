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
          What GitHub Doesn&apos;t Show: how I frame measurement and ship GTM
          workflows.
        </h1>
        <p>
          On this page you should see two things: judgment on marketing analytics
          problems and how I turn repeat GTM work into AI-assisted systems with
          clear human gates.
        </p>
        <div className="work-guide">
          <h2 className="work-guide-title">How to read this page</h2>
          <ul className="work-guide-list">
            <li>
              <strong>Marketing analytics</strong> — problem framing and decision
              narratives.
            </li>
            <li>
              <strong>Agentic analytics</strong> — stage maps and repos. Each card
              links to code when it exists.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Marketing analytics</p>
          <h2>From messy inputs to a weekly decision.</h2>
          <p>
            These pieces show how I define metrics, lay out a Tableau dashboard,
            and surface the quick insights and next tests leadership actually
            uses to make strategic media decisions.
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
          <h2>
            Resilient, repeatable GTM loops that drive value and keep learning.
          </h2>
          <p>
            SEO, paid social, competitor monitoring, outbound, and governed
            metrics exposed to AI tools. Each loop has explicit stages, human
            review on high-risk steps, and a feedback step so the next run is
            better than the last.
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
