// api.js - JavaScript for API page

// API Data - 100% Free AI APIs (verified)
const freeAPIs = [
    {
        id: 1,
        name: "Google Gemini API",
        description: "Google's multimodal AI model with free tier: 60 requests per minute. Supports text, code, and reasoning tasks.",
        category: "llm",
        features: ["60 requests per minute", "All Gemini models", "Multimodal capabilities", "System instructions"],
        url: "https://ai.google.dev/gemini-api/docs",
        free: true,
        icon: "fab fa-google",
        guide: {
            steps: [
                "Go to Google AI Studio and click 'Get API Key'",
                "Create new project or select existing",
                "Copy your API key (starts with AIzaSy)",
                "Install library: pip install google-generativeai",
                "Configure and make your first request"
            ],
            requirements: ["Google account", "Python/Node.js", "Internet connection"],
            useCases: ["Chatbots", "Content generation", "Code explanation", "Data analysis"]
        }
    },
    {
        id: 2,
        name: "Cohere API",
        description: "Enterprise-grade text generation and embeddings. Free tier with 5 calls per minute, perfect for prototyping.",
        category: "llm",
        features: ["5 requests per minute", "Text generation", "Embeddings", "Classification"],
        url: "https://docs.cohere.com",
        free: true,
        icon: "fas fa-brain",
        guide: {
            steps: [
                "Sign up at Cohere Dashboard",
                "Get your API key from settings",
                "Install: pip install cohere",
                "Initialize client with your API key",
                "Start generating text or embeddings"
            ],
            requirements: ["Email signup", "Python/Node.js"],
            useCases: ["Semantic search", "Content creation", "Customer support", "Text classification"]
        }
    },
    {
        id: 3,
        name: "AssemblyAI",
        description: "Professional speech-to-text API with 5 free hours per month. Supports real-time transcription and audio intelligence.",
        category: "speech",
        features: ["5 hours/month free", "Real-time streaming", "Speaker detection", "Content moderation"],
        url: "https://www.assemblyai.com/docs",
        free: true,
        icon: "fas fa-microphone-alt",
        guide: {
            steps: [
                "Create account at AssemblyAI",
                "Get API key from dashboard",
                "Upload audio file or provide URL",
                "Make POST request to transcription endpoint",
                "Poll for results or use webhooks"
            ],
            requirements: ["Audio files (mp3, wav, etc.)", "Python/Node.js"],
            useCases: ["Meeting transcripts", "Podcast transcription", "Voice notes", "Accessibility tools"]
        }
    },
    {
        id: 4,
        name: "Hugging Face Inference",
        description: "Access thousands of open-source AI models for free through Hugging Face's Inference API.",
        category: "llm",
        features: ["30,000+ models", "Text/Image/Audio", "Community models", "No upfront cost"],
        url: "https://huggingface.co/docs/api-inference/index",
        free: true,
        icon: "fas fa-heart",
        guide: {
            steps: [
                "Create Hugging Face account",
                "Get access token from settings",
                "Find model you want to use",
                "Check if it supports Inference API",
                "Make API request with your token"
            ],
            requirements: ["Hugging Face account", "Model selection"],
            useCases: ["Experiment with different models", "Prototyping", "Research", "Open-source projects"]
        }
    },
    {
        id: 5,
        name: "ElevenLabs",
        description: "High-quality text-to-speech with 10,000 free characters per month. Professional voices for various applications.",
        category: "speech",
        features: ["10,000 chars/month", "Multiple voices", "Voice cloning", "Multiple languages"],
        url: "https://docs.elevenlabs.io/api-reference",
        free: true,
        icon: "fas fa-volume-up",
        guide: {
            steps: [
                "Sign up at ElevenLabs",
                "Get API key from profile",
                "Choose voice ID from available voices",
                "Make text-to-speech request",
                "Save audio response"
            ],
            requirements: ["Text content", "Voice selection"],
            useCases: ["Audiobooks", "Voiceovers", "Accessibility", "IVR systems"]
        }
    },
    {
        id: 6,
        name: "Together AI",
        description: "Access open-source LLMs like Llama, Mistral, and more. $25 free credits to start.",
        category: "llm",
        features: ["$25 free credits", "Open-source models", "Chat completions", "Embeddings"],
        url: "https://docs.together.ai",
        free: true,
        icon: "fas fa-users",
        guide: {
            steps: [
                "Sign up at Together AI",
                "Get API key and $25 credits",
                "Browse available models",
                "Choose model for your task",
                "Make API request with model name"
            ],
            requirements: ["Model selection", "Credit monitoring"],
            useCases: ["Chat applications", "Code generation", "Creative writing", "Research"]
        }
    },
    {
        id: 7,
        name: "Stability AI API",
        description: "Access Stable Diffusion models for image generation. Free credits available.",
        category: "vision",
        features: ["Image generation", "Image-to-image", "Inpainting", "Upscaling"],
        url: "https://platform.stability.ai",
        free: true,
        icon: "fas fa-image",
        guide: {
            steps: [
                "Sign up at Stability AI",
                "Get API key",
                "Choose engine (stable-diffusion-xl)",
                "Make text-to-image request",
                "Process and save image"
            ],
            requirements: ["Prompt engineering", "Image handling"],
            useCases: ["Art generation", "Design mockups", "Content creation", "Prototyping"]
        }
    },
    {
        id: 8,
        name: "Replicate API",
        description: "Run machine learning models in the cloud. Free tier with GPU access.",
        category: "llm",
        features: ["GPU access", "Thousands of models", "Versioning", "Webhooks"],
        url: "https://replicate.com/docs",
        free: true,
        icon: "fas fa-play",
        guide: {
            steps: [
                "Sign up at Replicate",
                "Get API token",
                "Browse models library",
                "Run model with input",
                "Get prediction results"
            ],
            requirements: ["Model selection", "Input formatting"],
            useCases: ["AI prototyping", "Model testing", "Production apps", "Research"]
        }
    }
];

// DOM Elements
let apiGrid, apiSearchInput, apiCategoryBtns;
let menuToggle, mainNav, searchToggle, searchContainer;
let footerLinks;

// State variables
let currentApiCategory = 'all';
let currentApiSearch = '';

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    initializeDOMElements();
    
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
}

// Load APIs based on filters
function loadAPIs() {
    if (!apiGrid) return;
    
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
    
    // Clear grid
    apiGrid.innerHTML = '';
    
    if (filteredAPIs.length === 0) {
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
    } else {
        // Render APIs
        filteredAPIs.forEach(api => {
            const apiElement = createApiElement(api);
            apiGrid.appendChild(apiElement);
        });
    }
}

// Create API element
function createApiElement(api) {
    const div = document.createElement('div');
    div.className = 'api-item';
    div.id = api.name.toLowerCase().replace(/\s+/g, '');
    div.setAttribute('data-category', api.category);
    
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
    
    return div;
}

// Setup event listeners
function setupApiEventListeners() {
    // Search input
    if (apiSearchInput) {
        apiSearchInput.addEventListener('input', function() {
            currentApiSearch = this.value.toLowerCase();
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
    loadAPIs();
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