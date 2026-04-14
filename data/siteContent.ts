export const siteContent = {
  name: "Noshitha Juttu",
  role: "AI Systems, Retrieval, and Data Infrastructure",
  location: "San Francisco, California",
  tagline:
    "Building reliable AI systems across retrieval, NLP, inference optimization, and production-grade data platforms.",
  summary:
    "I work across the systems layer behind useful AI: retrieval pipelines, evaluation frameworks, on-device inference optimization, and large-scale data infrastructure. My background spans enterprise data engineering at Deloitte, model compression and deployment for multilingual translation at Adobe, and multi-agent reasoning research in clinical NLP at UMass BioNLP Lab.",
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
    { label: "Resume", href: "/Resume_Noshitha_Juttu.pdf", variant: "primary" },
    { label: "GitHub", href: "https://github.com/Noshitha" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/noshitha-juttu/" },
    { 
      label: "Email", 
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=noshithajuttu@gmail.com" 
    }
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
    title: "I like building the layer between AI ideas and dependable systems.",
    body: [
      "I’m an M.S. in Computer Science graduate from UMass Amherst with a background that combines data engineering, NLP, and applied AI systems. I’m most interested in the parts of AI that make systems actually usable: retrieval quality, inference constraints, evaluation, orchestration, and production reliability.",
      "At Deloitte, I built cloud-native data platforms and large-scale ETL pipelines for enterprise clients. At Adobe, I worked on on-device inference optimization for MarianMT using pruning, transformer slimming, and quantization. At UMass BioNLP Lab, I explored training-free multi-agent reasoning for clinical text classification with reward-guided refinement and lightweight memory.",
    ],
    stats: [
      { label: "Experience", value: "3+ Years" },
      { label: "Research", value: "2 Publications + 1 Under Review" },
      { label: "Background", value: "Ex-Deloitte" },
    ],
  },
  experience: [
    {
      role: "Graduate Student Researcher",
      company: "UMass BioNLP Lab",
      details: "Advisor: Prof. Hong Yu",
      period: "Sep 2025 – Jan 2026",
      description:
        "Built a training-free multi-agent framework for SDOH prediction from clinical text, focused on inference-time refinement, reasoning stability, and limited-supervision settings.",
      highlights: [
        "Designed a multi-agent pipeline that ranks candidate outputs for correctness and consistency without fine-tuning.",
        "Implemented a lightweight memory module to reuse high-reward reasoning patterns across predictions.",
        "Evaluated trade-offs across accuracy, macro-F1, robustness, and reasoning stability on alcohol-use classification from clinical notes.",
      ],
    },
    {
      role: "Graduate Student Extern",
      company: "Adobe",
      details: "Advisors: Prof. Andrew McCallum & Franck Dernoncourt",
      period: "Jan 2025 – May 2025",
      description:
        "Engineered an on-device inference optimization pipeline for MarianMT-based neural machine translation, balancing model size, decoding speed, and quality for edge deployment.",
      highlights: [
        "Built a PyTorch → CoreML / ONNX Runtime workflow enabling INT8 and FP16 export for cross-platform inference.",
        "Reduced model size from 75M to 23M parameters and improved decoding throughput by about 20%.",
        "Evaluated deployment thresholds using BLEU, TER, chrF, METEOR, COMET, BERTScore, and BLEURT.",
      ],
    },
    {
      role: "AI & Data Engineering Analyst",
      company: "Deloitte USI",
      details: "Client: Public Utility",
      period: "Sep 2021 – Jan 2024",
      description:
        "Architected a centralized AWS data lakehouse and secure ingestion framework to improve data availability, governance, and analytics access.",
      highlights: [
        "Integrated API and SAP HANA sources through NiFi ingestion pipelines, reducing retrieval latency by 40%.",
        "Implemented OAuth2-based authentication in NiFi to strengthen governance and secure high-throughput ingestion.",
        "Built a custom Python-based NiFi processor that reduced batch load time from 3 hours to 30 minutes.",
        "Maintained Airflow DAGs across NiFi, Glue, Athena, and Redshift to improve reliability and reduce manual intervention.",
        "Designed partitioned Athena tables, optimized Redshift schemas, and QuickSight dashboards for near real-time reporting used by 1,000+ business users.",
      ],
    },
    {
      role: "AI & Data Engineering Analyst",
      company: "Deloitte USI",
      details: "Client: Fortune 100 Energy Utility",
      period: "Sep 2021 – Jan 2024",
      description:
        "Modernized legacy ETL workflows and built scalable enterprise-grade data pipelines for large batch processing and downstream delivery.",
      highlights: [
        "Developed PySpark utilities on Databricks to replace legacy Informatica BDM pipelines, reducing processing time by 30%.",
        "Architected raw-to-formatted and formatted-to-curated ETL workflows across AWS S3, Databricks, and Informatica.",
        "Implemented SCD Type 1 and 2 logic with hash-based keys and audit tables for historical accuracy, lineage tracking, and compliance reporting.",
        "Optimized multi-terabyte batch jobs with performance tuning, schema validation, and error handling, cutting runtime by 25%.",
      ],
    },
    {
      role: "AI & Data Engineering Analyst",
      company: "Deloitte USI",
      details: "Client: Healthcare Provider",
      period: "Sep 2021 – Jan 2024",
      description:
        "Designed and automated ETL pipelines across multi-source relational systems to support centralized reporting and enterprise analytics.",
      highlights: [
        "Built ETL workflows in Azure Data Factory and Diyotta to integrate multi-source relational databases into a centralized data repository.",
        "Engineered a 3-layer data architecture from raw to transformed to reporting, with schema validation, deduplication, and standardized formatting.",
        "Led validation and root-cause analysis across ingestion and transformation workflows, reducing downstream reporting errors by 20%.",
      ],
    },

    {
      role: "Data Scientist Intern",
      company: "Innodatatics",
      details: "",
      period: "Jun 2019 – Aug 2019",
      description:
        "Worked on airline churn analysis using statistical testing and classical ML to identify customer retention drivers.",
      highlights: [
        "Performed EDA and feature engineering on 100K+ airline customer records.",
        "Built and validated a decision-tree churn model with 93.5% accuracy.",
        "Used ANOVA and t-tests to identify significant drivers and translate them into retention recommendations.",
      ],
    },
  ],
  projects: [
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
    {
      title: "Web Vulnerability Scanner",
      type: "ML Security Tooling",
      description:
        "Developed a GUI-based ML tool to identify phishing, SQL injection, and cross-site scripting patterns in web URLs using Random Forest-based detection.",
      tags: ["Random Forest", "Security", "GUI", "Classification"],
      link: "https://github.com/Noshitha",
    },
  ],
  hackathons: [
    {
      title: "BriefCheck",
      hackathon: "Harvey x Counsel Stack Hackathon",
      theme: "Legal Trust, Verification, and AI Reliability",
      buildTime: "24 hours",
      type: "Hackathon · Legal AI",
      description:
        "Built a rapid legal verification layer for AI-generated briefs, focused on trust scoring, citation verification, and surfacing hallucinated or outdated references.",
      tags: ["Legal AI", "Verification", "RAG", "Trust Layer"],
      link: "https://github.com/Noshitha",
    },
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
      title: "Cactus x DeepMind Hackathon Project",
      hackathon: "Cactus x DeepMind Hackathon",
      theme: "AI-assisted rapid product/system prototyping",
      buildTime: "10 hours",
      type: "Hackathon · Rapid Prototype",
      description:
        "Built a fast-moving prototype during the Cactus x DeepMind hackathon, focused on quickly turning an idea into a working system under time pressure. Emphasized rapid iteration, strong implementation speed, and technical execution under hackathon constraints without overstating unfinished parts.",
      tags: ["Hackathon", "Rapid Prototype", "AI System", "0-to-1 Build"],
      link: "https://github.com/Noshitha",
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
