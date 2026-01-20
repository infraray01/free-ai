// api.js - JavaScript for API page with Load More functionality

// API Data - 100% Free AI APIs (verified)
const freeAPIs = [
    {
        "id": 1,
        "name": "Google Gemini API",
        "description": "Google's multimodal AI model with free tier: 60 requests per minute. Supports text, code, and reasoning tasks.",
        "category": "llm",
        "features": ["60 requests per minute", "All Gemini models", "Multimodal capabilities", "System instructions"],
        "url": "https://ai.google.dev/gemini-api/docs",
        "free": true,
        "icon": "fab fa-google",
        "guide": {
            "steps": [
                "Go to Google AI Studio and click 'Get API Key'",
                "Create new project or select existing",
                "Copy your API key (starts with AIzaSy)",
                "Install library: pip install google-generativeai",
                "Configure and make your first request"
            ],
            "requirements": ["Google account", "Python/Node.js", "Internet connection"],
            "useCases": ["Chatbots", "Content generation", "Code explanation", "Data analysis"]
        }
    },
    {
        "id": 2,
        "name": "Hugging Face Inference API",
        "description": "Access to 100,000+ open-source AI models with free tier. Includes text, image, audio models.",
        "category": "llm",
        "features": ["100,000+ models", "Text/Image/Audio", "Community models", "Open source"],
        "url": "https://huggingface.co/inference-api",
        "free": true,
        "icon": "fas fa-heart",
        "guide": {
            "steps": [
                "Create account on Hugging Face",
                "Generate access token in Settings",
                "Use curl or Python requests",
                "Select model from model hub",
                "Make inference requests"
            ],
            "requirements": ["Hugging Face account", "Access token", "Basic HTTP knowledge"],
            "useCases": ["Model testing", "Prototyping", "Research", "App integration"]
        }
    },
    {
        "id": 3,
        "name": "Cohere Generate API",
        "description": "Text generation API with free tier: 5 API calls per minute, 100 calls per day.",
        "category": "llm",
        "features": ["5 calls/minute", "Command model", "Summarization", "Embeddings"],
        "url": "https://dashboard.cohere.com/api-keys",
        "free": true,
        "icon": "fas fa-terminal",
        "guide": {
            "steps": [
                "Sign up on Cohere platform",
                "Navigate to API Keys section",
                "Generate free API key",
                "Install: pip install cohere",
                "Initialize client with API key"
            ],
            "requirements": ["Email verification", "Python 3.7+", "Cohere account"],
            "useCases": ["Content creation", "Summarization", "Classification", "Semantic search"]
        }
    },
    {
        "id": 4,
        "name": "Together AI API",
        "description": "$25 free monthly credits for accessing Llama 2, Mistral, and CodeLlama models.",
        "category": "llm",
        "features": ["$25 monthly credits", "Llama 2/Mistral", "Code generation", "Fine-tuning"],
        "url": "https://api.together.xyz",
        "free": true,
        "icon": "fas fa-users",
        "guide": {
            "steps": [
                "Register on Together AI website",
                "Get API key from dashboard",
                "Check available models list",
                "Install SDK: pip install together",
                "Make requests with model name"
            ],
            "requirements": ["Together AI account", "API key", "Credit card (not charged)"],
            "useCases": ["Chat applications", "Code completion", "Research", "Experimentation"]
        }
    },
    {
        "id": 5,
        "name": "Replicate API",
        "description": "$5 free monthly credits for running thousands of open-source AI models in the cloud.",
        "category": "llm",
        "features": ["$5 monthly credits", "1000+ models", "Stable Diffusion", "Auto-scaling"],
        "url": "https://replicate.com/pricing",
        "free": true,
        "icon": "fas fa-play",
        "guide": {
            "steps": [
                "Create Replicate account",
                "Get API token from account",
                "Browse model library",
                "Install: pip install replicate",
                "Run models via API"
            ],
            "requirements": ["GitHub/Email account", "Python/Node.js", "Replicate token"],
            "useCases": ["Image generation", "ML prototyping", "Model testing", "App integration"]
        }
    },
    {
        "id": 6,
        "name": "Codeium API",
        "description": "Completely free AI code completion API for individuals with unlimited usage.",
        "category": "code",
        "features": ["Unlimited usage", "70+ languages", "IDE integrations", "Privacy focused"],
        "url": "https://codeium.com/pricing",
        "free": true,
        "icon": "fas fa-laptop-code",
        "guide": {
            "steps": [
                "Sign up on Codeium website",
                "Get API key from dashboard",
                "Install IDE extension",
                "Configure API endpoint",
                "Start getting completions"
            ],
            "requirements": ["Developer account", "IDE (VSCode/JetBrains)", "Internet connection"],
            "useCases": ["Code completion", "Refactoring", "Documentation", "Learning to code"]
        }
    },
    {
        "id": 7,
        "name": "Tabnine API",
        "description": "Free AI code completion for individual developers with all major language support.",
        "category": "code",
        "features": ["Free for individuals", "All languages", "Local processing", "GitHub integration"],
        "url": "https://www.tabnine.com/pricing",
        "free": true,
        "icon": "fas fa-code",
        "guide": {
            "steps": [
                "Download Tabnine for your IDE",
                "Create free account",
                "Configure preferences",
                "Enable API access",
                "Start coding with AI"
            ],
            "requirements": ["IDE installation", "Tabnine account", "Developer machine"],
            "useCases": ["Autocomplete", "Code generation", "Bug detection", "Learning assistance"]
        }
    },
    {
        "id": 8,
        "name": "AssemblyAI Speech-to-Text",
        "description": "5 hours of free transcription per month with high accuracy speech recognition API.",
        "category": "speech",
        "features": ["5 hours/month free", "Real-time streaming", "Speaker diarization", "Content moderation"],
        "url": "https://www.assemblyai.com/pricing",
        "free": true,
        "icon": "fas fa-microphone",
        "guide": {
            "steps": [
                "Sign up for AssemblyAI",
                "Get API key from dashboard",
                "Upload audio file or stream",
                "Choose transcription model",
                "Get JSON response"
            ],
            "requirements": ["Audio/video files", "AssemblyAI account", "Internet connection"],
            "useCases": ["Meeting transcription", "Podcast subtitles", "Customer service", "Content creation"]
        }
    },
    {
        "id": 9,
        "name": "Deepgram Speech API",
        "description": "$200 in free credits for speech recognition with real-time and pre-recorded options.",
        "category": "speech",
        "features": ["$200 free credits", "Real-time streaming", "Multiple languages", "Custom models"],
        "url": "https://deepgram.com/pricing",
        "free": true,
        "icon": "fas fa-wave-square",
        "guide": {
            "steps": [
                "Create Deepgram account",
                "Get API key from console",
                "Choose model (nova, etc.)",
                "Stream or upload audio",
                "Process transcription"
            ],
            "requirements": ["Deepgram account", "Audio source", "HTTP client"],
            "useCases": ["Voice apps", "Call center analytics", "Media transcription", "Accessibility"]
        }
    },
    {
        "id": 10,
        "name": "ElevenLabs Text-to-Speech",
        "description": "10,000 characters free per month with realistic AI voices in multiple languages.",
        "category": "speech",
        "features": ["10,000 chars/month", "30+ languages", "Voice cloning", "Emotional control"],
        "url": "https://elevenlabs.io/api",
        "free": true,
        "icon": "fas fa-volume-up",
        "guide": {
            "steps": [
                "Register on ElevenLabs",
                "Get API key from profile",
                "Choose voice from library",
                "Convert text to speech",
                "Download MP3 output"
            ],
            "requirements": ["ElevenLabs account", "Text input", "Audio player"],
            "useCases": ["Audiobook creation", "Video narration", "Podcast production", "Accessibility tools"]
        }
    },
    {
        "id": 11,
        "name": "Stability AI Image API",
        "description": "Free credits for Stable Diffusion 3 and SDXL image generation via API.",
        "category": "vision",
        "features": ["Free credits", "SD3/SDXL models", "Image-to-image", "Inpainting"],
        "url": "https://platform.stability.ai",
        "free": true,
        "icon": "fas fa-palette",
        "guide": {
            "steps": [
                "Create Stability AI account",
                "Generate API key",
                "Install stability-sdk",
                "Choose engine ID",
                "Generate images from prompts"
            ],
            "requirements": ["Stability AI account", "Python/Node.js", "API key"],
            "useCases": ["Art generation", "Marketing visuals", "Concept art", "Product design"]
        }
    },
    {
        "id": 12,
        "name": "Replicate Image Models",
        "description": "Access to hundreds of image generation models with $5 monthly free credits.",
        "category": "vision",
        "features": ["$5 monthly credits", "100+ image models", "ControlNet", "Upscaling"],
        "url": "https://replicate.com/explore?tag=image-generation",
        "free": true,
        "icon": "fas fa-image",
        "guide": {
            "steps": [
                "Sign up on Replicate",
                "Get API token",
                "Browse image models",
                "Run model with prompt",
                "Download generated image"
            ],
            "requirements": ["Replicate account", "Image prompts", "Basic Python"],
            "useCases": ["Prototyping", "Content creation", "AI art", "Social media"]
        }
    },
    {
        "id": 13,
        "name": "Hugging Face Vision API",
        "description": "Free access to computer vision models including CLIP, BLIP, and image classifiers.",
        "category": "vision",
        "features": ["Free inference", "CLIP/BLIP models", "Object detection", "Image captioning"],
        "url": "https://huggingface.co/tasks/computer-vision",
        "free": true,
        "icon": "fas fa-eye",
        "guide": {
            "steps": [
                "Get Hugging Face token",
                "Upload image or provide URL",
                "Select vision model",
                "Make API request",
                "Get classification results"
            ],
            "requirements": ["Hugging Face account", "Image files", "HTTP client"],
            "useCases": ["Image tagging", "Content moderation", "Visual search", "Accessibility"]
        }
    },
    {
        "id": 14,
        "name": "OpenAI Whisper API",
        "description": "Free access via Hugging Face to state-of-the-art speech recognition model.",
        "category": "speech",
        "features": ["Free access", "99 languages", "Timestamp generation", "Word-level confidence"],
        "url": "https://huggingface.co/openai/whisper-large-v2",
        "free": true,
        "icon": "fas fa-assistive-listening-systems",
        "guide": {
            "steps": [
                "Get Hugging Face token",
                "Upload audio file",
                "Use whisper-large-v2",
                "Process via inference API",
                "Get transcript JSON"
            ],
            "requirements": ["Audio file (mp3/wav)", "Hugging Face account", "Python/curl"],
            "useCases": ["Transcription service", "Subtitle generation", "Meeting notes", "Research"]
        }
    },
    {
        "id": 15,
        "name": "Bark Text-to-Speech",
        "description": "Completely free text-to-speech model via Hugging Face with expressive voices.",
        "category": "speech",
        "features": ["100% free", "Expressive speech", "Music generation", "Sound effects"],
        "url": "https://huggingface.co/suno/bark",
        "free": true,
        "icon": "fas fa-music",
        "guide": {
            "steps": [
                "Access Bark on Hugging Face",
                "Use inference API",
                "Input text with voice prompts",
                "Generate audio",
                "Download output"
            ],
            "requirements": ["Hugging Face account", "Text input", "Audio player"],
            "useCases": ["Voiceovers", "Audiobooks", "Game dialogue", "Educational content"]
        }
    },
    {
        "id": 16,
        "name": "Sentence Transformers API",
        "description": "Free text embedding API for semantic search and similarity via Hugging Face.",
        "category": "llm",
        "features": ["Free embeddings", "Multiple models", "Semantic search", "Sentence similarity"],
        "url": "https://huggingface.co/sentence-transformers",
        "free": true,
        "icon": "fas fa-project-diagram",
        "guide": {
            "steps": [
                "Choose embedding model",
                "Get Hugging Face token",
                "Send text to API",
                "Receive vector embeddings",
                "Use for similarity search"
            ],
            "requirements": ["Text data", "Hugging Face account", "Vector database (optional)"],
            "useCases": ["Search engines", "Recommendation systems", "Clustering", "Duplication detection"]
        }
    },
    {
        "id": 17,
        "name": "Qdrant Cloud",
        "description": "1GB free forever vector database for storing and searching AI embeddings.",
        "category": "data",
        "features": ["1GB free forever", "Fast similarity search", "Filtering", "Distributed"],
        "url": "https://qdrant.tech/cloud",
        "free": true,
        "icon": "fas fa-database",
        "guide": {
            "steps": [
                "Sign up for Qdrant Cloud",
                "Create free cluster",
                "Get API endpoint/key",
                "Install qdrant-client",
                "Upload and search vectors"
            ],
            "requirements": ["Vector embeddings", "Qdrant account", "Python/Rust client"],
            "useCases": ["Semantic search", "Recommendations", "Anomaly detection", "Image search"]
        }
    },
    {
        "id": 18,
        "name": "Groq API",
        "description": "Free tier for ultra-fast LLM inference using LPUs with Llama 2 and Mixtral.",
        "category": "llm",
        "features": ["Free tier", "Extremely fast", "Llama 2/Mixtral", "High throughput"],
        "url": "https://console.groq.com",
        "free": true,
        "icon": "fas fa-bolt",
        "guide": {
            "steps": [
                "Register on GroqCloud",
                "Get API key",
                "Choose model (mixtral-8x7b, etc.)",
                "Install groq Python SDK",
                "Make requests"
            ],
            "requirements": ["Groq account", "API key", "Python 3.8+"],
            "useCases": ["Real-time chatbots", "High-volume processing", "Interactive apps", "Benchmarking"]
        }
    },
    {
        "id": 19,
        "name": "Anthropic Claude API",
        "description": "Limited free tier access to Claude models for reasoning and conversation.",
        "category": "llm",
        "features": ["Free limited access", "Claude models", "Constitutional AI", "Long context"],
        "url": "https://console.anthropic.com",
        "free": true,
        "icon": "fas fa-brain",
        "guide": {
            "steps": [
                "Sign up on Anthropic",
                "Request API access",
                "Get API key",
                "Install anthropic SDK",
                "Start with free quota"
            ],
            "requirements": ["Anthropic approval", "API key", "Python/TypeScript"],
            "useCases": ["Reasoning tasks", "Document analysis", "Ethical AI", "Research"]
        }
    },
    {
        "id": 20,
        "name": "OpenRouter API",
        "description": "Free daily credits for accessing multiple AI models through unified API.",
        "category": "llm",
        "features": ["Daily free credits", "30+ models", "Unified API", "Cost comparison"],
        "url": "https://openrouter.ai/credits",
        "free": true,
        "icon": "fas fa-route",
        "guide": {
            "steps": [
                "Create OpenRouter account",
                "Get API key",
                "Check free credits",
                "Choose model from list",
                "Make requests"
            ],
            "requirements": ["OpenRouter account", "API key", "Model selection"],
            "useCases": ["Model comparison", "Cost optimization", "Multi-model apps", "Experimentation"]
        }
    },
    {
        "id": 21,
        "name": "Ollama Local API",
        "description": "100% free local API for running Llama 2, Mistral, and CodeLlama on your machine.",
        "category": "llm",
        "features": ["100% free local", "No internet needed", "Many models", "Easy setup"],
        "url": "https://github.com/ollama/ollama",
        "free": true,
        "icon": "fas fa-server",
        "guide": {
            "steps": [
                "Install Ollama on your OS",
                "Pull model: ollama pull llama2",
                "Start Ollama serve",
                "Access localhost:11434",
                "Make API requests"
            ],
            "requirements": ["Local machine", "8GB+ RAM", "Command line"],
            "useCases": ["Offline AI", "Privacy-sensitive apps", "Development", "Learning"]
        }
    },
    {
        "id": 22,
        "name": "LocalAI API",
        "description": "Self-hosted, free API compatible with OpenAI for running local models.",
        "category": "llm",
        "features": ["Self-hosted", "OpenAI compatible", "Many models", "No internet"],
        "url": "https://github.com/mudler/LocalAI",
        "free": true,
        "icon": "fas fa-home",
        "guide": {
            "steps": [
                "Clone LocalAI repository",
                "Download model files",
                "Configure config file",
                "Start LocalAI server",
                "Use like OpenAI API"
            ],
            "requirements": ["Docker or Go", "Model files", "Local storage"],
            "useCases": ["Private chatbots", "Internal tools", "Data security", "Cost reduction"]
        }
    },
    {
        "id": 23,
        "name": "Google Translate API",
        "description": "500,000 characters free per month for translating between 100+ languages.",
        "category": "translation",
        "features": ["500k chars/month free", "100+ languages", "Real-time", "Batch translation"],
        "url": "https://cloud.google.com/translate/docs/reference/rest",
        "free": true,
        "icon": "fab fa-google",
        "guide": {
            "steps": [
                "Create Google Cloud account",
                "Enable Translate API",
                "Create API credentials",
                "Install google-cloud-translate",
                "Start translating"
            ],
            "requirements": ["Google Cloud account", "Billing account (not charged)", "Project"],
            "useCases": ["Website localization", "Document translation", "Multilingual apps", "Content creation"]
        }
    },
    {
        "id": 24,
        "name": "DeepL API Free",
        "description": "500,000 characters free per month for high-quality translation between languages.",
        "category": "translation",
        "features": ["500k chars/month", "High accuracy", "Formal/informal", "Document translation"],
        "url": "https://www.deepl.com/pro-api",
        "free": true,
        "icon": "fas fa-language",
        "guide": {
            "steps": [
                "Sign up for DeepL Free",
                "Get API key",
                "Choose source/target language",
                "Send text via API",
                "Receive translation"
            ],
            "requirements": ["DeepL account", "Text to translate", "HTTP client"],
            "useCases": ["Business translation", "Academic papers", "Website content", "Customer support"]
        }
    },
    {
        "id": 25,
        "name": "LibreTranslate API",
        "description": "100% free, self-hosted translation API with open-source machine translation.",
        "category": "translation",
        "features": ["100% free open source", "Self-hosted", "20+ languages", "Privacy focused"],
        "url": "https://libretranslate.com",
        "free": true,
        "icon": "fas fa-lock",
        "guide": {
            "steps": [
                "Install Docker on server",
                "Run LibreTranslate container",
                "Access web interface",
                "Get API key from settings",
                "Use REST API"
            ],
            "requirements": ["Server with Docker", "Internet connection", "Basic terminal skills"],
            "useCases": ["Private translation", "Internal documents", "Research", "Privacy apps"]
        }
    },
    {
        "id": 26,
        "name": "Weaviate Cloud",
        "description": "Free tier vector database with 10GB storage for AI-powered search applications.",
        "category": "data",
        "features": ["10GB free", "Vector search", "Hybrid search", "GraphQL/REST"],
        "url": "https://weaviate.io/pricing",
        "free": true,
        "icon": "fas fa-search",
        "guide": {
            "steps": [
                "Sign up for Weaviate Cloud",
                "Create free sandbox",
                "Get cluster URL/API key",
                "Install weaviate-client",
                "Upload and search data"
            ],
            "requirements": ["Weaviate account", "Data to vectorize", "Python/JavaScript"],
            "useCases": ["Semantic search", "Recommendation engines", "Knowledge graphs", "Fraud detection"]
        }
    },
    {
        "id": 27,
        "name": "Pinecone Free Tier",
        "description": "Free vector database with 100K vectors and basic search capabilities.",
        "category": "data",
        "features": ["100K vectors free", "Basic search", "Metadata filtering", "REST API"],
        "url": "https://www.pinecone.io/pricing",
        "free": true,
        "icon": "fas fa-pineapple",
        "guide": {
            "steps": [
                "Create Pinecone account",
                "Create free index",
                "Get API key/environment",
                "Install pinecone-client",
                "Upsert and query vectors"
            ],
            "requirements": ["Pinecone account", "Vector embeddings", "Python client"],
            "useCases": ["Similarity search", "Recommendations", "Anomaly detection", "Content matching"]
        }
    },
    {
        "id": 28,
        "name": "Jina AI Embeddings",
        "description": "Free text embedding API with multilingual support and semantic search.",
        "category": "llm",
        "features": ["Free embeddings", "Multilingual", "Semantic search", "REST API"],
        "url": "https://jina.ai/embeddings",
        "free": true,
        "icon": "fas fa-layer-group",
        "guide": {
            "steps": [
                "Sign up on Jina AI",
                "Get API key",
                "Choose embedding model",
                "Send text via API",
                "Get vector embeddings"
            ],
            "requirements": ["Jina AI account", "Text data", "HTTP client"],
            "useCases": ["Document search", "Content recommendation", "Clustering", "Duplicate detection"]
        }
    },
    {
        "id": 29,
        "name": "Fal AI Image API",
        "description": "Free credits for image generation and editing using various AI models.",
        "category": "vision",
        "features": ["Free credits", "Image generation", "Editing tools", "Fast inference"],
        "url": "https://fal.ai/pricing",
        "free": true,
        "icon": "fas fa-magic",
        "guide": {
            "steps": [
                "Create Fal AI account",
                "Get API key",
                "Browse available models",
                "Generate images",
                "Use editing features"
            ],
            "requirements": ["Fal AI account", "Image prompts", "Python/curl"],
            "useCases": ["Prototyping", "Content creation", "Design mockups", "Social media"]
        }
    },
    {
        "id": 30,
        "name": "Runway ML API",
        "description": "Free tier for AI video and image generation tools with creative controls.",
        "category": "vision",
        "features": ["Free tier", "Video generation", "Image editing", "Creative tools"],
        "url": "https://runwayml.com/api",
        "free": true,
        "icon": "fas fa-film",
        "guide": {
            "steps": [
                "Sign up for Runway ML",
                "Get API key",
                "Choose tool (gen-2, etc.)",
                "Upload media or use prompts",
                "Process via API"
            ],
            "requirements": ["Runway ML account", "Media files", "Creative prompts"],
            "useCases": ["Video editing", "Content creation", "Advertising", "Entertainment"]
        }
    },
    {
        "id": 31,
        "name": "Lalal.ai API",
        "description": "Free tier for AI stem separation to extract vocals and instruments from music.",
        "category": "speech",
        "features": ["Free minutes", "Stem separation", "Vocals/instruments", "High quality"],
        "url": "https://www.lalal.ai/api",
        "free": true,
        "icon": "fas fa-sliders-h",
        "guide": {
            "steps": [
                "Register on Lalal.ai",
                "Get API key",
                "Upload audio file",
                "Choose processing type",
                "Download separated stems"
            ],
            "requirements": ["Audio file", "Lalal.ai account", "Storage for output"],
            "useCases": ["Music production", "Karaoke tracks", "Remixing", "Audio restoration"]
        }
    },
    {
        "id": 32,
        "name": "Murf AI Voice API",
        "description": "Free trial for realistic text-to-speech with 100+ voices in 20+ languages.",
        "category": "speech",
        "features": ["Free trial", "100+ voices", "20+ languages", "Voice cloning"],
        "url": "https://murf.ai/api",
        "free": true,
        "icon": "fas fa-microphone-alt",
        "guide": {
            "steps": [
                "Sign up for Murf AI",
                "Get API credentials",
                "Choose voice/accent",
                "Convert text to speech",
                "Download audio file"
            ],
            "requirements": ["Murf AI account", "Text content", "Audio player"],
            "useCases": ["Voiceovers", "E-learning", "Podcasts", "Accessibility"]
        }
    },
    {
        "id": 33,
        "name": "Phind API",
        "description": "Free tier for AI-powered developer search and coding assistance.",
        "category": "code",
        "features": ["Free searches", "Code explanations", "Technical answers", "Web search"],
        "url": "https://www.phind.com/api",
        "free": true,
        "icon": "fas fa-search-code",
        "guide": {
            "steps": [
                "Create Phind account",
                "Get API key",
                "Ask technical questions",
                "Get code solutions",
                "Integrate into workflow"
            ],
            "requirements": ["Developer account", "Technical questions", "Programming context"],
            "useCases": ["Debugging help", "Learning coding", "Research", "Problem solving"]
        }
    },
    {
        "id": 34,
        "name": "AskCodi API",
        "description": "Free tier for AI-powered code generation, translation, and documentation.",
        "category": "code",
        "features": ["Free credits", "Code generation", "Language translation", "Documentation"],
        "url": "https://www.askcodi.com/api",
        "free": true,
        "icon": "fas fa-question-circle",
        "guide": {
            "steps": [
                "Sign up on AskCodi",
                "Get API key",
                "Describe coding task",
                "Get generated code",
                "Refine as needed"
            ],
            "requirements": ["AskCodi account", "Coding task description", "Target language"],
            "useCases": ["Code generation", "Language translation", "Documentation", "Learning"]
        }
    },
    {
        "id": 35,
        "name": "GitHub Copilot API",
        "description": "Free for students and open-source maintainers for AI pair programming.",
        "category": "code",
        "features": ["Free for students/OSS", "Code completion", "Multiple languages", "IDE integration"],
        "url": "https://github.com/features/copilot",
        "free": true,
        "icon": "fab fa-github",
        "guide": {
            "steps": [
                "Apply for student/OSS access",
                "Get approval",
                "Install Copilot extension",
                "Authenticate with GitHub",
                "Start coding with AI"
            ],
            "requirements": ["Student/OSS verification", "GitHub account", "Supported IDE"],
            "useCases": ["Learning programming", "Open source development", "Code completion", "Refactoring"]
        }
    },
    {
        "id": 36,
        "name": "Wolfram Alpha API",
        "description": "Free tier for computational knowledge and data analysis through natural language.",
        "category": "data",
        "features": ["Free requests", "Computational knowledge", "Data analysis", "Natural language"],
        "url": "https://products.wolframalpha.com/api",
        "free": true,
        "icon": "fas fa-calculator",
        "guide": {
            "steps": [
                "Sign up for Wolfram Alpha",
                "Get App ID",
                "Formulate query",
                "Make API request",
                "Parse structured result"
            ],
            "requirements": ["Wolfram Alpha account", "App ID", "Query formulation"],
            "useCases": ["Homework help", "Data analysis", "Fact checking", "Research"]
        }
    },
    {
        "id": 37,
        "name": "SerpApi Google Search",
        "description": "100 free searches per month for programmatic Google search results.",
        "category": "data",
        "features": ["100 searches/month", "Google results", "Structured data", "No CAPTCHA"],
        "url": "https://serpapi.com/pricing",
        "free": true,
        "icon": "fab fa-google",
        "guide": {
            "steps": [
                "Create SerpApi account",
                "Get API key",
                "Construct search query",
                "Get JSON results",
                "Parse data"
            ],
            "requirements": ["SerpApi account", "Search queries", "JSON parsing"],
            "useCases": ["Market research", "SEO analysis", "Competitor tracking", "Data collection"]
        }
    },
    {
        "id": 38,
        "name": "RapidAPI Hub",
        "description": "Access to 1,000+ free APIs including many AI services through unified platform.",
        "category": "data",
        "features": ["1000+ free APIs", "Unified platform", "Testing tools", "Monitoring"],
        "url": "https://rapidapi.com/hub",
        "free": true,
        "icon": "fas fa-bolt",
        "guide": {
            "steps": [
                "Create RapidAPI account",
                "Browse API marketplace",
                "Subscribe to free plan",
                "Get API key",
                "Make requests"
            ],
            "requirements": ["RapidAPI account", "API selection", "Basic HTTP"],
            "useCases": ["API exploration", "Prototyping", "Learning", "Integration testing"]
        }
    },
    {
        "id": 39,
        "name": "NewsAPI",
        "description": "Free tier for accessing news articles from 30,000+ sources worldwide.",
        "category": "data",
        "features": ["100 requests/day", "30,000+ sources", "Multiple languages", "Search/filter"],
        "url": "https://newsapi.org/pricing",
        "free": true,
        "icon": "fas fa-newspaper",
        "guide": {
            "steps": [
                "Sign up on NewsAPI",
                "Get API key",
                "Construct news query",
                "Get article data",
                "Process results"
            ],
            "requirements": ["NewsAPI account", "API key", "News topics"],
            "useCases": ["News aggregation", "Trend analysis", "Content curation", "Research"]
        }
    },
    {
        "id": 40,
        "name": "IBM Watson NLP",
        "description": "Free Lite plan for natural language processing and text analysis.",
        "category": "llm",
        "features": ["Free Lite plan", "Sentiment analysis", "Entity recognition", "Syntax analysis"],
        "url": "https://www.ibm.com/cloud/watson-natural-language-understanding/pricing",
        "free": true,
        "icon": "fab fa-ibm",
        "guide": {
            "steps": [
                "Create IBM Cloud account",
                "Create Watson NLP instance",
                "Get API credentials",
                "Install watsonx library",
                "Analyze text"
            ],
            "requirements": ["IBM Cloud account", "Text data", "Python/Node.js"],
            "useCases": ["Sentiment analysis", "Content categorization", "Entity extraction", "Social media monitoring"]
        }
    },
    {
        "id": 41,
        "name": "Google Cloud Vision API",
        "description": "1,000 units free per month for image analysis, label detection, and OCR.",
        "category": "vision",
        "features": ["1,000 units/month", "Label detection", "OCR", "Face detection"],
        "url": "https://cloud.google.com/vision/pricing",
        "free": true,
        "icon": "fab fa-google",
        "guide": {
            "steps": [
                "Create Google Cloud account",
                "Enable Vision API",
                "Get API key",
                "Install google-cloud-vision",
                "Analyze images"
            ],
            "requirements": ["Google Cloud account", "Billing setup (no charge)", "Images"],
            "useCases": ["Image moderation", "Document digitization", "Product recognition", "Accessibility"]
        }
    },
    {
        "id": 42,
        "name": "Azure Computer Vision",
        "description": "Free tier for image analysis, OCR, and spatial analysis (5,000 transactions).",
        "category": "vision",
        "features": ["5,000 transactions", "Image tagging", "OCR", "Spatial analysis"],
        "url": "https://azure.microsoft.com/pricing/details/cognitive-services/computer-vision",
        "free": true,
        "icon": "fab fa-microsoft",
        "guide": {
            "steps": [
                "Create Azure account",
                "Create Computer Vision resource",
                "Get endpoint/key",
                "Install Azure AI Vision SDK",
                "Analyze images"
            ],
            "requirements": ["Azure account", "Billing (free tier)", "Image files"],
            "useCases": ["Image analysis", "Document processing", "Content moderation", "Retail analytics"]
        }
    },
    {
        "id": 43,
        "name": "AWS Rekognition",
        "description": "Free tier includes 5,000 images per month for face detection and analysis.",
        "category": "vision",
        "features": ["5,000 images/month", "Face detection", "Object scenes", "Content moderation"],
        "url": "https://aws.amazon.com/rekognition/pricing",
        "free": true,
        "icon": "fab fa-aws",
        "guide": {
            "steps": [
                "Create AWS account",
                "Enable Rekognition",
                "Get access keys",
                "Install boto3 SDK",
                "Analyze images"
            ],
            "requirements": ["AWS account", "IAM permissions", "Python/Java"],
            "useCases": ["Face recognition", "Security systems", "Content filtering", "Media analysis"]
        }
    },
    {
        "id": 44,
        "name": "Clarifai API",
        "description": "Free tier for visual recognition with pre-trained and custom models.",
        "category": "vision",
        "features": ["Free operations", "Pre-trained models", "Custom training", "Video analysis"],
        "url": "https://www.clarifai.com/pricing",
        "free": true,
        "icon": "fas fa-robot",
        "guide": {
            "steps": [
                "Sign up on Clarifai",
                "Get API key",
                "Choose model",
                "Upload/predict images",
                "Get JSON predictions"
            ],
            "requirements": ["Clarifai account", "Images/videos", "HTTP client"],
            "useCases": ["Content moderation", "Visual search", "Product tagging", "Social media analysis"]
        }
    },
    {
        "id": 45,
        "name": "Google Cloud Speech-to-Text",
        "description": "60 minutes free per month for audio transcription and speech recognition.",
        "category": "speech",
        "features": ["60 minutes/month", "Real-time streaming", "Multiple languages", "Word-level timestamps"],
        "url": "https://cloud.google.com/speech-to-text/pricing",
        "free": true,
        "icon": "fab fa-google",
        "guide": {
            "steps": [
                "Enable Speech-to-Text API",
                "Get API credentials",
                "Install google-cloud-speech",
                "Upload audio",
                "Get transcript"
            ],
            "requirements": ["Google Cloud account", "Audio files", "Python/Node.js"],
            "useCases": ["Transcription services", "Voice commands", "Meeting notes", "Accessibility"]
        }
    },
    {
        "id": 46,
        "name": "Azure Speech Service",
        "description": "Free tier includes 5 audio hours per month for speech recognition and synthesis.",
        "category": "speech",
        "features": ["5 audio hours/month", "Speech recognition", "Text-to-speech", "Speaker recognition"],
        "url": "https://azure.microsoft.com/pricing/details/cognitive-services/speech-services",
        "free": true,
        "icon": "fab fa-microsoft",
        "guide": {
            "steps": [
                "Create Speech resource in Azure",
                "Get region/key",
                "Install Speech SDK",
                "Configure recognition",
                "Process audio"
            ],
            "requirements": ["Azure account", "Audio source", "SDK installation"],
            "useCases": ["Voice assistants", "Call center analytics", "Transcription", "Accessibility tools"]
        }
    },
    {
        "id": 47,
        "name": "AWS Transcribe",
        "description": "60 minutes free per month of audio transcription with automatic punctuation.",
        "category": "speech",
        "features": ["60 minutes/month", "Automatic punctuation", "Channel identification", "Custom vocabulary"],
        "url": "https://aws.amazon.com/transcribe/pricing",
        "free": true,
        "icon": "fab fa-aws",
        "guide": {
            "steps": [
                "Enable AWS Transcribe",
                "Get IAM credentials",
                "Upload audio to S3",
                "Start transcription job",
                "Get JSON results"
            ],
            "requirements": ["AWS account", "S3 bucket", "Audio files"],
            "useCases": ["Media transcription", "Meeting documentation", "Customer service", "Compliance"]
        }
    },
    {
        "id": 48,
        "name": "Google Cloud Translation",
        "description": "500,000 characters free per month for neural machine translation.",
        "category": "translation",
        "features": ["500k chars/month", "100+ languages", "Batch translation", "Auto language detection"],
        "url": "https://cloud.google.com/translate/pricing",
        "free": true,
        "icon": "fab fa-google",
        "guide": {
            "steps": [
                "Enable Translation API",
                "Get API key",
                "Install google-cloud-translate",
                "Specify source/target",
                "Translate text"
            ],
            "requirements": ["Google Cloud account", "Text to translate", "Python/Node.js"],
            "useCases": ["Website localization", "Document translation", "Multilingual apps", "Customer support"]
        }
    },
    {
        "id": 49,
        "name": "Azure Translator",
        "description": "2 million characters free per month for text translation across 100+ languages.",
        "category": "translation",
        "features": ["2M chars/month", "100+ languages", "Document translation", "Custom models"],
        "url": "https://azure.microsoft.com/pricing/details/cognitive-services/translator",
        "free": true,
        "icon": "fab fa-microsoft",
        "guide": {
            "steps": [
                "Create Translator resource",
                "Get endpoint/key",
                "Install Azure.AI.Translation.Text",
                "Configure language pairs",
                "Translate content"
            ],
            "requirements": ["Azure account", "Text content", ".NET/Python/Java"],
            "useCases": ["Global applications", "Business documents", "E-commerce", "Educational content"]
        }
    },
    {
        "id": 50,
        "name": "AWS Translate",
        "description": "2 million characters free per month for neural machine translation.",
        "category": "translation",
        "features": ["2M chars/month", "71 languages", "Real-time translation", "Custom terminology"],
        "url": "https://aws.amazon.com/translate/pricing",
        "free": true,
        "icon": "fab fa-aws",
        "guide": {
            "steps": [
                "Enable AWS Translate",
                "Get AWS credentials",
                "Install boto3",
                "Call translate_text",
                "Get translations"
            ],
            "requirements": ["AWS account", "Text data", "Python SDK"],
            "useCases": ["Content localization", "Customer communications", "Multilingual websites", "Document processing"]
        }
    },
    {
        "id": 51,
        "name": "Google Cloud Natural Language",
        "description": "5,000 units free per month for sentiment analysis and entity recognition.",
        "category": "llm",
        "features": ["5,000 units/month", "Sentiment analysis", "Entity recognition", "Syntax analysis"],
        "url": "https://cloud.google.com/natural-language/pricing",
        "free": true,
        "icon": "fab fa-google",
        "guide": {
            "steps": [
                "Enable Natural Language API",
                "Get API key",
                "Install google-cloud-language",
                "Analyze text",
                "Get insights"
            ],
            "requirements": ["Google Cloud account", "Text content", "Python/Node.js"],
            "useCases": ["Customer feedback", "Social media monitoring", "Content analysis", "Market research"]
        }
    },
    {
        "id": 52,
        "name": "Azure Text Analytics",
        "description": "5,000 transactions free per month for sentiment, key phrase, and entity extraction.",
        "category": "llm",
        "features": ["5,000 transactions", "Sentiment analysis", "Key phrase extraction", "Entity recognition"],
        "url": "https://azure.microsoft.com/pricing/details/cognitive-services/text-analytics",
        "free": true,
        "icon": "fab fa-microsoft",
        "guide": {
            "steps": [
                "Create Text Analytics resource",
                "Get endpoint/key",
                "Install Azure.AI.TextAnalytics",
                "Send text documents",
                "Get analysis results"
            ],
            "requirements": ["Azure account", "Text documents", ".NET/Python"],
            "useCases": ["Customer sentiment", "Content categorization", "Information extraction", "Compliance"]
        }
    },
    {
        "id": 53,
        "name": "AWS Comprehend",
        "description": "50,000 units free per month for natural language processing and analysis.",
        "category": "llm",
        "features": ["50,000 units/month", "Entity recognition", "Sentiment analysis", "Topic modeling"],
        "url": "https://aws.amazon.com/comprehend/pricing",
        "free": true,
        "icon": "fab fa-aws",
        "guide": {
            "steps": [
                "Enable AWS Comprehend",
                "Get IAM credentials",
                "Install boto3",
                "Call detect_* methods",
                "Process results"
            ],
            "requirements": ["AWS account", "Text data", "Python/Java"],
            "useCases": ["Document analysis", "Customer feedback", "Content classification", "Research"]
        }
    },
    {
        "id": 54,
        "name": "Google Cloud Video Intelligence",
        "description": "1,000 minutes free per month for video analysis and object tracking.",
        "category": "vision",
        "features": ["1,000 minutes/month", "Object tracking", "Label detection", "Explicit content detection"],
        "url": "https://cloud.google.com/video-intelligence/pricing",
        "free": true,
        "icon": "fab fa-google",
        "guide": {
            "steps": [
                "Enable Video Intelligence API",
                "Get API credentials",
                "Install google-cloud-videointelligence",
                "Upload video",
                "Get analysis"
            ],
            "requirements": ["Google Cloud account", "Video files", "Python/Node.js"],
            "useCases": ["Content moderation", "Video search", "Media analysis", "Security monitoring"]
        }
    },
    {
        "id": 55,
        "name": "Azure Video Indexer",
        "description": "600 minutes free per month for video and audio analysis with insights.",
        "category": "vision",
        "features": ["600 minutes/month", "Video/audio insights", "Face recognition", "OCR in video"],
        "url": "https://azure.microsoft.com/pricing/details/video-indexer",
        "free": true,
        "icon": "fab fa-microsoft",
        "guide": {
            "steps": [
                "Create Video Indexer resource",
                "Get access token",
                "Upload video",
                "Wait for processing",
                "Get insights JSON"
            ],
            "requirements": ["Azure account", "Video files", "Storage account"],
            "useCases": ["Media analysis", "Content discovery", "Accessibility", "Education"]
        }
    },
    {
        "id": 56,
        "name": "OpenAI Whisper Local API",
        "description": "100% free local deployment of Whisper speech recognition using open-source code.",
        "category": "speech",
        "features": ["100% free local", "No internet needed", "Multiple languages", "Timestamp generation"],
        "url": "https://github.com/openai/whisper",
        "free": true,
        "icon": "fas fa-download",
        "guide": {
            "steps": [
                "Install Python 3.9+",
                "Install whisper: pip install openai-whisper",
                "Download model",
                "Run whisper audio.mp3",
                "Get transcript"
            ],
            "requirements": ["Python installation", "Audio files", "Local storage"],
            "useCases": ["Offline transcription", "Privacy-sensitive audio", "Batch processing", "Research"]
        }
    },
    {
        "id": 57,
        "name": "Stable Diffusion WebUI API",
        "description": "Free local API for Stable Diffusion image generation with custom models.",
        "category": "vision",
        "features": ["100% free local", "Custom models", "ControlNet", "Upscaling"],
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
        "free": true,
        "icon": "fas fa-desktop",
        "guide": {
            "steps": [
                "Install SD WebUI",
                "Download model files",
                "Enable API in settings",
                "Start WebUI with --api flag",
                "Access localhost:7860"
            ],
            "requirements": ["GPU recommended", "Python 3.10", "Model files"],
            "useCases": ["Local image generation", "Custom model training", "Privacy-sensitive art", "Experimentation"]
        }
    },
    {
        "id": 58,
        "name": "ComfyUI API",
        "description": "Free local API for advanced Stable Diffusion workflows with node-based interface.",
        "category": "vision",
        "features": ["100% free local", "Node-based workflows", "Batch processing", "Custom nodes"],
        "url": "https://github.com/comfyanonymous/ComfyUI",
        "free": true,
        "icon": "fas fa-sitemap",
        "guide": {
            "steps": [
                "Install ComfyUI",
                "Download models",
                "Create workflow",
                "Enable API server",
                "Access API endpoints"
            ],
            "requirements": ["Python 3.10", "Stable Diffusion models", "Workflow design"],
            "useCases": ["Advanced image generation", "Workflow automation", "Batch processing", "Research"]
        }
    },
    {
        "id": 59,
        "name": "Transformers.js API",
        "description": "Free client-side AI models running in browser with JavaScript, no server needed.",
        "category": "llm",
        "features": ["100% free client-side", "Browser-based", "No server needed", "Multiple models"],
        "url": "https://huggingface.co/docs/transformers.js",
        "free": true,
        "icon": "fab fa-js-square",
        "guide": {
            "steps": [
                "Include Transformers.js in HTML",
                "Load model from Hugging Face",
                "Run inference in browser",
                "Process results",
                "Display output"
            ],
            "requirements": ["Modern browser", "JavaScript knowledge", "Model files"],
            "useCases": ["Browser apps", "Privacy apps", "Offline AI", "Educational tools"]
        }
    },
    {
        "id": 60,
        "name": "ONNX Runtime API",
        "description": "Free cross-platform inference engine for running optimized AI models locally.",
        "category": "llm",
        "features": ["100% free", "Cross-platform", "Hardware acceleration", "Multiple backends"],
        "url": "https://onnxruntime.ai",
        "free": true,
        "icon": "fas fa-rocket",
        "guide": {
            "steps": [
                "Install ONNX Runtime",
                "Convert model to ONNX",
                "Load model",
                "Prepare input",
                "Run inference"
            ],
            "requirements": ["ONNX model", "Python/C++/C#", "Hardware support"],
            "useCases": ["Performance optimization", "Cross-platform deployment", "Edge computing", "Research"]
        }
    },
    {
        "id": 61,
        "name": "MediaPipe API",
        "description": "Free cross-platform ML solutions for live and streaming media by Google.",
        "category": "vision",
        "features": ["100% free", "Cross-platform", "Real-time", "Pre-built solutions"],
        "url": "https://developers.google.com/mediapipe",
        "free": true,
        "icon": "fas fa-video",
        "guide": {
            "steps": [
                "Install MediaPipe",
                "Choose solution (face, hands, etc.)",
                "Initialize detector",
                "Process frames",
                "Get results"
            ],
            "requirements": ["Python/JavaScript/Android/iOS", "Camera access", "Development environment"],
            "useCases": ["Augmented reality", "Gesture control", "Fitness tracking", "Accessibility"]
        }
    },
    {
        "id": 62,
        "name": "TensorFlow.js API",
        "description": "Free ML in browser and Node.js using JavaScript with pre-trained models.",
        "category": "llm",
        "features": ["100% free", "Browser/Node.js", "Pre-trained models", "Transfer learning"],
        "url": "https://www.tensorflow.org/js",
        "free": true,
        "icon": "fas fa-chart-line",
        "guide": {
            "steps": [
                "Include TF.js in project",
                "Load pre-trained model",
                "Prepare input data",
                "Run predictions",
                "Process results"
            ],
            "requirements": ["JavaScript knowledge", "Browser/Node.js", "Model understanding"],
            "useCases": ["Browser ML apps", "Interactive demos", "Educational tools", "Prototyping"]
        }
    },
    {
        "id": 63,
        "name": "PyTorch Mobile API",
        "description": "Free ML inference on mobile devices using PyTorch optimized for edge.",
        "category": "llm",
        "features": ["100% free", "Mobile optimized", "iOS/Android", "On-device inference"],
        "url": "https://pytorch.org/mobile",
        "free": true,
        "icon": "fas fa-mobile-alt",
        "guide": {
            "steps": [
                "Convert PyTorch model to mobile",
                "Integrate into mobile app",
                "Load model",
                "Run inference",
                "Display results"
            ],
            "requirements": ["PyTorch model", "iOS/Android dev skills", "Mobile device"],
            "useCases": ["Mobile AI apps", "Privacy-sensitive apps", "Offline inference", "Real-time processing"]
        }
    },
    {
        "id": 64,
        "name": "FastAPI ML Serving",
        "description": "Free framework for serving ML models as REST APIs with automatic docs.",
        "category": "llm",
        "features": ["100% free", "Fast performance", "Automatic docs", "Async support"],
        "url": "https://fastapi.tiangolo.com",
        "free": true,
        "icon": "fas fa-bolt",
        "guide": {
            "steps": [
                "Install FastAPI",
                "Load ML model",
                "Create API endpoints",
                "Add input validation",
                "Deploy locally/cloud"
            ],
            "requirements": ["Python 3.7+", "ML model", "API design"],
            "useCases": ["Model serving", "API development", "Prototyping", "Production deployment"]
        }
    },
    {
        "id": 65,
        "name": "Gradio API",
        "description": "Free Python library to create web-based ML demos and APIs quickly.",
        "category": "llm",
        "features": ["100% free", "Easy UI creation", "Auto API generation", "Sharing capability"],
        "url": "https://www.gradio.app",
        "free": true,
        "icon": "fas fa-window-restore",
        "guide": {
            "steps": [
                "Install gradio",
                "Create inference function",
                "Build interface",
                "Launch app",
                "Share via link"
            ],
            "requirements": ["Python", "ML model function", "Basic UI design"],
            "useCases": ["Model demos", "Collaboration", "Feedback collection", "Rapid prototyping"]
        }
    },
    {
        "id": 66,
        "name": "Streamlit ML Apps",
        "description": "Free framework for turning ML scripts into shareable web apps with API endpoints.",
        "category": "llm",
        "features": ["100% free", "Simple Python scripts", "Interactive widgets", "Cloud deployment"],
        "url": "https://streamlit.io",
        "free": true,
        "icon": "fas fa-stream",
        "guide": {
            "steps": [
                "Install streamlit",
                "Create app.py",
                "Add ML components",
                "Run locally",
                "Deploy to Streamlit Cloud"
            ],
            "requirements": ["Python script", "ML model", "Web app concept"],
            "useCases": ["Data apps", "ML dashboards", "Team collaboration", "Client presentations"]
        }
    },
    {
        "id": 67,
        "name": "Modal Serverless ML",
        "description": "Free compute for running ML models serverlessly with auto-scaling.",
        "category": "llm",
        "features": ["Free compute", "Serverless", "Auto-scaling", "GPU support"],
        "url": "https://modal.com",
        "free": true,
        "icon": "fas fa-cloud",
        "guide": {
            "steps": [
                "Install modal",
                "Define function with @app.function",
                "Add GPU requirements",
                "Deploy",
                "Call via API"
            ],
            "requirements": ["Python", "Modal account", "ML model"],
            "useCases": ["Serverless ML", "Batch processing", "API endpoints", "Scalable inference"]
        }
    },
    {
        "id": 68,
        "name": "Banana Dev API",
        "description": "Free GPU hosting for ML models with simple deployment and scaling.",
        "category": "llm",
        "features": ["Free GPU hosting", "Simple deployment", "Auto-scaling", "REST API"],
        "url": "https://www.banana.dev",
        "free": true,
        "icon": "fas fa-cube",
        "guide": {
            "steps": [
                "Create Banana account",
                "Prepare model with handler.py",
                "Push to GitHub",
                "Deploy on Banana",
                "Call via API"
            ],
            "requirements": ["GitHub repo", "Python model", "API design"],
            "useCases": ["Model hosting", "GPU inference", "Scalable APIs", "Production deployment"]
        }
    },
    {
        "id": 69,
        "name": "Lepton AI API",
        "description": "Free AI model deployment platform optimized for fast inference.",
        "category": "llm",
        "features": ["Free deployment", "Fast inference", "Simple CLI", "Multiple frameworks"],
        "url": "https://www.lepton.ai",
        "free": true,
        "icon": "fas fa-atom",
        "guide": {
            "steps": [
                "Install lepton CLI",
                "Create photon (packaged model)",
                "Push to Lepton Cloud",
                "Get API endpoint",
                "Call model"
            ],
            "requirements": ["Python model", "Lepton account", "CLI usage"],
            "useCases": ["Model deployment", "Fast prototyping", "API creation", "Scalable serving"]
        }
    },
    {
        "id": 70,
        "name": "Cerebras API",
        "description": "Free model hosting for research with specialized AI compute.",
        "category": "llm",
        "features": ["Free for research", "Specialized compute", "Large models", "Research focus"],
        "url": "https://www.cerebras.net",
        "free": true,
        "icon": "fas fa-microchip",
        "guide": {
            "steps": [
                "Apply for research access",
                "Get approval",
                "Prepare model",
                "Upload to Cerebras",
                "Run inference"
            ],
            "requirements": ["Research credentials", "Large models", "Specialized needs"],
            "useCases": ["AI research", "Large model training", "Scientific computing", "Benchmarking"]
        }
    },
    {
        "id": 71,
        "name": "OctoML API",
        "description": "Free tier for ML model optimization across different hardware.",
        "category": "llm",
        "features": ["Free optimization", "Hardware optimization", "Performance tuning", "Multiple targets"],
        "url": "https://octoml.ai",
        "free": true,
        "icon": "fas fa-tachometer-alt",
        "guide": {
            "steps": [
                "Sign up for OctoML",
                "Upload model",
                "Choose target hardware",
                "Run optimization",
                "Download optimized model"
            ],
            "requirements": ["ML model", "Target hardware", "Performance goals"],
            "useCases": ["Performance optimization", "Hardware targeting", "Edge deployment", "Cost reduction"]
        }
    },
    {
        "id": 72,
        "name": "Vercel AI SDK",
        "description": "Free tools for building AI applications with React and Next.js.",
        "category": "code",
        "features": ["100% free", "React/Next.js integration", "Streaming responses", "Provider agnostic"],
        "url": "https://sdk.vercel.ai",
        "free": true,
        "icon": "fas fa-code",
        "guide": {
            "steps": [
                "Create Next.js app",
                "Install @vercel/ai",
                "Configure AI provider",
                "Create chat component",
                "Deploy to Vercel"
            ],
            "requirements": ["React/Next.js knowledge", "AI provider key", "Web dev skills"],
            "useCases": ["AI web apps", "Chat interfaces", "Content generation", "Interactive demos"]
        }
    },
    {
        "id": 73,
        "name": "LangChain API",
        "description": "Free framework for building LLM applications with chains and agents.",
        "category": "llm",
        "features": ["100% free", "Chain construction", "Agent systems", "Tool integration"],
        "url": "https://python.langchain.com",
        "free": true,
        "icon": "fas fa-link",
        "guide": {
            "steps": [
                "Install langchain",
                "Choose LLM provider",
                "Create chains/agents",
                "Add tools/memory",
                "Deploy application"
            ],
            "requirements": ["Python", "LLM API key", "Application design"],
            "useCases": ["AI assistants", "Document analysis", "Workflow automation", "Research tools"]
        }
    },
    {
        "id": 74,
        "name": "LlamaIndex API",
        "description": "Free framework for building LLM applications over your data.",
        "category": "llm",
        "features": ["100% free", "Data indexing", "Query engines", "Document processing"],
        "url": "https://www.llamaindex.ai",
        "free": true,
        "icon": "fas fa-search",
        "guide": {
            "steps": [
                "Install llama-index",
                "Load documents",
                "Create index",
                "Build query engine",
                "Query your data"
            ],
            "requirements": ["Python", "Documents/data", "LLM provider"],
            "useCases": ["Document QA", "Knowledge bases", "Research assistants", "Data analysis"]
        }
    },
    {
        "id": 75,
        "name": "Haystack API",
        "description": "Free framework for building search systems with LLMs and transformers.",
        "category": "llm",
        "features": ["100% free", "Search systems", "Question answering", "Document retrieval"],
        "url": "https://haystack.deepset.ai",
        "free": true,
        "icon": "fas fa-haykal",
        "guide": {
            "steps": [
                "Install haystack-ai",
                "Set up document store",
                "Create pipeline",
                "Add retriever/reader",
                "Query system"
            ],
            "requirements": ["Python", "Document corpus", "Search requirements"],
            "useCases": ["Enterprise search", "Customer support", "Research tools", "Knowledge management"]
        }
    },
    {
        "id": 76,
        "name": "Marvin AI",
        "description": "Free framework for building AI-powered software with type-safe prompts.",
        "category": "llm",
        "features": ["100% free", "Type-safe AI", "Function generation", "Structured output"],
        "url": "https://www.askmarvin.ai",
        "free": true,
        "icon": "fas fa-cogs",
        "guide": {
            "steps": [
                "Install marvin",
                "Define structured types",
                "Create AI functions",
                "Test with data",
                "Deploy as API"
            ],
            "requirements": ["Python 3.10+", "Type annotations", "LLM provider"],
            "useCases": ["Data extraction", "API generation", "Code synthesis", "Process automation"]
        }
    },
    {
        "id": 77,
        "name": "Guidance AI",
        "description": "Free library for controlled generation with LLMs using guidance programs.",
        "category": "llm",
        "features": ["100% free", "Controlled generation", "JSON/XML output", "Regex constraints"],
        "url": "https://github.com/microsoft/guidance",
        "free": true,
        "icon": "fas fa-compass",
        "guide": {
            "steps": [
                "Install guidance",
                "Create guidance program",
                "Define output structure",
                "Execute with LLM",
                "Parse results"
            ],
            "requirements": ["Python", "LLM access", "Output schema"],
            "useCases": ["Structured generation", "Data parsing", "Code generation", "Template filling"]
        }
    },
    {
        "id": 78,
        "name": "Outlines API",
        "description": "Free library for guided text generation with regex and JSON schema.",
        "category": "llm",
        "features": ["100% free", "Regex guidance", "JSON generation", "Grammar constraints"],
        "url": "https://github.com/outlines-dev/outlines",
        "free": true,
        "icon": "fas fa-project-diagram",
        "guide": {
            "steps": [
                "Install outlines",
                "Define generation model",
                "Add regex/JSON constraints",
                "Generate text",
                "Validate output"
            ],
            "requirements": ["Python", "LLM model", "Output constraints"],
            "useCases": ["Form filling", "API generation", "Data extraction", "Code completion"]
        }
    },
    {
        "id": 79,
        "name": "Instructor Library",
        "description": "Free library for extracting structured data from LLMs with Pydantic.",
        "category": "llm",
        "features": ["100% free", "Pydantic integration", "Structured extraction", "Validation"],
        "url": "https://github.com/jxnl/instructor",
        "free": true,
        "icon": "fas fa-graduation-cap",
        "guide": {
            "steps": [
                "Install instructor",
                "Define Pydantic models",
                "Create extraction function",
                "Process text",
                "Get structured data"
            ],
            "requirements": ["Python", "Pydantic knowledge", "LLM provider"],
            "useCases": ["Data extraction", "API responses", "Document parsing", "Content analysis"]
        }
    },
    {
        "id": 80,
        "name": "Mintlify API",
        "description": "Free AI documentation writer that generates docs from code automatically.",
        "category": "code",
        "features": ["Free tier", "Code documentation", "Auto-generation", "Multiple formats"],
        "url": "https://mintlify.com",
        "free": true,
        "icon": "fas fa-book",
        "guide": {
            "steps": [
                "Sign up for Mintlify",
                "Connect code repository",
                "Configure documentation rules",
                "Generate docs",
                "Review and deploy"
            ],
            "requirements": ["Code repository", "Mintlify account", "Documentation needs"],
            "useCases": ["API documentation", "Code libraries", "Internal docs", "Open source projects"]
        }
    },
    {
        "id": 81,
        "name": "Bito AI API",
        "description": "Free AI coding assistant for code explanation, generation, and optimization.",
        "category": "code",
        "features": ["Free tier", "Code explanation", "Generation", "Optimization"],
        "url": "https://bito.ai",
        "free": true,
        "icon": "fas fa-robot",
        "guide": {
            "steps": [
                "Install Bito extension",
                "Create account",
                "Select code",
                "Ask for explanation/generation",
                "Apply suggestions"
            ],
            "requirements": ["IDE installation", "Bito account", "Code base"],
            "useCases": ["Code learning", "Refactoring", "Debugging", "Optimization"]
        }
    },
    {
        "id": 82,
        "name": "Continue Dev API",
        "description": "Open source AI coding assistant for VS Code with free local/cloud options.",
        "category": "code",
        "features": ["Open source", "VS Code extension", "Local/cloud", "Multiple LLMs"],
        "url": "https://continue.dev",
        "free": true,
        "icon": "fas fa-play",
        "guide": {
            "steps": [
                "Install Continue extension",
                "Configure LLM provider",
                "Use in editor",
                "Get completions/suggestions",
                "Customize workflows"
            ],
            "requirements": ["VS Code", "LLM API key", "Coding project"],
            "useCases": ["Code completion", "Refactoring", "Learning", "Pair programming"]
        }
    },
    {
        "id": 83,
        "name": "Windsurf AI API",
        "description": "Free AI-powered code editor with contextual code generation and analysis.",
        "category": "code",
        "features": ["Free tier", "AI code editor", "Contextual generation", "Analysis tools"],
        "url": "https://codeium.com/windsurf",
        "free": true,
        "icon": "fas fa-wind",
        "guide": {
            "steps": [
                "Install Windsurf editor",
                "Create account",
                "Open project",
                "Use AI features",
                "Generate/analyze code"
            ],
            "requirements": ["Development machine", "Code project", "Windsurf installation"],
            "useCases": ["Code development", "Project analysis", "Learning", "Prototyping"]
        }
    },
    {
        "id": 84,
        "name": "Programming Helper API",
        "description": "Free web-based AI coding assistant for code generation from descriptions.",
        "category": "code",
        "features": ["Free web access", "Code from description", "Multiple languages", "Explanation"],
        "url": "https://www.programming-helper.com",
        "free": true,
        "icon": "fas fa-hands-helping",
        "guide": {
            "steps": [
                "Visit website",
                "Describe coding task",
                "Select language",
                "Get generated code",
                "Test and modify"
            ],
            "requirements": ["Web browser", "Task description", "Programming knowledge"],
            "useCases": ["Learning programming", "Quick prototypes", "Code snippets", "Problem solving"]
        }
    },
    {
        "id": 85,
        "name": "CodeSquire API",
        "description": "Free AI code assistant for data science and SQL code generation.",
        "category": "code",
        "features": ["Free tier", "Data science focus", "SQL generation", "Jupyter integration"],
        "url": "https://codesquire.ai",
        "free": true,
        "icon": "fas fa-database",
        "guide": {
            "steps": [
                "Install CodeSquire",
                "Connect to data source",
                "Describe analysis task",
                "Get SQL/code",
                "Execute and refine"
            ],
            "requirements": ["Data science environment", "Data access", "Analysis goals"],
            "useCases": ["Data analysis", "SQL querying", "Report generation", "EDA automation"]
        }
    },
    {
        "id": 86,
        "name": "AI2SQL API",
        "description": "Free SQL query builder that converts natural language to SQL.",
        "category": "code",
        "features": ["Free queries", "Natural language to SQL", "Multiple databases", "Query optimization"],
        "url": "https://www.ai2sql.io",
        "free": true,
        "icon": "fas fa-table",
        "guide": {
            "steps": [
                "Sign up for AI2SQL",
                "Connect database",
                "Ask question in English",
                "Get SQL query",
                "Execute and verify"
            ],
            "requirements": ["Database connection", "Natural language question", "SQL knowledge"],
            "useCases": ["Business intelligence", "Data analysis", "Reporting", "Database querying"]
        }
    },
    {
        "id": 87,
        "name": "SQLgenius API",
        "description": "Free AI SQL query generator that creates queries from plain English.",
        "category": "code",
        "features": ["Free generation", "English to SQL", "Query explanation", "Multiple dialects"],
        "url": "https://sqlgenius.app",
        "free": true,
        "icon": "fas fa-magic",
        "guide": {
            "steps": [
                "Access SQLgenius",
                "Describe data need",
                "Specify database type",
                "Get generated SQL",
                "Test and adjust"
            ],
            "requirements": ["Database schema", "English description", "SQL execution"],
            "useCases": ["Query building", "Learning SQL", "Report automation", "Data exploration"]
        }
    },
    {
        "id": 88,
        "name": "Consensus.app API",
        "description": "Free AI research search engine that finds scientific consensus on topics.",
        "category": "data",
        "features": ["Free searches", "Scientific consensus", "Research papers", "Evidence-based"],
        "url": "https://consensus.app",
        "free": true,
        "icon": "fas fa-search",
        "guide": {
            "steps": [
                "Create Consensus account",
                "Ask research question",
                "Get consensus summary",
                "Review supporting papers",
                "Export findings"
            ],
            "requirements": ["Research topic", "Consensus account", "Academic interest"],
            "useCases": ["Literature review", "Research validation", "Evidence collection", "Academic writing"]
        }
    },
    {
        "id": 89,
        "name": "Elicit.org API",
        "description": "Free AI research assistant that summarizes papers and extracts information.",
        "category": "data",
        "features": ["Free tier", "Paper summarization", "Information extraction", "Literature review"],
        "url": "https://elicit.org",
        "free": true,
        "icon": "fas fa-book-open",
        "guide": {
            "steps": [
                "Sign up for Elicit",
                "Upload papers or topics",
                "Get summaries",
                "Extract data",
                "Organize findings"
            ],
            "requirements": ["Research papers", "Elicit account", "Research goals"],
            "useCases": ["Academic research", "Systematic reviews", "Data extraction", "Knowledge synthesis"]
        }
    },
    {
        "id": 90,
        "name": "Scite.ai API",
        "description": "Free limited access for checking citation reliability in scientific literature.",
        "category": "data",
        "features": ["Limited free access", "Citation checking", "Reliability scores", "Research quality"],
        "url": "https://scite.ai",
        "free": true,
        "icon": "fas fa-quote-right",
        "guide": {
            "steps": [
                "Create scite account",
                "Upload paper/citation",
                "Get reliability report",
                "Analyze citation context",
                "Assess research impact"
            ],
            "requirements": ["Research papers", "Scite account", "Citation analysis"],
            "useCases": ["Research validation", "Literature review", "Citation analysis", "Academic publishing"]
        }
    },
    {
        "id": 91,
        "name": "Semantic Scholar API",
        "description": "Free access to AI-powered research paper search with millions of papers.",
        "category": "data",
        "features": ["Free API access", "Millions of papers", "AI-powered search", "Citation graphs"],
        "url": "https://www.semanticscholar.org/product/api",
        "free": true,
        "icon": "fas fa-graduation-cap",
        "guide": {
            "steps": [
                "Sign up for API key",
                "Search papers by topic",
                "Get metadata/abstracts",
                "Analyze citation networks",
                "Export results"
            ],
            "requirements": ["Research topic", "API key", "Data processing"],
            "useCases": ["Literature search", "Citation analysis", "Research discovery", "Academic projects"]
        }
    },
    {
        "id": 92,
        "name": "ResearchRabbit API",
        "description": "Free AI research mapping that discovers connected papers and authors.",
        "category": "data",
        "features": ["Free mapping", "Connected papers", "Author networks", "Discovery tool"],
        "url": "https://www.researchrabbit.ai",
        "free": true,
        "icon": "fas fa-rabbit",
        "guide": {
            "steps": [
                "Create ResearchRabbit account",
                "Seed with papers/authors",
                "Discover connections",
                "Explore networks",
                "Save collections"
            ],
            "requirements": ["Starting papers", "ResearchRabbit account", "Network exploration"],
            "useCases": ["Literature discovery", "Author networking", "Research trends", "Collaboration finding"]
        }
    },
    {
        "id": 93,
        "name": "Zeta Alpha API",
        "description": "Free AI research discovery that finds relevant papers and trends.",
        "category": "data",
        "features": ["Free discovery", "Trend analysis", "Paper recommendations", "Research alerts"],
        "url": "https://www.zeta-alpha.com",
        "free": true,
        "icon": "fas fa-chart-line",
        "guide": {
            "steps": [
                "Sign up for Zeta Alpha",
                "Set research interests",
                "Get paper recommendations",
                "Analyze trends",
                "Set up alerts"
            ],
            "requirements": ["Research interests", "Zeta Alpha account", "Trend monitoring"],
            "useCases": ["Research discovery", "Trend analysis", "Paper recommendations", "Field monitoring"]
        }
    },
    {
        "id": 94,
        "name": "Iris.ai API",
        "description": "Free AI research tools for literature review and data extraction.",
        "category": "data",
        "features": ["Free tools", "Literature review", "Data extraction", "Knowledge mapping"],
        "url": "https://iris.ai",
        "free": true,
        "icon": "fas fa-eye",
        "guide": {
            "steps": [
                "Create Iris.ai account",
                "Upload research documents",
                "Run analysis tools",
                "Extract information",
                "Create knowledge maps"
            ],
            "requirements": ["Research documents", "Iris.ai account", "Analysis goals"],
            "useCases": ["Systematic reviews", "Data extraction", "Knowledge synthesis", "Research organization"]
        }
    },
    {
        "id": 95,
        "name": "Genei API",
        "description": "Free AI research tool that summarizes documents and extracts key information.",
        "category": "data",
        "features": ["Free tier", "Document summarization", "Key information", "Research assistant"],
        "url": "https://www.genei.io",
        "free": true,
        "icon": "fas fa-dna",
        "guide": {
            "steps": [
                "Sign up for genei",
                "Upload research documents",
                "Get summaries",
                "Extract key points",
                "Organize findings"
            ],
            "requirements": ["Documents to analyze", "Genei account", "Research objectives"],
            "useCases": ["Document analysis", "Research summarization", "Information extraction", "Learning"]
        }
    },
    {
        "id": 96,
        "name": "Bit.ai API",
        "description": "Free AI documentation platform with collaborative documents and AI assistance.",
        "category": "data",
        "features": ["Free plan", "Collaborative docs", "AI assistance", "Knowledge management"],
        "url": "https://bit.ai",
        "free": true,
        "icon": "fas fa-file-alt",
        "guide": {
            "steps": [
                "Create bit.ai account",
                "Start new document",
                "Use AI writing help",
                "Collaborate with team",
                "Publish/share"
            ],
            "requirements": ["Documentation needs", "Bit.ai account", "Collaboration team"],
            "useCases": ["Team documentation", "Knowledge bases", "Project documentation", "Content creation"]
        }
    },
    {
        "id": 97,
        "name": "Rows.com AI Spreadsheet",
        "description": "Free spreadsheet with AI capabilities for data analysis and automation.",
        "category": "data",
        "features": ["Free spreadsheet", "AI formulas", "Data analysis", "Automation"],
        "url": "https://rows.com",
        "free": true,
        "icon": "fas fa-table",
        "guide": {
            "steps": [
                "Create Rows account",
                "Import/create spreadsheet",
                "Use AI formulas",
                "Analyze data",
                "Automate workflows"
            ],
            "requirements": ["Data to analyze", "Rows account", "Spreadsheet skills"],
            "useCases": ["Data analysis", "Automated reports", "Business intelligence", "Personal projects"]
        }
    },
    {
        "id": 98,
        "name": "Airtable AI",
        "description": "Free database platform with AI features for workflow automation and analysis.",
        "category": "data",
        "features": ["Free plan", "AI features", "Workflow automation", "Data analysis"],
        "url": "https://www.airtable.com/product/ai",
        "free": true,
        "icon": "fas fa-database",
        "guide": {
            "steps": [
                "Create Airtable base",
                "Add AI field types",
                "Configure automations",
                "Analyze with AI",
                "Share with team"
            ],
            "requirements": ["Data structure", "Airtable account", "Automation needs"],
            "useCases": ["Project management", "CRM", "Content planning", "Team collaboration"]
        }
    },
    {
        "id": 99,
        "name": "SheetAI",
        "description": "Free Google Sheets add-on with AI functions for spreadsheet automation.",
        "category": "data",
        "features": ["Free add-on", "Google Sheets", "AI functions", "Automation"],
        "url": "https://sheetai.app",
        "free": true,
        "icon": "fas fa-file-excel",
        "guide": {
            "steps": [
                "Install SheetAI add-on",
                "Open Google Sheets",
                "Use =SHEETAI() formulas",
                "Automate tasks",
                "Analyze data"
            ],
            "requirements": ["Google Sheets", "SheetAI installation", "Spreadsheet data"],
            "useCases": ["Data analysis", "Report automation", "Content generation", "Business tools"]
        }
    },
    {
        "id": 100,
        "name": "Numerous.ai",
        "description": "Free AI spreadsheet tool with natural language commands for automation.",
        "category": "data",
        "features": ["Free tool", "Natural language", "Spreadsheet automation", "AI commands"],
        "url": "https://numerous.ai",
        "free": true,
        "icon": "fas fa-list-ol",
        "guide": {
            "steps": [
                "Install Numerous.ai",
                "Open spreadsheet",
                "Use natural language commands",
                "Automate calculations",
                "Generate insights"
            ],
            "requirements": ["Spreadsheet software", "Numerous.ai install", "Data to process"],
            "useCases": ["Financial analysis", "Data processing", "Report generation", "Business planning"]
        }
    }
];

