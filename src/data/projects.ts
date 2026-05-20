export type Project = {
  title: string;
  category: "Marketing analytics" | "Agentic analytics";
  summary: string;
  problem: string;
  approach: string;
  proof: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Lightweight Marketing Analytics Workflow",
    category: "Marketing analytics",
    summary:
      "A practical reporting workflow for turning campaign, CRM, and funnel data into weekly decisions without exposing private client or employer spend.",
    problem:
      "Marketing teams often have channel metrics, CRM data, and budget context split across tools, which makes performance conversations slow and overly manual.",
    approach:
      "Structure inputs around campaign spend bands, lead quality, pipeline movement, and conversion rates; then summarize what changed, why it matters, and what to test next.",
    proof:
      "Designed to show marketing judgment, measurement fluency, and executive-friendly communication while keeping spend anonymized as $XXk per month or $XXX million.",
    stack: ["SQL", "Tableau", "Power BI", "Salesforce", "GA4", "dbt"]
  },
  {
    title: "SEO Agent Pipeline",
    category: "Agentic analytics",
    summary:
      "A 10-stage SEO content pipeline with research, approval gates, and deploy-ready content operations.",
    problem:
      "SEO content production gets slow when research, briefs, drafting, QA, and deployment are handled as disconnected manual steps.",
    approach:
      "Break the workflow into explicit agent stages with human approval gates so the system can move quickly without losing editorial control.",
    proof:
      "Demonstrates practical agent orchestration, content operations, and marketing workflow design.",
    stack: ["Python", "Claude Code", "SEO", "Content Pipeline"],
    href: "https://github.com/loganriebel/seo_agent_pipeline"
  },
  {
    title: "Meta Ads Agent",
    category: "Agentic analytics",
    summary:
      "A Cursor agent playbook for Meta paid social creative, copy, testing, pruning, scaling, and learning loops.",
    problem:
      "Paid social optimization depends on repeatable testing discipline, but that discipline is easy to lose when creative and reporting move separately.",
    approach:
      "Codify paid social workflow stages so campaign analysis, creative iteration, and scaling decisions follow a consistent loop.",
    proof:
      "Shows how paid media knowledge can be translated into an AI-assisted operating system.",
    stack: ["Python", "Cursor", "Paid Social", "Workflow Design"],
    href: "https://github.com/loganriebel/meta-ads-agent"
  },
  {
    title: "Competitor Intelligence Agent",
    category: "Agentic analytics",
    summary:
      "A scheduled agent that monitors competitor sitemaps, scores new content against ICP relevance, and flags market changes.",
    problem:
      "Competitor research is valuable but usually sporadic, making teams miss pricing, content, and positioning changes.",
    approach:
      "Monitor source changes on a schedule, score new pages, and convert findings into prioritized content and positioning ideas.",
    proof:
      "Connects market monitoring, ICP thinking, and automated research into a repeatable GTM workflow.",
    stack: ["Python", "Automation", "Competitor Research", "Content Strategy"],
    href: "https://github.com/loganriebel/competitor_intel_agent"
  },
  {
    title: "Agentic Outbound Pipeline",
    category: "Agentic analytics",
    summary:
      "A GTM workflow for researching accounts, shaping outreach, and bringing more structure to outbound motion.",
    problem:
      "Outbound breaks down when research quality and message relevance are inconsistent across accounts.",
    approach:
      "Use agentic steps to gather context, reason about fit, and produce outreach inputs that can be reviewed before use.",
    proof:
      "Shows the bridge between marketing systems, sales motion, and applied AI workflow design.",
    stack: ["Python", "GTM", "Outbound", "AI Workflow"],
    href: "https://github.com/loganriebel/agentic-outbound-pipeline"
  },
  {
    title: "Mako Metrics MCP",
    category: "Agentic analytics",
    summary:
      "A public MCP registry listing for connecting governed analytics context to AI-assisted workflows.",
    problem:
      "Analytics agents need trusted metric definitions and controlled interfaces, not ad hoc access to scattered data.",
    approach:
      "Expose analytics capabilities through an MCP-ready interface that can be discovered and used by AI tooling.",
    proof:
      "Demonstrates interest in governed metric access, analytics UX, and AI-native data products.",
    stack: ["MCP", "Analytics", "PowerShell", "AI Tooling"],
    href: "https://github.com/loganriebel/mako-metrics-mcp"
  }
];

export const featuredProjects = projects.slice(0, 3);
