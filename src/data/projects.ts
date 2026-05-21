export type TableauDashboardVisual = {
  kind: "tableau-dashboard";
  caption: string;
  kpis: { label: string; value: string }[];
  weeklyNote: string;
  campaigns: { name: string; metric: string }[];
};

export type AgentWorkflowVisual = {
  kind: "agent-workflow";
  caption: string;
  stages: { label: string; gate?: boolean }[];
  output: string;
};

export type ProjectVisual = TableauDashboardVisual | AgentWorkflowVisual;

export type Project = {
  title: string;
  category: "Marketing analytics" | "Agentic analytics";
  summary: string;
  problem: string;
  approach: string;
  proof: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
  visual?: ProjectVisual;
};

export const projects: Project[] = [
  {
    title: "Performance Marketing Tableau Dashboard",
    category: "Marketing analytics",
    summary:
      "Wireframe-first Tableau case study: weekly paid media and CRM reporting for budget and funnel decisions, with anonymized spend.",
    problem:
      "Paid media, Salesforce, and web analytics rarely line up in one view. Leadership asks for CPL and pipeline in the same meeting where the team is still reconciling exports.",
    approach:
      "Map metrics to a single funnel story: spend bands, lead quality, stage conversion, and channel mix. Build an executive KPI strip, trend views, drilldowns, and a short \"what changed\" narrative for the weekly readout.",
    proof:
      "Shows Tableau layout judgment, metric definitions, stakeholder-ready framing, and discipline around anonymized figures ($XXk / $XXX million) on a public portfolio.",
    stack: ["SQL", "Tableau", "Salesforce", "GA4", "dbt", "Redshift"],
    visual: {
      kind: "tableau-dashboard",
      caption:
        "Concept wireframe for a weekly performance readout. Sample KPIs and campaign names are illustrative.",
      kpis: [
        { label: "Spend (MTD)", value: "$XXk" },
        { label: "CPL", value: "$XXX" },
        { label: "MQL → SQL", value: "XX%" },
        { label: "Pipeline", value: "$X.XM" }
      ],
      weeklyNote:
        "Paid search CPL up 8% WoW; two campaigns account for most of the lift. Social holding steady. Recommend pausing low-intent prospecting tests.",
      campaigns: [
        { name: "Brand Search", metric: "CPL $XX" },
        { name: "Non-Brand Core", metric: "CPL $XXX" },
        { name: "Retargeting", metric: "Conv. XX%" }
      ]
    }
  },
  {
    title: "SEO Agent Pipeline",
    category: "Agentic analytics",
    summary:
      "Ten-stage SEO pipeline: research, briefs, drafting, QA, and publish steps with approval gates before anything ships.",
    problem:
      "SEO work stalls when research, briefs, drafts, and deployment live in different tools and nobody owns the handoffs.",
    approach:
      "Split the work into named stages. Agents handle research and drafts; humans approve briefs and final copy before deploy.",
    proof:
      "Shows orchestration, editorial control, and content ops design, not just a single prompt.",
    stack: ["Python", "Claude Code", "SEO", "Content Pipeline"],
    href: "https://github.com/loganriebel/seo_agent_pipeline",
    visual: {
      kind: "agent-workflow",
      caption: "Simplified stage map for the public repo pipeline.",
      stages: [
        { label: "Topic intake" },
        { label: "SERP research" },
        { label: "Brief", gate: true },
        { label: "Draft" },
        { label: "QA", gate: true },
        { label: "Publish" }
      ],
      output: "Deploy-ready article package with brief, draft, and QA notes"
    }
  },
  {
    title: "Meta Ads Agent",
    category: "Agentic analytics",
    summary:
      "Cursor playbook for Meta paid social: creative tests, copy variants, pruning, scaling, and a documented learning loop.",
    problem:
      "Paid social teams lose testing discipline when creative production and performance reporting are on different calendars.",
    approach:
      "Encode analysis, creative iteration, prune/scale rules, and post-test notes as repeatable agent steps tied to account structure.",
    proof:
      "Translates paid social judgment into a workflow others can run, not tribal knowledge in one person's inbox.",
    stack: ["Python", "Cursor", "Paid Social", "Workflow Design"],
    href: "https://github.com/loganriebel/meta-ads-agent",
    visual: {
      kind: "agent-workflow",
      caption: "Core loop from the Meta Ads Agent playbook.",
      stages: [
        { label: "Account snapshot" },
        { label: "Creative test plan" },
        { label: "Launch variants" },
        { label: "Prune / scale", gate: true },
        { label: "Learning log" }
      ],
      output: "Test plan, variant briefs, and scale/pause recommendations"
    }
  },
  {
    title: "Mako Metrics: Meta Ads Competitor Spying",
    category: "Agentic analytics",
    summary:
      "A competitor Meta ad research tool: AI analyzes a rival's public Ad Library ads, a human reviews the read, and you get a brief-ready PDF, not another dashboard to maintain.",
    problem:
      "Teams need to study a competitor's live Facebook and Instagram ads before a creative brief, but scrolling Meta's Ad Library for one brand is slow and easy to misread.",
    approach:
      "The customer names the competitor on Stripe. AI pulls that brand's Ad Library data, scores creative and copy patterns, and a human checks the analysis before we deliver a PDF with scorecards, hook rankings, and test ideas for your account within 24 hours.",
    proof:
      "Shows a shipped competitor intelligence product: clear positioning, fulfillment workflow, and turning a rival's ad library into briefs your team can run against them.",
    stack: [
      "Claude",
      "Meta Ad Library",
      "Competitive Intelligence",
      "PDF Reports",
      "Next.js",
      "Stripe"
    ],
    href: "https://makometrics.com/how-it-works",
    hrefLabel: "See how Mako Metrics works",
    visual: {
      kind: "agent-workflow",
      caption: "Competitor Ad Library → analysis → PDF (makometrics.com).",
      stages: [
        { label: "Name competitor" },
        { label: "Rival Ad Library pull" },
        { label: "AI + human review" },
        { label: "Competitor PDF", gate: true }
      ],
      output:
        "Rival ad scorecard, hook leaderboard, and tests to run on your ads"
    }
  },
  {
    title: "Competitor Intelligence Agent",
    category: "Agentic analytics",
    summary:
      "Scheduled monitoring of competitor sitemaps with ICP scoring and prioritized alerts for content and positioning shifts.",
    problem:
      "Competitor checks are ad hoc, so pricing, positioning, and new pages slip past until someone notices in a sales call.",
    approach:
      "Crawl on a schedule, diff new URLs, score relevance to ICP, and surface a short ranked list for marketing and product marketing.",
    proof:
      "Connects research automation to GTM prioritization, not a raw scrape dump.",
    stack: ["Python", "Hermes", "Automation", "Competitor Research", "Content Strategy"],
    href: "https://github.com/loganriebel/competitor_intel_agent",
    visual: {
      kind: "agent-workflow",
      caption: "Monitor → score → alert flow.",
      stages: [
        { label: "Sitemap crawl" },
        { label: "Diff new pages" },
        { label: "ICP score" },
        { label: "Rank & alert", gate: true }
      ],
      output: "Prioritized competitor changes with suggested responses"
    }
  },
  {
    title: "Agentic Outbound Pipeline",
    category: "Agentic analytics",
    summary:
      "Structured outbound: account research, fit reasoning, and draft outreach inputs reviewed before send.",
    problem:
      "Outbound quality swings with whoever wrote the account notes that week.",
    approach:
      "Agent steps gather firmographics and signals, score fit, and draft messaging hooks for human edit before CRM export.",
    proof:
      "Bridges marketing data habits with sales motion and governed human review.",
    stack: ["Python", "Hermes", "GTM", "Outbound", "AI Workflow"],
    href: "https://github.com/loganriebel/agentic-outbound-pipeline",
    visual: {
      kind: "agent-workflow",
      caption: "Research-to-outreach path with a required review step.",
      stages: [
        { label: "Account research" },
        { label: "Fit scoring" },
        { label: "Draft hooks", gate: true },
        { label: "CRM export" }
      ],
      output: "Reviewed outreach brief per account"
    }
  }
];

export const featuredProjects = projects.slice(0, 3);