// DOM Elements
let apiGrid, apiSearchInput, apiCategoryBtns;
let menuToggle, mainNav, searchToggle, searchContainer;
let footerLinks, apiLoadMoreBtn, apiLoadingIndicator;

// State variables
let currentApiCategory = 'all';
let currentApiSearch = '';
let visibleApisCount = 6; // Initial number of APIs to show

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    initializeDOMElements();
    
    // Update total API count
    updateTotalApiCount();
    
    // Load APIs
    loadAPIs();
    
    // Setup event listeners
    setupApiEventListeners();
    
    // Setup guide toggles
    setupGuideToggles();
    
    // Setup copy buttons
    setupCopyButtons();
});

// Initialize DOM elements
function initializeDOMElements() {
    apiGrid = document.getElementById('apiGrid');
    apiSearchInput = document.getElementById('apiSearchInput');
    apiCategoryBtns = document.querySelectorAll('.api-category-btn');
    menuToggle = document.getElementById('menuToggle');
    mainNav = document.getElementById('mainNav');
    searchToggle = document.getElementById('searchToggle');
    searchContainer = document.getElementById('searchContainer');
    footerLinks = document.querySelectorAll('.footer-links a[data-category]');
    apiLoadingIndicator = document.getElementById('apiLoadingIndicator');
}

