import { images } from "@/lib/images";

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  includes: string[];
  suitableFor: string[];
  process: ServiceProcessStep[];
};

export const services: Service[] = [
  {
    slug: "research-proposal",
    number: "01",
    title: "Research Proposal Support",
    shortDescription:
      "Build a clear and structured research proposal with a strong academic direction.",
    description:
      "A strong research project starts with a clear direction. We provide structured support to help develop your research idea into a focused proposal with a logical problem statement, research objectives, research questions, scope, and appropriate research direction.",
    image: images.services.proposalSupport,

    includes: [
      "Topic development",
      "Problem statement",
      "Research objectives",
      "Research questions",
      "Research scope",
      "Proposal structure",
    ],

    suitableFor: [
      "Students starting a new research project",
      "Students preparing a research proposal",
      "Researchers refining an existing research idea",
    ],

    process: [
      {
        title: "Understand",
        description:
          "We first understand your research topic, academic requirements, research idea, and current direction.",
      },
      {
        title: "Structure",
        description:
          "Your research idea is organised into clear objectives, questions, scope, and a logical proposal structure.",
      },
      {
        title: "Refine",
        description:
          "The major parts of the proposal are reviewed for clarity, consistency, scope, and connection.",
      },
    ],
  },

  {
    slug: "thesis-dissertation",
    number: "02",
    title: "Thesis & Dissertation Support",
    shortDescription:
      "Structured support across the major stages of undergraduate, postgraduate, and dissertation research.",
    description:
      "Thesis and dissertation projects involve several connected stages. We provide structured support across research planning, chapter development, methodology, literature review, analysis, academic writing, formatting, and final review.",
    image: images.services.thesisAndDissertation,

    includes: [
      "Research structure",
      "Chapter organisation",
      "Research methodology guidance",
      "Literature review support",
      "Data analysis support",
      "Formatting and final review",
    ],

    suitableFor: [
      "Undergraduate thesis students",
      "Postgraduate dissertation students",
      "Students completing larger research projects",
    ],

    process: [
      {
        title: "Plan",
        description:
          "The research project is organised around its objectives, chapters, methodology, and expected outcomes.",
      },
      {
        title: "Develop",
        description:
          "Structured support is provided across the relevant chapters and research stages.",
      },
      {
        title: "Finalise",
        description:
          "The completed research document is reviewed for structure, consistency, formatting, and academic presentation.",
      },
    ],
  },

  {
    slug: "literature-review",
    number: "03",
    title: "Literature Review",
    shortDescription:
      "Organise academic literature into a structured review that connects existing research with your study.",
    description:
      "A literature review should do more than summarise academic sources. It should show what is already known, identify important themes and differences, highlight research gaps, and establish where your research fits within existing academic work.",
    image: images.services.literatureReview,

    includes: [
      "Literature organisation",
      "Theme identification",
      "Source synthesis",
      "Research gap development",
      "Critical discussion",
      "Academic structure",
    ],

    suitableFor: [
      "Undergraduate research projects",
      "Postgraduate dissertations",
      "Students finding it difficult to structure academic literature",
    ],

    process: [
      {
        title: "Organise",
        description:
          "Relevant academic sources are organised around the main themes and concepts connected to your research.",
      },
      {
        title: "Connect",
        description:
          "Existing findings are compared to identify similarities, differences, and important research themes.",
      },
      {
        title: "Develop the Gap",
        description:
          "The literature is connected to your study to establish the research gap and rationale for your research.",
      },
    ],
  },

  {
    slug: "methodology",
    number: "04",
    title: "Research Methodology",
    shortDescription:
      "Develop and structure the methodology around your research question and study design.",
    description:
      "A well-structured research methodology explains how the research will be conducted and why the selected methods are appropriate. We provide guidance in developing a methodology that aligns with your research questions, objectives, study design, data collection, and analysis.",
    image: images.services.methodology,

    includes: [
      "Research design",
      "Research approach",
      "Sampling approach",
      "Data collection methods",
      "Variables and measurement",
      "Data analysis methods",
    ],

    suitableFor: [
      "Students designing a research study",
      "Research proposal development",
      "Students developing a dissertation methodology chapter",
    ],

    process: [
      {
        title: "Define the Design",
        description:
          "The research questions and objectives are considered when determining an appropriate research design.",
      },
      {
        title: "Plan Data Collection",
        description:
          "The methodology is structured around participants, data sources, research instruments, and collection procedures.",
      },
      {
        title: "Connect to Analysis",
        description:
          "The selected methods are aligned with how the collected data will be analysed and interpreted.",
      },
    ],
  },

  {
    slug: "data-analysis",
    number: "05",
    title: "Data Analysis",
    shortDescription:
      "Prepare, analyse, interpret, and present research data in a clear academic format.",
    description:
      "Research data needs to be carefully prepared and analysed so that findings can be presented clearly and meaningfully. Support may include data preparation, data cleaning, statistical analysis, visualisation, interpretation, and academic presentation of results.",
    image: images.services.dataAnalysis,

    includes: [
      "Data preparation",
      "Data cleaning",
      "Statistical analysis",
      "Tables and visualisation",
      "Result interpretation",
      "Academic presentation",
    ],

    suitableFor: [
      "Quantitative research projects",
      "Survey-based studies",
      "Students working with research datasets",
    ],

    process: [
      {
        title: "Prepare",
        description:
          "The dataset is reviewed and prepared for the required research analysis.",
      },
      {
        title: "Analyse",
        description:
          "Appropriate analytical approaches are selected according to the research questions and study design.",
      },
      {
        title: "Present",
        description:
          "Results are organised into clear tables, visualisations, and academic interpretations.",
      },
    ],
  },

  {
    slug: "academic-writing",
    number: "06",
    title: "Academic Writing Support",
    shortDescription:
      "Improve the clarity, consistency, structure, and academic presentation of your research document.",
    description:
      "Academic writing requires clarity, consistency, logical structure, and appropriate presentation. We provide support to improve research documents while maintaining the intended meaning, research direction, and academic purpose of the work.",
    image: images.whyChooseUs.academicQuality,

    includes: [
      "Academic editing",
      "Proofreading",
      "Grammar and clarity",
      "Structure improvement",
      "Referencing support",
      "Document formatting",
    ],

    suitableFor: [
      "Students writing theses and dissertations",
      "Authors preparing research papers",
      "Students preparing final academic submissions",
    ],

    process: [
      {
        title: "Review",
        description:
          "The document is reviewed for structure, clarity, consistency, language, and academic presentation.",
      },
      {
        title: "Improve",
        description:
          "Areas affecting readability and academic clarity are refined while preserving the intended meaning.",
      },
      {
        title: "Final Review",
        description:
          "Consistency, formatting, referencing, and overall document presentation are checked.",
      },
    ],
  },

  {
    slug: "research-guidance",
    number: "07",
    title: "Research Guidance",
    shortDescription:
      "Get practical guidance when you are unsure about your research direction, methodology, analysis, or next steps.",
    description:
      "Research does not always move in a straight line. You may have a research idea but be unsure about your methodology, literature review, analysis, or next step. Research guidance provides focused academic support to help you understand your options and move forward with greater clarity.",
    image: images.whyChooseUs.researchGuidance,

    includes: [
      "Research direction",
      "Topic refinement",
      "Methodology guidance",
      "Research planning",
      "Analysis guidance",
      "Next-step planning",
    ],

    suitableFor: [
      "Students unsure where to begin",
      "Researchers facing a research challenge",
      "Students who need guidance at a specific research stage",
    ],

    process: [
      {
        title: "Understand",
        description:
          "We understand your current research stage, challenge, academic requirements, and immediate needs.",
      },
      {
        title: "Identify",
        description:
          "The main research issue is broken down into clear areas that need attention.",
      },
      {
        title: "Guide",
        description:
          "Practical guidance is provided around the most appropriate next steps for your research.",
      },
    ],
  },

  {
    slug: "project-academic-support",
    number: "08",
    title: "Project & Academic Support",
    shortDescription:
      "Structured support for academic projects and research-related work across different subjects and academic levels.",
    description:
      "Academic projects can involve research, planning, writing, analysis, presentation, and final preparation. We provide structured support for research-related academic work while keeping the requirements and academic level of each project in focus.",
    image: images.services.academicSupport,

    includes: [
      "Academic project planning",
      "Research support",
      "Project structure",
      "Academic writing",
      "Data and analysis support",
      "Final review",
    ],

    suitableFor: [
      "Undergraduate academic projects",
      "Postgraduate academic work",
      "Research-related academic assignments and projects",
    ],

    process: [
      {
        title: "Understand",
        description:
          "We review your project requirements, academic level, subject, scope, and expected outcome.",
      },
      {
        title: "Structure",
        description:
          "The project is organised into clear research, writing, analysis, and presentation requirements.",
      },
      {
        title: "Develop",
        description:
          "Support is provided around the specific academic and research requirements of the project.",
      },
    ],
  },
];