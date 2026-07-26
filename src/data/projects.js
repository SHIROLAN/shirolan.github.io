export const projects = [
  {
    title: 'Chronos',
    description: 'Event-driven audit trail system that records every data change, reconstructs historical object states through event replay, and enables time-travel queries using Kafka, MongoDB, Redis, and FastAPI.',
    summary: 'Chronos is an event-driven audit trail platform built with Event Sourcing architecture. It captures every change made to business entities via Apache Kafka, stores immutable events and versioned snapshots in MongoDB, accelerates replay with Redis caching, and exposes REST APIs through FastAPI for querying historical data at any point in time.',
    tags: [
      { label: 'Backend', class: 'tag-distributed' },
      { label: 'API', class: 'tag-api' },
      { label: 'Open Source', class: 'tag-oss' }
    ],
    stack: ['Python', 'FastAPI', 'Apache Kafka', 'MongoDB', 'Redis', 'Docker', 'Pydantic'],
    links: [
      { label: 'GitHub', url: 'https://github.com/SHIROLAN/chronos', icon: 'github' },
      { label: 'Coming Soon', url: '#', icon: 'external', disabled: true }
    ]
  },
  {
    title: 'AutoTranscribe',
    description: 'Production-ready AI transcription system that automatically monitors folders, detects new media files, and generates transcripts using OpenAI Whisper with real-time processing and recovery capabilities.',
    summary: 'AutoTranscribe is a Python-based automation tool that leverages OpenAI Whisper to automatically transcribe audio and video files. It recursively scans directories, generates transcript files alongside the original media, and continuously monitors folders to process newly added files in real time. Built with production-ready practices including modular architecture, configuration management, structured logging, duplicate detection, and interruption recovery.',
    tags: [
      { label: 'AI', class: 'tag-ai' },
      { label: 'Dev Tools', class: 'tag-devtools' },
      { label: 'Open Source', class: 'tag-oss' }
    ],
    stack: ['Python', 'OpenAI Whisper', 'PyTorch', 'Watchdog', 'FFmpeg', 'pytest'],
    links: [
      { label: 'GitHub', url: 'https://github.com/SHIROLAN/AutoTranscribe-Real-Time-Media-Transcription-System', icon: 'github' },
      { label: 'Coming Soon', url: '#', icon: 'external', disabled: true }
    ]
  },
  {
    title: 'DocMind',
    description: 'Open-source RAG framework for building agentic LLM applications.',
    summary: 'DocMind is a Retrieval-Augmented Generation (RAG) application that enables users to upload one or more PDF documents and interact with them through a conversational interface. The system uses semantic search to retrieve the most relevant document chunks and leverages a Large Language Model (LLM) to generate accurate, context-aware answers with source citations.',
    tags: [
      { label: 'AI', class: 'tag-ai' },
      { label: 'Web', class: 'tag-web' },
      { label: 'Open Source', class: 'tag-oss' }
    ],
    stack: ['Langchain', 'Ollama', 'FAISS', 'HuggingFace', 'Streamlit Community Cloud'],
    links: [
      { label: 'GitHub', url: 'https://github.com/SHIROLAN/docmind', icon: 'github' },
      { label: 'Live Demo', url: 'https://docmind-z8slyvhplls9z4zzc3hutu.streamlit.app/', icon: 'external' }
    ]
  },
  {
    title: 'ResearchAgent',
    description: 'Autonomous multi-step research agent powered by LangGraph and live web search.',
    summary: 'A stateful agent that plans, searches, reads, and synthesizes multi-source reports on any topic. Includes a human-in-the-loop approval step and exports to Markdown.',
    tags: [
      { label: 'AI', class: 'tag-ai' },
      { label: 'API', class: 'tag-api' }
    ],
    stack: ['LangGraph', 'Tavily API', 'FastAPI', 'Redis'],
    links: [
      { label: 'GitHub', url: '#', icon: 'github' },
      { label: 'Live Demo', url: 'https://docmind-z8slyvhplls9z4zzc3hutu.streamlit.app/', icon: 'external' }
    ]
  },
  {
    title: 'Synthex SaaS',
    description: 'B2B content intelligence platform — AI writes, edits, and scores long-form copy at scale.',
    summary: 'Full-stack SaaS with Stripe billing, team workspaces, and a custom fine-tuned GPT-4 variant for brand-voice consistency. Serves 1,200+ paying users.',
    tags: [
      { label: 'Web', class: 'tag-web' },
      { label: 'AI', class: 'tag-ai' }
    ],
    stack: ['Next.js', 'tRPC', 'OpenAI', 'Supabase', 'Stripe'],
    links: [
      { label: 'Live Demo', url: '#', icon: 'external' }
    ]
  },
  {
    title: 'llm-eval-kit',
    description: 'Lightweight CLI for running structured evals against any OpenAI-compatible endpoint.',
    summary: 'Configurable test suites via YAML, supports factuality, toxicity, and custom rubric grading. Integrates with CI pipelines. 800+ GitHub stars.',
    tags: [
      { label: 'CLI', class: 'tag-cli' },
      { label: 'Open Source', class: 'tag-oss' }
    ],
    stack: ['Python', 'Typer', 'Rich', 'YAML'],
    links: [
      { label: 'GitHub', url: '#', icon: 'github' }
    ]
  }
]
