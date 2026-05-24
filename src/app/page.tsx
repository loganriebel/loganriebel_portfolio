import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <div className="intro">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Marketing analytics + AI workflows</p>
            <h1>I build GTM analytics systems that turn messy data into action.</h1>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#experience">
                Review analytics experience
              </a>
              <Link className="button secondary" href="/work">
                See selected work
              </Link>
            </div>
          </div>
          <div className="portrait-card">
            <Image
              src={profile.headshot}
              alt="Logan Riebel"
              width={560}
              height={700}
              priority
            />
            <div>
              <span>{profile.title}</span>
              <strong>{profile.location}</strong>
            </div>
          </div>
        </section>

        <section className="section-shell proof-strip" aria-label="Profile highlights">
          {profile.heroBullets.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>
      </div>

      <section className="section-shell split-section">
        <div className="section-heading">
          <p className="eyebrow">What I build</p>
          <h2>Reporting and workflows tied to spend, pipeline, and tests.</h2>
        </div>
        <div className="strength-grid">
          {profile.strengths.map((strength) => (
            <article key={strength.title} className="strength-card">
              <h3>{strength.title}</h3>
              <p>{strength.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell resume-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Roles, scope, and outcomes.</h2>
          <p>
            Spend figures are anonymized ($XXk, $XXX million) so you can see
            scale.
          </p>
        </div>
        <div className="timeline">
          {profile.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="timeline-item">
              <div>
                <h3>{item.role}</h3>
                <p>
                  {item.company} · {item.period}
                </p>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell skills-section">
        <div className="section-heading">
          <p className="eyebrow">Toolbox</p>
          <h2>Tools I use in production.</h2>
        </div>
        <div className="tag-list large" aria-label="Skills">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className={
                profile.mobileHiddenSkills.includes(skill)
                  ? "skill-mobile-hidden"
                  : undefined
              }
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell featured-work">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Case studies and repos with context.</h2>
          </div>
          <Link className="button secondary" href="/work">
            Browse full portfolio
          </Link>
        </div>
        <div className="project-grid featured">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