// Update total API count in hero section
function updateTotalApiCount() {
    const totalCountElement = document.getElementById('totalApiCount');
    if (totalCountElement) {
        totalCountElement.textContent = freeAPIs.length + '+';
    }
}

// Load APIs based on filters
function loadAPIs() {
    if (!apiGrid) return;
    
    // Hide loading indicator after a short delay
    setTimeout(() => {
        if (apiLoadingIndicator) {
            apiLoadingIndicator.style.display = 'none';
        }
    }, 300);
    
    // Filter APIs
    let filteredAPIs = freeAPIs.filter(api => {
        // Filter by category
        if (currentApiCategory !== 'all' && api.category !== currentApiCategory) {
            return false;
        }
        
        // Filter by search
        if (currentApiSearch) {
            const searchLower = currentApiSearch.toLowerCase();
            const matchesName = api.name.toLowerCase().includes(searchLower);
            const matchesDescription = api.description.toLowerCase().includes(searchLower);
            const matchesCategory = api.category.toLowerCase().includes(searchLower);
            
            if (!matchesName && !matchesDescription && !matchesCategory) {
                return false;
            }
        }
        
        return true;
    });
    
    // Calculate visible APIs
    const visibleAPIs = filteredAPIs.slice(0, visibleApisCount);
    
    // Clear grid
    apiGrid.innerHTML = '';
    
    if (visibleAPIs.length === 0) {
        // Show empty state
        const emptyState = document.createElement('div');
        emptyState.className = 'api-empty-state';
        emptyState.innerHTML = `
            <i class="fas fa-search"></i>
            <h3>No APIs Found</h3>
            <p>Try adjusting your search or select a different category.</p>
            <button class="tool-link" onclick="resetApiFilters()">Reset Filters</button>
        `;
        apiGrid.appendChild(emptyState);
        
        // Remove existing load more button
        removeLoadMoreButton();
    } else {
        // Render APIs
        visibleAPIs.forEach((api, index) => {
            const apiElement = createApiElement(api, index);
            apiGrid.appendChild(apiElement);
        });
        
        // Show/hide load more button
        if (visibleAPIs.length < filteredAPIs.length) {
            addLoadMoreButton();
        } else {
            removeLoadMoreButton();
        }
    }
}

