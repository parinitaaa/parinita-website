/**
 * PORTFOLIO DATA SOURCE OF TRUTH
 * Parinita Chandar Salagala | GyanSys iLEAD 2027 "Build Your Story" Challenge
 * Theme: "IN THE MAKING"
 */

export const portfolioData = {
  identity: {
    name: "Parinita Chandar Salagala",
    statusBadge: "CURRENTLY EVOLVING",
    tagline: "Curiosity is where it begins. Creation is how it grows.",
    evolutionLabel: "ENGINEERING MY OWN EVOLUTION.",
    photo: "/profile.jpg",
    ctaText: "EXPLORE MY WORK ↓",
  },

  about: {
    sectionNumber: "01",
    sectionTitle: "ABOUT ME",
    headline: "Somewhere between curiosity and code, I'm finding my way.",
    pullQuote: "I don't need to know everything. I just need to stay curious enough to learn.",
    // Temporary personal introduction (easy to edit)
    storyParagraphs: [
      "I have always been drawn to the process of figuring things out. A question turns into an idea, an idea turns into an experiment, and sometimes that experiment becomes something real.",
      "Technology gives me a way to turn curiosity into creation. From exploring AI to building applications, every project teaches me something new — not just about code, but about how problems can be approached differently.",
      "I am still learning, still experimenting, and still discovering what I am capable of building.",
      "I don't have every answer yet. I have the curiosity to keep looking."
    ],
    identityNotes: [
      { label: "Curious by nature", detail: "Driven to unpack how systems, models, and algorithms work from the ground up." },
      { label: "Creative in approach", detail: "Connecting real-world human needs with clean, functional software." },
      { label: "Persistent through challenges", detail: "Working through bugs, implementation hurdles, and unexpected errors." },
      { label: "Always learning", detail: "Treating every new experiment and lesson as progress." }
    ]
  },

  projectsSection: {
    sectionNumber: "02",
    sectionTitle: "THINGS I'VE BUILT",
    headline: "Curiosity is good. Building something with it is better.",
    intro: "Every project is an opportunity to explore an idea, work through a problem, and learn something I didn't know before."
  },

  projects: [
    {
      id: "nyaysetu",
      number: "01",
      name: "NyaySetu",
      category: "AI / LEGAL TECHNOLOGY",
      shortDescription: "An AI-powered legal assistance project exploring how conversational AI and document analysis can make legal information easier to navigate.",
      stack: ["FastAPI", "React", "FAISS", "Sentence Embeddings"],
      problemExplored: "Legal terminology and statutes are often dense and hard for non-specialists to navigate. The goal was to build a clean conversational interface that retrieves relevant information without losing context.",
      whatILearned: "Learned how vector indexing with FAISS and high-dimensional semantic sentence embeddings work for retrieval-augmented systems, and how to structure communication between a FastAPI backend and a React client.",
      githubUrl: "https://github.com/parinitaaa/nyaysetu"
    },
    {
      id: "krishimitra",
      number: "02",
      name: "KrishiMitra",
      category: "AI / AGRICULTURE",
      shortDescription: "An AI-powered farming assistance project exploring how plant disease identification, crop information, and conversational guidance can help farmers access useful information.",
      stack: ["React Native", "Expo", "FastAPI", "ML Model Integration"],
      problemExplored: "Crop pathology diagnosis can often be delayed when farmers lack timely assistance. The project explores using leaf image capture on mobile devices to provide quick diagnostic insights.",
      whatILearned: "Learned the nuances of handling camera inputs, image pre-processing for vision models, and building an accessible mobile workflow using React Native and Expo.",
      githubUrl: "https://github.com/parinitaaa/KrishiMitra.git"
    }
  ],

  exploring: {
    sectionNumber: "03",
    sectionTitle: "WHAT I'M EXPLORING",
    headline: "There's always something beyond what I know.",
    subtext: "Topics and domains I actively study and experiment with:",
    topics: [
      { title: "Artificial Intelligence", category: "FOUNDATIONS", description: "Core concepts, intelligent agents, and reasoning systems." },
      { title: "Machine Learning", category: "METHODS", description: "Statistical modeling, optimization, and training dynamics." },
      { title: "Deep Learning", category: "ARCHITECTURES", description: "Neural networks, transformer attention, and representations." },
      { title: "Generative AI", category: "FRONTIER", description: "Vision-language systems, embeddings, and prompt design." },
      { title: "Software Engineering", category: "PRACTICE", description: "Clean code structure, modular APIs, and modern frontend craft." },
      { title: "Creative Problem Solving", category: "MINDSET", description: "Breaking complex, open-ended problems into practical steps." },
      { title: "Building Useful Products", category: "PURPOSE", description: "Creating software that delivers tangible value to real people." }
    ]
  },

  contact: {
    sectionNumber: "04",
    sectionTitle: "CONNECT",
    headline: "Have an idea? Let's explore it.",
    supportingCopy: "I'm always interested in learning, exchanging ideas, and discovering what we can build next.",
    socialLinks: {
      github: "https://github.com/parinitaaa/",
      linkedin: "https://www.linkedin.com/in/parinita-salagala-5149a72a1/",
      email: null // omitted gracefully until specified
    },
    closingSignature: "Still learning. Still building. Still becoming."
  }
};
