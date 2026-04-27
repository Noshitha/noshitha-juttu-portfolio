export const siteContent = {
  name: "Noshitha Juttu",
  role: "AI & Data Systems Engineer",
  shortRole:
    "AI & data systems engineer building applied AI products",
  location: "San Francisco, California",
  locationShort: "California",
  availabilityShort: "Open to AI, data, and software roles",
  availability:
    "Open to Applied AI, LLM Systems, AI Products, Data Platform, ML/MLOps, and Forward Deployed AI roles.",
  tagline:
    "Building applied AI products, LLM workflows, and production-grade data platforms across retrieval, inference optimization, and cloud data infrastructure.",
  summary:
    "I build at the intersection of AI systems, data infrastructure, and product execution. My background spans production data engineering at Deloitte, applied NLP and on-device model optimization with Adobe x UMass, and agentic AI research at UMass Amherst. I'm focused on turning strong data foundations into reliable AI products - from RAG and multi-agent workflows to scalable pipelines, model evaluation, and inference-ready systems.",
  heroImage:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80",
  profileImage: "/Noshitha_Profile_Picture.jpeg",
  heroFocusLabel: "Core Areas",
  focusAreas: [
    "AI systems",
    "Retrieval pipelines",
    "LLM inference optimization",
    "NLP",
    "Multi-agent systems",
    "Data infrastructure",
    "Data Engineering",
  ],
  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Hackathons", href: "#hackathons" },
    { label: "Publications", href: "#publications" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLinks: [
    {
      label: "Resume",
      href: "/Resume_Noshitha_Juttu.pdf",
      variant: "primary",
      icon: "resume",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/noshitha-juttu/",
      icon: "linkedin",
    },
    { label: "GitHub", href: "https://github.com/Noshitha", icon: "github" },
    {
      label: "Email",
      href: "mailto:noshithajuttu@gmail.com",
      icon: "email",
    },
    {
      label: "Hugging Face",
      href: "https://huggingface.co/Noshitha98",
      icon: "huggingface",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&user=GSbtLvUAAAAJ",
      icon: "scholar",
    },
  ],
  sections: {
    experience: {
      eyebrow: "Experience",
      title: "Research, applied AI, and production data systems.",
      description:
        "My work spans research labs, model optimization, and large-scale enterprise data platforms — with a focus on systems that are measurable, deployable, and reliable.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected systems and applied research work.",
      description:
        "A mix of retrieval, inference, embedded ML, and analytical systems built across coursework, research, and applied engineering work.",
      linkLabel: "View project",
    },
    hackathons: {
      eyebrow: "Hackathons & Rapid Prototypes",
      title: "Fast builds that explore ideas quickly.",
      description:
        "A space for hackathon systems, rapid prototypes, and experimental builds designed and shipped under tight time constraints.",
      linkLabel: "View build",
    },
    publications: {
      eyebrow: "Publications",
      title: "Papers, preprints, and research outputs.",
      description:
        "Research work spanning multi-agent language models, legal NLP, and early deep learning systems.",
      linkLabel: "Read more",
    },
    techStack: {
      eyebrow: "Tech Stack",
      title: "Tools I use to build and evaluate systems.",
      description:
        "From model optimization and retrieval to orchestration, warehousing, and infrastructure.",
    },
    contact: {
      eyebrow: "Contact",
    },
  },
  about: {
    eyebrow: "About",
    title: "Production data foundations. Applied AI systems. Product-minded execution.",
    body: [
      "My work started in data science, where I learned how clean data, simple statistical reasoning, and clear interpretation can influence real decisions. I later moved into data and AI engineering at Deloitte, spending nearly 2.5 years building production pipelines, cloud data platforms, and analytics systems across healthcare, energy, and public utility clients. That experience taught me how to integrate messy systems, optimize workflows, and deliver under real business constraints.",
      "At UMass Amherst, I deepened my focus on AI, NLP, and systems research. I have worked on on-device NLP optimization with Adobe x UMass, multi-agent clinical reasoning at the UMass BioNLP Lab, and rapid AI product prototypes across legal AI, retrieval, graph-based reasoning, and edge/cloud inference. Across these projects, my focus is consistent: build AI systems that are measurable, reliable, and useful beyond the demo.",
    ],
    stats: [
      { label: "Experience", value: "3+ Years" },
      { label: "Research", value: "2 Publications + 1 Under Review" },
      { label: "Background", value: "Ex-Deloitte" },
    ],
  },
  experience: [
    {
      role: "AI Researcher",
      company: "UMass BioNLP Lab",
      details: "Advisor: Prof. Hong Yu",
      period: "Sep 2025 – Jan 2026",
      project: "Agentic Clinical NLP System for Alcohol-Use Classification",
      logo: "/logos/UMass.png",
      description:
        "Developed a training-free GRPO-style agentic framework for clinical NLP, focused on alcohol-use status classification from patient notes using reward-guided self-reflection and experience memory — without model fine-tuning.",
      highlights: [
        "Built a training-free GRPO-style pipeline that generates multiple LLM reasoning candidates per clinical note, scores them with label-based rewards (Present / Past / None), and improves classification behavior through reflection without parameter updates.",
        "Implemented async LLM rollout pipelines that generate, score, and persist candidate responses per sample, with reward tracking and JSONL experiment logging for reproducibility.",
        "Designed a lightweight experience-memory module using sentence-transformer embeddings to retrieve prior high-reward reasoning traces and surface them in future prompts.",
        "Added controller logic to monitor reward trends across batches, refresh stale experiences, and adjust generation temperature — enabling adaptive inference-time behavior.",
      ],
    },
    {
      role: "Applied AI Extern",
      company: "Adobe x UMass",
      details: "Advisors: Prof. Andrew McCallum & Franck Dernoncourt",
      period: "Jan 2025 – May 2025",
      project: "On-Device MarianMT Inference Optimization",
      logo: "/logos/Adobe.jpg",
      description:
        "Engineered an on-device inference optimization pipeline for MarianMT-based neural machine translation, balancing model size, decoding speed, and quality for edge deployment.",
      highlights: [
        "Built a PyTorch to CoreML / ONNX Runtime workflow enabling INT8 and FP16 export for cross-platform inference.",
        "Reduced model size from 75M to 23M parameters and improved decoding throughput by about 20%.",
        "Evaluated accuracy-latency-size trade-offs using BLEU, TER, chrF, METEOR, COMET, BERTScore, and BLEURT.",
      ],
    },
    {
      role: "AI & Data Engineering Analyst",
      company: "Deloitte USI",
      details: "Client: Public Utility",
      period: "Nov 2022 – Jan 2024",
      project: "Utility Customer Data Platform",
      logo: "/logos/Deloitte.png?v=20260418",
      description:
        "Architected and maintained secure ingestion and transformation pipelines for utility billing, consumption, and daily customer activity data powering customer-facing digital experiences.",
      highlights: [
        "Supported data used by a customer base of 15M+ users across utility-service experiences and leadership-facing dashboards.",
        "Developed a custom Python-based NiFi processor that reduced batch load times from 3 hours to 30 minutes.",
        "Built workflows that integrated high-volume API and enterprise source data into AWS-based lakehouse layers for downstream analytics and application use.",
        "Improved governance and reliability through OAuth-enabled ingestion, Airflow orchestration, schema evolution handling, and monitoring across Glue, Athena, and Redshift.",
      ],
    },
    {
      role: "AI & Data Engineering Analyst",
      company: "Deloitte USI",
      details: "Client: Fortune 100 Energy Utility",
      period: "Apr 2022 – Nov 2022",
      project: "Enterprise ETL Migration to Databricks",
      logo: "/logos/Deloitte.png?v=20260418",
      description:
        "Led migration of legacy Informatica BDM workflows to Databricks-based PySpark pipelines for a high-scale enterprise utility environment.",
      highlights: [
        "Reduced batch runtimes by 25-30% through Databricks migration, incremental processing, and better transformation design.",
        "Received a Spot Award for ownership and impact during the migration effort.",
        "Owned raw-to-formatted pipeline development for a migration program serving a growing downstream user base.",
        "Worked in a high-oncall production environment, troubleshooting failures and improving reliability during migration cutovers.",
      ],
    },
    {
      role: "AI & Data Engineering Analyst",
      company: "Deloitte USI",
      details: "Client: Healthcare Provider",
      period: "Nov 2021 – Apr 2022",
      project: "Healthcare ELT & Patient Risk Analytics",
      logo: "/logos/Deloitte.png?v=20260418",
      description:
        "Designed and automated ELT pipelines across multi-source healthcare systems to centralize patient and operational data for downstream analytics.",
      highlights: [
        "Built a 3-layer architecture from raw to transformed to reporting with schema validation, deduplication, and standardized transformations.",
        "Supported analytics workflows focused on identifying high-priority and critical-care patient signals from consolidated records.",
        "Improved trust in downstream reporting by reducing ingestion and transformation errors through stronger validation.",
      ],
    },
    {
      role: "AI & Data Engineering Analyst",
      company: "Deloitte USI",
      details: "Client: Used Car Dealers",
      period: "Sep 2021 – Nov 2021",
      project: "Used Car Pricing Intelligence",
      logo: "/logos/Deloitte.png?v=20260418",
      description:
        "Analyzed used-car market data to identify price-driving factors across vehicle attributes, market trends, and resale patterns.",
      highlights: [
        "Built predictive modeling workflows to estimate used-car pricing and support pricing-related recommendations.",
        "Improved interpretability by surfacing the most important feature drivers behind pricing outputs.",
        "Positioned the system as a decision-support tool for competitive pricing and market-entry analysis.",
      ],
    },
    {
      role: "Data Scientist Intern",
      company: "Innodatatics",
      details: "",
      period: "Jun 2019 – Aug 2019",
      project: "Airline Customer Churn Analytics",
      logo: "/logos/innodatatics.jpeg",
      description:
        "Worked on airline churn analysis using statistical testing and classical machine learning to identify customer retention drivers.",
      highlights: [
        "Performed EDA and feature engineering on 100K+ airline customer records.",
        "Built and validated a decision-tree churn model with 93.5% accuracy.",
        "Used ANOVA and t-tests to identify significant drivers and translate them into retention recommendations.",
      ],
    },
  ],
  projects: [
    {
      title: "BriefCheck",
      type: "Flagship Project · Legal AI Verification",
      featured: true,
      description:
        "Built a verification layer for AI-drafted legal briefs that checks whether cited cases are real, still good law, support the argument, and fit the right jurisdiction. The project combines retrieval, LLM orchestration, domain reasoning, and product judgment around trust and practical AI safety.",
      tags: ["Legal AI", "Verification", "Retrieval", "LLM Orchestration", "MCP"],
      link: "https://lnkd.in/gQusAN5v",
    },
    {
      title: "RAG-based Research Copilot",
      type: "Retrieval · NLP Systems",
      description:
        "Built modular retrieval and indexing pipelines using LangGraph, Hugging Face, and semantic search to automate literature ingestion, search, and topic discovery.",
      tags: [
        "LangGraph",
        "RAG",
        "Sentence-Transformers",
        "Semantic Search",
      ],
      link: "https://github.com/Noshitha/rag_research_copilot",
    },
    {
      title: "Automated SQL View Generation & Entropy-Based Ranking Engine",
      type: "Data Systems · Analytical Ranking",
      description:
        "Engineered KL-divergence-based ranking, in-memory caching, and pruning to prioritize analytical views, improve throughput, and reduce query runtime from 10s to under 2s.",
      tags: ["SQL", "KL Divergence", "SQLite", "Optimization"],
      link: "https://github.com/Noshitha/SEEDDB_Visual_Recommendation_System",
    },
    {
      title: "Hand Gesture Controlled UAV / IMU-Based Gesture Recognition",
      type: "Embedded ML · Real-time Systems",
      description:
        "Built a gesture recognition system using ESP32-S3 and IMU sensor data with FFT-based preprocessing for motion-driven control and low-latency command execution.",
      tags: ["ESP32-S3", "IMU", "FFT", "Embedded ML"],
      link: "https://github.com/Noshitha/HandGesture-UAV",
    },
  ],
  hackathons: [
    {
      title: "KDIGO Guideline-Aware Clinical Graph",
      hackathon: "Rapid Prototype",
      theme: "Clinical Decision Support with Graph + Agents",
      buildTime: "12 hours",
      type: "Prototype · Graph + Agents",
      description:
        "Designed a graph-centered prototype using Neo4j and agent orchestration to reason over patient records, guideline rules, contraindications, and treatment thresholds.",
      tags: ["Neo4j", "Agents", "Clinical AI", "Prototype"],
      link: "https://github.com/Noshitha",
    },
    {
      title: "Hybrid Edge-Cloud Routing for Tool-Calling AI",
      hackathon: "Google DeepMind × Cactus (YC S25) AI Hackathon",
      theme: "Hybrid inference, tool routing, and edge AI systems",
      buildTime: "Hackathon Build",
      type: "Hackathon · Inference Routing",
      description:
        "Built a hybrid edge-cloud routing system for tool-calling AI that decides when a small language model (FunctionGemma-270M) is enough and when to escalate to Gemini for stronger reasoning. The project focused on practical inference trade-offs across speed, accuracy, on-device execution, and recovery behavior, showing how smaller models and cloud models can work together instead of competing.",
      tags: ["Edge AI", "Gemini", "Tool Routing", "Systems"],
      links: [
        {
          label: "GitHub Repo",
          href: "https://github.com/Noshitha/functiongemma-hackathon",
        },
      ],
    },
  ],
  publications: [
    {
      title:
        "When Consensus Becomes Compliance: Measuring Sycophancy in Multi-Agent Language Model Interactions",
      venue: "ACL 2026 Student Research Workshop · Under Review",
      year: "2026",
      description:
        "Introduced the Conditional Infection metric to quantify interaction-driven epistemic regression in multi-agent LLM debates.",
      link: "#",
    },
    {
      title:
        "Text to Trust: Evaluating Fine-Tuning and LoRA Trade-offs in Language Models for Unfair Terms of Service Detection",
      venue: "arXiv preprint (arXiv:2510.22531)",
      year: "2025",
      description:
        "Systematic evaluation of full fine-tuning and parameter-efficient LoRA adaptations for clause-level classification and risk flagging in legal contracts.",
      link: "https://arxiv.org/abs/2510.22531",
    },
    {
      title: "Development of an AI-Based Chatbot Using Deep Neural Networks",
      venue: "International Conference on Intelligent Vision and Computing 2021",
      year: "2021",
      description:
        "Speech-enabled chatbot development using Bag of Words, DNNs, and batch gradient descent; recognized for societal impact and integrated into a city municipal website.",
      link: "https://www.researchgate.net/publication/358630826_Development_of_Artificial_Intelligence_based_Chatbot_Using_Deep_Neural_Network",
    },
  ],
  techStack: {
    inference: [
      "vLLM",
      "CUDA",
      "ONNX Runtime",
      "CoreML",
      "PTQ/QAT",
      "INT8/FP16",
    ],
    agents: [
      "LangChain",
      "LangGraph",
      "ReAct",
      "Multi-agent orchestration",
      "GRPO/DPO",
    ],
    retrieval: [
      "RAG",
      "LlamaParse",
      "LlamaIndex",
      "FAISS",
      "Milvus",
      "Sentence-Transformers",
      "Semantic retrieval",
      "Neo4j",
    ],
    data: [
      "Spark",
      "Databricks",
      "Airflow",
      "Redshift",
      "Athena",
      "Snowflake",
      "BigQuery",
      "dbt",
    ],
    infrastructure: [
      "AWS",
      "SageMaker",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    tooling: [
      "MCP",
      "DBeaver",
      "GitHub",
      "Python",
      "TypeScript",
    ],
  },
  contact: {
    title: "Let’s build AI systems that hold up beyond the demo.",
    description:
      "I’m open to applied AI, AI systems, retrieval, ML infrastructure, and data platform roles — especially work that sits between research ideas and production systems.",
  },
};

export type SiteContent = typeof siteContent;