// Load more APIs smoothly
function loadMoreAPIs() {
    if (!apiLoadMoreBtn) return;
    
    // Save current scroll position
    const currentScroll = window.scrollY;
    
    // Increase visible APIs count
    visibleApisCount += 6;
    
    // Filter APIs based on current criteria
    let filteredAPIs = freeAPIs.filter(api => {
        if (currentApiCategory !== 'all' && api.category !== currentApiCategory) {
            return false;
        }
        
        if (currentApiSearch) {
            const searchLower = currentApiSearch.toLowerCase();
            const matchesName = api.name.toLowerCase().includes(searchLower);
            const matchesDescription = api.description.toLowerCase().includes(searchLower);
            const matchesCategory = api.category.toLowerCase().includes(searchLower);
            
            if (!matchesName && !matchesDescription && !matchesCategory) {
                return false;
            }
        }
        
        return true;
    });
    
    // Get all current API cards
    const currentApiCount = apiGrid.querySelectorAll('.api-item').length;
    
    // Get only the NEW APIs to add
    const newAPIs = filteredAPIs.slice(currentApiCount, visibleApisCount);
    
    if (newAPIs.length === 0) {
        // No more APIs to load
        removeLoadMoreButton();
        return;
    }
    
    // Add visual feedback
    apiLoadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    apiLoadMoreBtn.classList.add('loading');
    apiLoadMoreBtn.disabled = true;
    
    // Add new APIs with animation
    setTimeout(() => {
        newAPIs.forEach((api, index) => {
            const apiElement = createApiElement(api, currentApiCount + index);
            apiGrid.appendChild(apiElement);
            
            // Trigger animation
            setTimeout(() => {
                apiElement.style.opacity = '1';
                apiElement.style.transform = 'translateY(0)';
            }, index * 30); // Staggered animation
        });
        
        // Check if there are more APIs to load
        if (currentApiCount + newAPIs.length >= filteredAPIs.length) {
            removeLoadMoreButton();
        } else {
            apiLoadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Load More APIs';
            apiLoadMoreBtn.classList.remove('loading');
            apiLoadMoreBtn.disabled = false;
        }
        
        // Setup interactions for new items
        setTimeout(() => {
            setupGuideToggles();
            setupCopyButtons();
        }, 200);
        
        // Maintain scroll position
        setTimeout(() => {
            window.scrollTo({
                top: currentScroll,
                behavior: 'auto'
            });
        }, 10);
        
    }, 10);
}

