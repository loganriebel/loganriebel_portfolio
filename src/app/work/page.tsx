import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work | Logan Riebel",
  description:
    "Portfolio work in marketing analytics and agentic GTM workflows by Logan Riebel.",
  alternates: {
    canonical: `${siteUrl}/work`
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
        <h1>Marketing analytics judgment, packaged into repeatable workflows.</h1>
        <p>
          This page separates the site from a GitHub profile. The marketing
          analytics work shows how I frame measurement problems for business
          decisions; the agentic analytics work shows how I turn repeatable GTM
          processes into AI-assisted systems.
        </p>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Marketing analytics</p>
          <h2>The missing layer from GitHub.</h2>
          <p>
            Public repos show implementation. These pieces show how I think
            about performance, measurement, stakeholders, and decisions.
          </p>
        </div>
        <div className="project-grid">
          {marketingProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Agentic analytics</p>
          <h2>AI workflows for GTM and analytics teams.</h2>
          <p>
            These projects show practical systems thinking around SEO,
            competitor monitoring, paid media, outbound, and governed analytics
            interfaces.
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
