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

export type ProjectLink = { href: string; label: string };

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
  // Takes precedence over href when present.
  links?: ProjectLink[];
  visual?: ProjectVisual;
};

export const projects: Project[] = [
  {
    title: "Performance Marketing Tableau Dashboard",
    category: "Marketing analytics",
    summary:
      "Wireframe-first Tableau case study: weekly paid media and CRM reporting for budget and funnel decisions, with anonymized spend.",
    problem:
      "Web analytics, paid media platforms, and CRM outcomes each live in their own tool, so teams end up juggling five disconnected sources of truth. There is no single place to see how a click turned into a lead and whether that lead became pipeline, which means every question to leadership starts with exporting and stitching spreadsheets by hand.",
    approach:
      "Model Paid Search, Paid Social, GA4, and Salesforce data in dbt on Redshift so every channel reports against one funnel definition in SQL. Lay out Tableau so a weekly scan compares channels side by side and surfaces the next test worth running: audience cuts, creative angles, landing pages, or channel mix.",
    proof:
      "A connected view turns the weekly scan into a short list of specific tests worth running next: which creative is fatiguing, which audiences convert, where to shift mix. Each test closes out and feeds the next week's read.",
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
      "Competitor Meta ad research: AI reads a rival's public Ad Library, a human reviews the analysis, and you get a brief-ready PDF plus an ad catalog with their creatives, copy, and CTAs.",
    problem:
      "Teams need to study a competitor's live Facebook and Instagram ads before a creative brief, but scrolling Meta's Ad Library for one brand is slow and easy to misread.",
    approach:
      "The customer names the competitor on Stripe. We pull that brand's Ad Library, score creative and copy patterns, and a human checks the read before delivery. Within 24 hours you get a brief-ready PDF with scorecards, hook rankings, and test ideas, plus an ad catalog of every ad asset we found.",
    proof:
      "A shipped product with a simple checkout and a clear deliverable: a brief-ready PDF and an ad catalog your team can use before they write the creative brief.",
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
      caption: "Competitor Ad Library → analysis → PDF + Ad Catalog (makometrics.com).",
      stages: [
        { label: "Name competitor" },
        { label: "Rival Ad Library pull" },
        { label: "AI + human review" },
        { label: "Ad Catalog", gate: true }
      ],
      output:
        "Brief-ready PDF, ad catalog with every rival asset, and tests to run on your ads"
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
      "Nine-stage agent for Meta Paid Social: research, copy, generated creative, policy screening, then publish through a proxy that can't burn your whole budget. Results write back, so each sprint starts with learnings from the latest data.",
    problem:
      "Paid social improves by testing. But creative and policy review move slower than the budget burns, so accounts run the same few ads until they fatigue. Point an AI at the account and the failure mode gets worse: nuked campaigns, or an account stuck in learning phase.",
    approach:
      "Nine stages, each writing a file the next reads. A human approves every handoff. All Meta writes go through a proxy that holds the token, forces everything paused, and caps budget. Kill and scale calls gate on conversion volume and an A/B significance test, never impressions and never a raw CTR sort. Below roughly 50 results in a week, the verdict is undecided, a state the schema records rather than a row it leaves empty. Each batch reserves 20-30% of its slots for untested angles.",
    proof:
      "One session takes a sprint from research to brand-safe creative packaged in a campaign that's ready to publish. Kill and scale rules live in documentation instead of one person's head. Every result feeds the recursive loop and briefs the next sprint.",
    stack: [
      "Claude Code",
      "Python",
      "Meta Marketing API",
      "fal.ai",
      "Supabase",
      "Paid Social",
      "Workflow Design"
    ],
    links: [
      { href: "https://makometrics.com/meta-ads-agent", label: "Try the live demo" },
      { href: "https://github.com/loganriebel/meta-ads-agent", label: "Open GitHub repo" }
    ],
    visual: {
      kind: "agent-workflow",
      caption:
        "Simplified stage map. A human approves every transition, and every Meta write goes through the proxy.",
      stages: [
        { label: "Research angles" },
        { label: "Copy + image briefs" },
        { label: "Generate creatives" },
        { label: "Policy screen", gate: true },
        { label: "Publish via proxy", gate: true },
        { label: "Analyze → write back" }
      ],
      output:
        "Brand-safe ad variants with automated campaign build. Winning ads brief the next batch of creative and copy."
    }
  }
];

export const featuredProjects = [
  ...projects.slice(0, 3),
  projects.find((p) => p.title.startsWith("Mako Metrics"))!,
];
