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
      "Connects paid media, web, and CRM data in one Tableau view so teams see how channels are performing, what is driving pipeline, and where to shift budget to improve CAC. The data surfaces where the highest-opportunity tests are.",
    stack: [
      "SQL",
      "Tableau",
      "Salesforce",
      "GA4",
      "dbt",
      "Redshift",
      "Paid Search",
      "Paid Social"
    ],
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
    title: "Claude on dbt Mart Tables",
    category: "Agentic analytics",
    summary:
      "Media + CRM data staged in dbt mart tables. MetricFlow Semantic Layer defines metrics like CPL and ROAS once. Claude answers executive questions in plain English through MCP, in minutes instead of hours or days.",
    problem:
      "Leadership asks for CPL, ROAS, or pipeline in the meeting, then waits on exports while paid media, Salesforce, and web data get reconciled. Each request pulls analytics off their roadmap.",
    approach:
      "Model paid media and Salesforce in dbt (staging, intermediate, marts). Define CPL, ROAS, and spend once in MetricFlow's semantic layer. Connect Claude to those definitions through the dbt MCP server so ad-hoc questions return the same numbers as reporting.",
    proof:
      "Executives get answers in minutes on questions like \"CPL by platform last quarter\" or \"campaigns with rising spend but flat pipeline.\" Ad-hoc volume drops, and analytics gets time back for roadmap work instead of spreadsheet rebuilds.",
    stack: [
      "dbt",
      "MetricFlow",
      "Claude",
      "MCP",
      "SQL",
      "Salesforce",
      "Paid Media",
      "Redshift"
    ],
    href: "https://www.linkedin.com/pulse/agentic-analytics-getting-started-claude-top-dbt-logan-riebel-pwkmc/",
    hrefLabel: "Read the LinkedIn article",
    visual: {
      kind: "agent-workflow",
      caption: "Paid media + SFDC → dbt mart → MetricFlow Semantic Layer → Claude MCP.",
      stages: [
        { label: "Paid media + SFDC sources" },
        { label: "dbt mart" },
        { label: "MetricFlow Semantic Layer" },
        { label: "Claude via MCP" }
      ],
      output:
        "Plain-English CPL, ROAS, and pipeline reads that match reporting"
    }
  },
  {
    title: "SEO Agent Pipeline",
    category: "Agentic analytics",
    summary:
      "Ten-stage SEO pipeline: research, draft, QA, and publish steps with human-in-the-loop approval gates before anything ships.",
    problem:
      "SEO work stalls when research, briefs, drafts, and deployment live in different tools and nobody owns the handoffs.",
    approach:
      "Split the work into stages. Agents handle research and drafts and generate artifacts after each stage. Humans approve outputs before moving to the next stage and deploy. By staging each step, we never overwhelm Claude's context window.",
    proof:
      "Significantly increases velocity to publish high-ranking content while keeping brand voice and quality intact through human gates at brief and final review.",
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
      "Python",
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
      "Crawl on a schedule, diff new URLs, score relevance to ICP, and surface a short ranked list for marketing, sales, and product marketing.",
    proof:
      "Turns competitor moves into GTM action: a rival price increase becomes a head-to-head talking point for sales, feature or integration changes flag product opportunities, and marketing can lead messaging before rivals own the narrative.",
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
    title: "Agentic Cold Email Pipeline",
    category: "Agentic analytics",
    summary:
      "Automated cold email prep: AI builds ranked account lists with firmographics, drafts personalized first lines and hooks, and SDRs review before anything hits the sequencer.",
    problem:
      "SDRs lose selling time to manual list building, account research, and first-draft copy, so cold email quality swings with whoever had bandwidth that week.",
    approach:
      "On a schedule, agents enrich accounts, score ICP fit, and draft cold email copy. SDRs get the list, firmographics, and draft angles in one place, edit what matters, and approve before export to the sending tool or CRM.",
    proof:
      "Saves SDRs hours of prep each week so they can focus on selling: automated lists and research, personalized cold email per account, and steadier reply potential without rebuilding the same work by hand.",
    stack: ["Python", "Hermes", "Cold Email", "GTM", "AI Workflow"],
    href: "https://github.com/loganriebel/agentic-outbound-pipeline",
    visual: {
      kind: "agent-workflow",
      caption: "Account research → cold email draft → human send approval.",
      stages: [
        { label: "Account research" },
        { label: "Fit scoring" },
        { label: "Draft cold email", gate: true },
        { label: "Sequencer / CRM" }
      ],
      output: "Approved cold email copy and hooks per account"
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
      "AI speeds up creative and copy testing, surfaces patterns a human might miss in the account data, captures what each test learned, and pushes budget toward winners so paid social tactics improve cycle over cycle.",
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
  }
];

export const featuredProjects = projects.slice(0, 3);
