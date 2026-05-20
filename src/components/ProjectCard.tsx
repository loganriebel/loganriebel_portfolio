import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
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
          <dt>Shows</dt>
          <dd>{project.proof}</dd>
        </div>
      </dl>
      <div className="tag-list" aria-label={`${project.title} stack`}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {project.href ? (
        <a className="text-link" href={project.href}>
          View project
        </a>
      ) : null}
    </article>
  );
}