// Create API element
function createApiElement(api, index) {
    const div = document.createElement('div');
    div.className = 'api-item';
    div.id = api.name.toLowerCase().replace(/\s+/g, '');
    div.setAttribute('data-category', api.category);
    
    // Initial animation state
    div.style.opacity = '0';
    div.style.transform = 'translateY(20px)';
    div.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
    
    const categoryLabels = {
        'llm': 'LLM & Text',
        'speech': 'Speech & Audio',
        'vision': 'Vision & Image',
        'code': 'Code & Dev',
        'data': 'Data & Research',
        'translation': 'Translation'
    };
    
    div.innerHTML = `
        <div class="api-item-header">
            <div class="api-item-icon">
                <i class="${api.icon}"></i>
            </div>
            <div class="api-item-title">
                <h3>${api.name}</h3>
                <div class="api-item-meta">
                    <span class="api-item-category">${categoryLabels[api.category] || api.category}</span>
                    <span class="api-tag free">Free</span>
                </div>
            </div>
        </div>
        
        <p class="api-item-description">${api.description}</p>
        
        <div class="api-item-features">
            <h4>🚀 What You Get Free:</h4>
            <ul>
                ${api.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="api-guide">
            <button class="guide-toggle">
                <i class="fas fa-map-signs"></i> Step-by-Step Guide 
                <i class="fas fa-chevron-down guide-icon"></i>
            </button>
            
            <div class="guide-content">
                <div class="guide-step">
                    <h4><span class="step-number">1</span> Get Started</h4>
                    <p>${api.guide.steps[0]}</p>
                </div>
                
                <div class="guide-step">
                    <h4><span class="step-number">2</span> Requirements</h4>
                    <ul class="usage-list">
                        ${api.guide.requirements.map(req => `<li><i class="fas fa-check"></i> ${req}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="guide-step">
                    <h4><span class="step-number">3</span> Where to Use</h4>
                    <ul class="usage-list">
                        ${api.guide.useCases.map(use => `<li><i class="fas fa-rocket"></i> ${use}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="guide-step">
                    <h4><span class="step-number">4</span> Code Example</h4>
                    <div class="code-block">
                        <pre><code># Coming soon - check official docs</code></pre>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="api-item-footer">
            <a href="${api.url}" target="_blank" class="api-item-link">
                <i class="fas fa-external-link-alt"></i> Official Documentation
            </a>
            <div class="api-item-actions">
                <button class="api-copy-btn" data-api="${api.name}">
                    <i class="fas fa-copy"></i> Copy Guide
                </button>
            </div>
        </div>
    `;
    
    // Trigger entrance animation
    setTimeout(() => {
        div.style.opacity = '1';
        div.style.transform = 'translateY(0)';
    }, index * 30);
    
    return div;
}

// Add load more button
function addLoadMoreButton() {
    // Remove existing button first
    removeLoadMoreButton();
    
    const loadMoreSection = document.createElement('div');
    loadMoreSection.className = 'load-more-section';
    loadMoreSection.innerHTML = `
        <button class="load-more-btn" id="apiLoadMoreBtn">
            <i class="fas fa-plus"></i> Load More APIs
        </button>
    `;
    
    // Insert after the API grid
    const mainContainer = document.querySelector('main.container');
    if (mainContainer) {
        mainContainer.appendChild(loadMoreSection);
        apiLoadMoreBtn = document.getElementById('apiLoadMoreBtn');
        
        // Add event listener
        if (apiLoadMoreBtn) {
            apiLoadMoreBtn.addEventListener('click', loadMoreAPIs);
        }
    }
}

// Remove load more button
function removeLoadMoreButton() {
    const loadMoreSection = document.querySelector('.load-more-section');
    if (loadMoreSection) {
        loadMoreSection.remove();
    }
    apiLoadMoreBtn = null;
}

// Setup event listeners
function setupApiEventListeners() {
    // Search input
    if (apiSearchInput) {
        apiSearchInput.addEventListener('input', function() {
            currentApiSearch = this.value.toLowerCase();
            visibleApisCount = 6; // Reset to initial count when searching
            loadAPIs();
        });
    }
    
    // Category buttons
    if (apiCategoryBtns && apiCategoryBtns.length > 0) {
        apiCategoryBtns.forEach(button => {
            button.addEventListener('click', function() {
                apiCategoryBtns.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                currentApiCategory = this.getAttribute('data-category');
                visibleApisCount = 8; // Reset to initial count when changing category
                loadAPIs();
            });
        });
    }
    
    // Menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (mainNav) {
                mainNav.classList.toggle('active');
                this.innerHTML = mainNav.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Search toggle for mobile
    if (searchToggle && searchContainer) {
        searchToggle.addEventListener('click', function() {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active') && apiSearchInput) {
                apiSearchInput.focus();
            }
        });
    }
    
    // Footer category links
    if (footerLinks && footerLinks.length > 0) {
        footerLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.getAttribute('data-category');
                
                if (!apiCategoryBtns || apiCategoryBtns.length === 0) return;
                
                apiCategoryBtns.forEach(btn => btn.classList.remove('active'));
                const targetBtn = document.querySelector(`.api-category-btn[data-category="${category}"]`);
                if (targetBtn) {
                    targetBtn.click();
                    const apiGridElement = document.querySelector('.api-grid');
                    if (apiGridElement) {
                        apiGridElement.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// Setup guide toggles
function setupGuideToggles() {
    if (!apiGrid) return;
    
    // Delegate event to parent
    apiGrid.addEventListener('click', function(e) {
        const guideToggle = e.target.closest('.guide-toggle');
        if (guideToggle) {
            const guideContent = guideToggle.nextElementSibling;
            const guideIcon = guideToggle.querySelector('.guide-icon');
            
            guideToggle.classList.toggle('active');
            guideContent.classList.toggle('active');
            guideIcon.style.transform = guideToggle.classList.contains('active') 
                ? 'rotate(180deg)' 
                : 'rotate(0deg)';
        }
    });
}

// Setup copy buttons
function setupCopyButtons() {
    if (!apiGrid) return;
    
    apiGrid.addEventListener('click', function(e) {
        const copyBtn = e.target.closest('.api-copy-btn');
        if (copyBtn) {
            const apiName = copyBtn.getAttribute('data-api');
            const api = freeAPIs.find(a => a.name === apiName);
            
            if (api) {
                // Create text to copy
                const textToCopy = `
${api.name} - Free AI API Guide
===============================

Description: ${api.description}

Features:
${api.features.map(f => `• ${f}`).join('\n')}

Quick Start:
1. ${api.guide.steps[0]}
2. ${api.guide.steps[1] || 'Check official documentation'}

Requirements:
${api.guide.requirements.map(r => `• ${r}`).join('\n')}

Use Cases:
${api.guide.useCases.map(u => `• ${u}`).join('\n')}

Documentation: ${api.url}
                `.trim();
                
                // Copy to clipboard
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // Visual feedback
                    copyBtn.classList.add('copied');
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    
                    setTimeout(() => {
                        copyBtn.classList.remove('copied');
                        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Guide';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        }
    });
}

// Reset filters
window.resetApiFilters = function() {
    if (apiSearchInput) apiSearchInput.value = '';
    
    if (apiCategoryBtns && apiCategoryBtns.length > 0) {
        apiCategoryBtns.forEach(btn => btn.classList.remove('active'));
        const allBtn = document.querySelector('.api-category-btn[data-category="all"]');
        if (allBtn) {
            allBtn.classList.add('active');
        }
    }
    
    currentApiCategory = 'all';
    currentApiSearch = '';
    visibleApisCount = 6; // Reset to initial count
    
    loadAPIs();
    
    // Scroll to top of API grid
    const apiGridElement = document.querySelector('.api-grid');
    if (apiGridElement) {
        apiGridElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (menuToggle && mainNav) {
        if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
            if (window.innerWidth <= 900) {
                mainNav.classList.remove('active');
                if (menuToggle) {
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        }
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (window.innerWidth <= 900 && mainNav && menuToggle) {
            mainNav.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }
});