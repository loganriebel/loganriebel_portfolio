import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";

type Props = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: Props) {
  return (
    <article
      className={`project-card${featured ? " project-card-featured" : ""}`}
    >
      {project.visual ? (
        <ProjectVisual visual={project.visual} title={project.title} />
      ) : null}
      <div className="card-kicker">{project.category}</div>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <dl>
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Approach</dt>
          <dd>{project.approach}</dd>
        </div>
        <div>
          <dt>Outcomes</dt>
          <dd>{project.proof}</dd>
        </div>
      </dl>
      <div className="tag-list" aria-label={`${project.title} stack`}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {project.links?.length ? (
        <div className="card-links">
          {project.links.map((link) => (
            <a
              key={link.href}
              className="text-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : project.href ? (
        <a
          className="text-link"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.hrefLabel ??
            (project.href.includes("github.com")
              ? "Open GitHub repo"
              : "Visit site")}
        </a>
      ) : null}
    </article>
  );
}
