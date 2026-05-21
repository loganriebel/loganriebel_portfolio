import type { ProjectVisual as ProjectVisualType } from "@/data/projects";

type Props = {
  visual: ProjectVisualType;
  title: string;
};

export function ProjectVisual({ visual, title }: Props) {
  if (visual.kind === "tableau-dashboard") {
    return (
      <figure
        className="project-visual tableau-dashboard"
        aria-label={`${title} dashboard wireframe`}
      >
        <div className="dash-kpi-row" aria-hidden="true">
          {visual.kpis.map((kpi) => (
            <div key={kpi.label} className="dash-kpi">
              <span>{kpi.label}</span>
              <strong>{kpi.value}</strong>
            </div>
          ))}
        </div>
        <div className="dash-main" aria-hidden="true">
          <div className="dash-panel wide">
            <span>Spend &amp; CPL trend</span>
            <div className="dash-bars">
              <i style={{ height: "42%" }} />
              <i style={{ height: "58%" }} />
              <i style={{ height: "48%" }} />
              <i style={{ height: "72%" }} />
              <i style={{ height: "65%" }} />
              <i style={{ height: "80%" }} />
            </div>
          </div>
          <div className="dash-panel">
            <span>Funnel conversion</span>
            <div className="dash-funnel">
              <div style={{ width: "100%" }} />
              <div style={{ width: "78%" }} />
              <div style={{ width: "52%" }} />
              <div style={{ width: "34%" }} />
            </div>
          </div>
          <div className="dash-panel">
            <span>Channel mix</span>
            <div className="dash-donut" />
          </div>
        </div>
        <div className="dash-footer" aria-hidden="true">
          <div className="dash-panel notes">
            <span>What changed this week</span>
            <p>{visual.weeklyNote}</p>
          </div>
          <div className="dash-panel table">
            <span>Campaign drilldown</span>
            <ul>
              {visual.campaigns.map((row) => (
                <li key={row.name}>
                  <span>{row.name}</span>
                  <span>{row.metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <figcaption className="visual-caption">{visual.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure
      className="project-visual agent-workflow"
      aria-label={`${title} workflow wireframe`}
    >
      <ol className="workflow-stages">
        {visual.stages.map((stage, index) => (
          <li key={stage.label}>
            <div className="workflow-node">
              <span className="workflow-step">Step {index + 1}</span>
              <strong>{stage.label}</strong>
              {stage.gate ? <em className="workflow-gate">Human review</em> : null}
            </div>
            {index < visual.stages.length - 1 ? (
              <span className="workflow-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="workflow-output">
        <span>Output</span> {visual.output}
      </p>
      <figcaption className="visual-caption">{visual.caption}</figcaption>
    </figure>
  );
}
