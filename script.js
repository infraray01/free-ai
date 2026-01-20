// script.js - Main JavaScript for index.html

// DOM Elements
let toolsGrid, searchInput, catButtons, filterButtons, sortFilter;
let showingCount, totalCount, loadMoreBtn, loadingIndicator;
let suggestionList, menuToggle, mainNav, searchToggle, searchContainer;
let header, reviewsTrack, sliderDots, prevBtn, nextBtn;

// State variables
let currentCategory = 'all';
let currentFilter = 'all';
let currentSort = 'featured';
let currentSearch = '';
let visibleToolsCount = 12;
let allTools = [];
let lastScrollTop = 0;
let currentReviewIndex = 0;
let autoSlideInterval;

// Reviews Data
const reviews = [
    {
        name: "Alex Chen",
        role: "Full Stack Developer",
        avatar: "AC",
        text: "This directory saved me weeks of research. Found 5 perfect AI tools for my startup in one afternoon. The free API section is gold!",
        rating: 5
    },
    {
        name: "Sarah Johnson",
        role: "University Student",
        avatar: "SJ",
        text: "As a student on a budget, finding truly free AI tools was impossible until I found this site. Now I use AI for all my assignments!",
        rating: 5
    },
    {
        name: "Marcus Rodriguez",
        role: "Digital Artist",
        avatar: "MR",
        text: "The image generation tools listed here transformed my creative workflow. So many free options I never knew existed!",
        rating: 5
    },
    {
        name: "Priya Sharma",
        role: "AI Researcher",
        avatar: "PS",
        text: "Finally a directory that actually verifies tools! No more signing up for 'free trials' that require credit cards.",
        rating: 4
    },
    {
        name: "David Kim",
        role: "Startup Founder",
        avatar: "DK",
        text: "Used the free APIs to build our MVP without burning through our seed funding. Incredible resource for bootstrapped founders.",
        rating: 5
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    initializeDOMElements();
    
    // Wait a bit for tools data to load
    setTimeout(() => {
        // Get tools data from global variable
        allTools = window.allToolsData || [];
        
        console.log(`Found ${allTools.length} tools to display`);
        
        if (allTools.length === 0) {
            console.warn('No tools data found. Loading sample data...');
            loadSampleToolsData();
        }
        
        // Set total count
        if (totalCount) {
            totalCount.textContent = allTools.length;
        }
        
        // Generate suggestions
        generateSuggestions();
        
        // Load initial tools
        loadTools();
        
        // Setup reviews slider
        setupReviewsSlider();
        
        // Start auto slide
        startAutoSlide();
        
        // Setup event listeners
        setupEventListeners();
        
        // Hide loading indicator
        if (loadingIndicator) {
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
            }, 500);
        }
    }, 100);
    
    // Handle scroll for header visibility
    window.addEventListener('scroll', handleScroll);
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
});

// Initialize DOM elements
function initializeDOMElements() {
    toolsGrid = document.getElementById('toolsGrid');
    searchInput = document.getElementById('searchInput');
    catButtons = document.querySelectorAll('.cat-btn');
    filterButtons = document.querySelectorAll('.filter-btn');
    sortFilter = document.getElementById('sortFilter');
    showingCount = document.getElementById('showingCount');
    totalCount = document.getElementById('totalCount');
    loadMoreBtn = document.getElementById('loadMoreBtn');
    loadingIndicator = document.getElementById('loadingIndicator');
    suggestionList = document.getElementById('suggestionList');
    menuToggle = document.getElementById('menuToggle');
    mainNav = document.getElementById('mainNav');
    searchToggle = document.getElementById('searchToggle');
    searchContainer = document.getElementById('searchContainer');
    header = document.querySelector('header');
    reviewsTrack = document.getElementById('reviewsTrack');
    sliderDots = document.getElementById('sliderDots');
    prevBtn = document.querySelector('.prev-btn');
    nextBtn = document.querySelector('.next-btn');
}

// Load sample tools data if none found
function loadSampleToolsData() {
    allTools = [
        {
            id: 1,
            name: "ChatGPT",
            description: "OpenAI's advanced conversational AI with free tier access.",
            category: "text",
            language: "en",
            tags: ["conversational", "writing", "research"],
            url: "https://chat.openai.com",
            free: true,
            popular: true,
            icon: "fas fa-comments",
            verified: true
        },
        {
            id: 2,
            name: "Google Gemini",
            description: "Google's AI model with free access and web search.",
            category: "text",
            language: "en",
            tags: ["google", "search", "assistant"],
            url: "https://gemini.google.com",
            free: true,
            popular: true,
            icon: "fab fa-google",
            verified: true
        },
        {
            id: 3,
            name: "Midjourney",
            description: "AI image generation through Discord with free access.",
            category: "image",
            language: "en",
            tags: ["discord", "art", "image-generation"],
            url: "https://www.midjourney.com",
            free: true,
            popular: true,
            icon: "fas fa-paint-brush",
            verified: true
        },
        {
            id: 4,
            name: "GitHub Copilot",
            description: "AI pair programmer with free access for students.",
            category: "code",
            language: "en",
            tags: ["code-completion", "github", "students"],
            url: "https://github.com/features/copilot",
            free: true,
            popular: true,
            icon: "fab fa-github",
            verified: true
        },
        {
            id: 5,
            name: "Suno AI",
            description: "AI music generation with free tier for songs.",
            category: "audio",
            language: "en",
            tags: ["music-generation", "songs", "vocals"],
            url: "https://suno.ai",
            free: true,
            popular: true,
            icon: "fas fa-music",
            verified: true
        }
    ];
}

// Handle scroll to keep header visible
function handleScroll() {
    if (!header) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // On mobile, always keep header visible
    if (window.innerWidth <= 900) {
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
        return;
    }
    
    // On desktop, hide header slightly when scrolling down
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.classList.add('header-hidden');
        header.classList.remove('header-visible');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Handle window resize
function handleResize() {
    // Update reviews slider for responsive design
    if (reviewsTrack) {
        updateReviewsSlider();
    }
}

// Generate suggestion items
function generateSuggestions() {
    if (!suggestionList) return;
    
    const suggestions = [
        { text: "Need to write content? Try ChatGPT", category: "text" },
        { text: "Creating images? Use DALL-E 3 or Midjourney", category: "image" },
        { text: "Making music? Check Suno AI or Udio", category: "audio" },
        { text: "Coding help? GitHub Copilot or Replit AI", category: "code" },
        { text: "Research papers? Semantic Scholar or Consensus", category: "research" },
        { text: "Productivity? Notion AI or Otter.ai", category: "productivity" }
    ];
    
    suggestionList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const suggestionEl = document.createElement('div');
        suggestionEl.className = 'suggestion-item';
        suggestionEl.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            <span>${suggestion.text}</span>
        `;
        suggestionEl.addEventListener('click', () => {
            if (!catButtons || catButtons.length === 0) return;
            
            catButtons.forEach(btn => btn.classList.remove('active'));
            const targetBtn = document.querySelector(`.cat-btn[data-category="${suggestion.category}"]`);
            if (targetBtn) {
                targetBtn.classList.add('active');
                currentCategory = suggestion.category;
                visibleToolsCount = 12;
                loadTools();
                // Scroll to tools section
                const toolsSection = document.querySelector('.tools-grid');
                if (toolsSection) {
                    toolsSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
        suggestionList.appendChild(suggestionEl);
    });
}

// Setup all event listeners
function setupEventListeners() {
    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value.toLowerCase();
            visibleToolsCount = 12;
            loadTools();
        });
    }

    // Category buttons
    if (catButtons && catButtons.length > 0) {
        catButtons.forEach(button => {
            button.addEventListener('click', function() {
                catButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                currentCategory = this.getAttribute('data-category');
                visibleToolsCount = 12;
                loadTools();
                // Close mobile menu if open
                closeMobileMenu();
            });
        });
    }

    // Filter buttons
    if (filterButtons && filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.getAttribute('data-filter');
                visibleToolsCount = 12;
                loadTools();
                // Close mobile menu if open
                closeMobileMenu();
            });
        });
    }

    // Sort filter
    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            currentSort = this.value;
            visibleToolsCount = 12;
            loadTools();
        });
    }

    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreTools);
    }

    // Menu toggle for mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
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
            if (searchContainer.classList.contains('active') && searchInput) {
                searchInput.focus();
            }
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
            if (searchContainer) {
                searchContainer.classList.remove('active');
            }
        });
    });

    // Close mobile menu and search when clicking outside
    document.addEventListener('click', function(e) {
        if (menuToggle && mainNav) {
            if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
                closeMobileMenu();
            }
        }
        if (searchToggle && searchContainer) {
            if (!searchToggle.contains(e.target) && !searchContainer.contains(e.target)) {
                if (searchContainer) {
                    searchContainer.classList.remove('active');
                }
            }
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
            if (searchContainer) {
                searchContainer.classList.remove('active');
            }
        }
    });

    // Footer category links
    document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            if (!catButtons || catButtons.length === 0) return;
            
            catButtons.forEach(btn => btn.classList.remove('active'));
            const targetBtn = document.querySelector(`.cat-btn[data-category="${category}"]`);
            if (targetBtn) {
                targetBtn.classList.add('active');
                currentCategory = category;
                visibleToolsCount = 12;
                loadTools();
                
                // Scroll to tools section
                const toolsSection = document.querySelector('.tools-grid');
                if (toolsSection) {
                    toolsSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Function to close mobile menu
function closeMobileMenu() {
    if (window.innerWidth <= 900 && mainNav && menuToggle) {
        mainNav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

// Load tools based on current filters
function loadTools() {
    if (!toolsGrid) return;
    
    // Show loading indicator
    if (loadingIndicator) {
        loadingIndicator.style.display = 'flex';
    }
    
    // Filter tools based on current criteria
    let filteredTools = allTools.filter(tool => {
        // Filter by category
        if (currentCategory !== 'all' && tool.category !== currentCategory) {
            return false;
        }
        
        // Filter by filter type
        if (currentFilter === 'free' && !tool.free) {
            return false;
        }
        
        if (currentFilter === 'popular' && !tool.popular) {
            return false;
        }
        
        // Filter by search term
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            const matchesName = tool.name.toLowerCase().includes(searchLower);
            const matchesDescription = tool.description.toLowerCase().includes(searchLower);
            const matchesTags = tool.tags.some(tag => tag.toLowerCase().includes(searchLower));
            
            if (!matchesName && !matchesDescription && !matchesTags) {
                return false;
            }
        }
        
        return true;
    });
    
    // Sort tools
    filteredTools = sortTools(filteredTools, currentSort);
    
    // Calculate visible tools
    const visibleTools = filteredTools.slice(0, visibleToolsCount);
    
    // Update showing count
    if (showingCount) {
        showingCount.textContent = visibleTools.length;
    }
    
    // Clear current tools
    toolsGrid.innerHTML = '';
    
    // Add a small delay to show loading animation
    setTimeout(() => {
        if (visibleTools.length === 0) {
            // Show empty state
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
                <i class="fas fa-search"></i>
                <h3>No tools found</h3>
                <p>Try adjusting your search or filters to find what you're looking for.</p>
                <button class="tool-link" onclick="window.resetFilters && window.resetFilters()">Reset All Filters</button>
            `;
            toolsGrid.appendChild(emptyState);
            if (loadMoreBtn) {
                loadMoreBtn.style.display = 'none';
            }
        } else {
            // Render tools
            visibleTools.forEach((tool, index) => {
                const toolCard = createToolCard(tool, index);
                toolsGrid.appendChild(toolCard);
            });
            
            // Show/hide load more button
            if (loadMoreBtn) {
                if (visibleTools.length < filteredTools.length) {
                    loadMoreBtn.style.display = 'flex';
                    loadMoreBtn.disabled = false;
                    loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Load More AI Tools';
                } else {
                    loadMoreBtn.style.display = 'none';
                }
            }
        }
        
        // Hide loading indicator
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    }, 300);
}

// Load more tools
// Load more tools - SMOOTH VERSION
function loadMoreTools() {
    if (!loadMoreBtn || !toolsGrid) return;
    
    // Save current scroll position
    const currentScroll = window.scrollY;
    
    // Increase visible tools count
    visibleToolsCount += 12;
    
    // Filter tools based on current criteria
    let filteredTools = allTools.filter(tool => {
        // Filter by category
        if (currentCategory !== 'all' && tool.category !== currentCategory) {
            return false;
        }
        
        // Filter by filter type
        if (currentFilter === 'free' && !tool.free) {
            return false;
        }
        
        if (currentFilter === 'popular' && !tool.popular) {
            return false;
        }
        
        // Filter by search term
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            const matchesName = tool.name.toLowerCase().includes(searchLower);
            const matchesDescription = tool.description.toLowerCase().includes(searchLower);
            const matchesTags = tool.tags.some(tag => tag.toLowerCase().includes(searchLower));
            
            if (!matchesName && !matchesDescription && !matchesTags) {
                return false;
            }
        }
        
        return true;
    });
    
    // Sort tools
    filteredTools = sortTools(filteredTools, currentSort);
    
    // Get only the NEW tools to add
    const currentToolCount = toolsGrid.querySelectorAll('.tool-card:not(.empty-state)').length;
    const newTools = filteredTools.slice(currentToolCount, visibleToolsCount);
    
    if (newTools.length === 0) {
        // No more tools to load
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
        return;
    }
    
    // Add small visual feedback
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    loadMoreBtn.classList.add('loading');
    
    // Add new tools with animation
    setTimeout(() => {
        newTools.forEach((tool, index) => {
            const toolCard = createToolCard(tool, currentToolCount + index);
            toolsGrid.appendChild(toolCard);
            
            // Trigger animation
            setTimeout(() => {
                toolCard.style.opacity = '1';
                toolCard.style.transform = 'translateY(0)';
            }, index * 50); // Staggered animation
        });
        
        // Update showing count
        if (showingCount) {
            showingCount.textContent = Math.min(currentToolCount + newTools.length, filteredTools.length);
        }
        
        // Check if there are more tools to load
        if (currentToolCount + newTools.length >= filteredTools.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Load More AI Tools';
            loadMoreBtn.classList.remove('loading');
        }
        
        // Maintain scroll position
        setTimeout(() => {
            window.scrollTo({
                top: currentScroll,
                behavior: 'auto'
            });
        }, 10);
        
    }, 10); // Small delay for visual feedback
}

// Sort tools based on selected criteria
function sortTools(tools, sortBy) {
    const sortedTools = [...tools];
    
    switch(sortBy) {
        case 'name':
            return sortedTools.sort((a, b) => a.name.localeCompare(b.name));
        case 'popular':
            // Sort by popularity (popular: true first) then by id
            return sortedTools.sort((a, b) => {
                if (a.popular && !b.popular) return -1;
                if (!a.popular && b.popular) return 1;
                return b.id - a.id; // Newer first if same popularity
            });
        case 'new':
            return sortedTools.sort((a, b) => b.id - a.id);
        case 'featured':
        default:
            // Mix of popularity and newer tools
            return sortedTools.sort((a, b) => {
                const scoreA = (a.popular ? 100 : 0) + (a.id / 10);
                const scoreB = (b.popular ? 100 : 0) + (b.id / 10);
                return scoreB - scoreA;
            });
    }
}

// Create a tool card element
function createToolCard(tool, index) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.style.animationDelay = `${index * 0.05}s`;
    
    // Category labels for display
    const categoryLabels = {
        'text': 'Text & Writing',
        'image': 'Image & Art',
        'audio': 'Audio & Music',
        'video': 'Video',
        'code': 'Code & Dev',
        'research': 'Research & Data',
        'productivity': 'Productivity',
        'education': 'Education',
        'translation': 'Translation',
        'search': 'Search',
        'specialized': 'Specialized',
        'platforms': 'Platforms',
        'directories': 'Directories',
        'global': 'Global'
    };
    
    // Language labels
    const languageLabels = {
        'en': 'English',
        'es': 'Spanish',
        'fr': 'French',
        'de': 'German',
        'zh': 'Chinese',
        'ja': 'Japanese',
        'ko': 'Korean',
        'ar': 'Arabic',
        'hi': 'Hindi',
        'ru': 'Russian',
        'pt': 'Portuguese',
        'it': 'Italian',
        'tr': 'Turkish',
        'vi': 'Vietnamese',
        'th': 'Thai',
        'id': 'Indonesian',
        'ms': 'Malay',
        'tl': 'Filipino',
        'bn': 'Bengali',
        'multiple': 'Multiple'
    };
    
    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-icon">
                <i class="${tool.icon}"></i>
            </div>
            <div class="tool-info">
                <h3 class="tool-title">${tool.name}</h3>
                <div class="tool-meta">
                    <span class="tool-category">${categoryLabels[tool.category] || tool.category}</span>
                    ${tool.free ? '<span class="tool-free"><i class="fas fa-check-circle"></i> FREE</span>' : ''}
                    ${tool.language ? `<span class="tool-language">${languageLabels[tool.language] || tool.language}</span>` : ''}
                </div>
            </div>
        </div>
        <p class="tool-description">${tool.description}</p>
        <div class="tool-tags">
            ${tool.tags.slice(0, 3).map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
            ${tool.tags.length > 3 ? `<span class="tool-tag">+${tool.tags.length - 3}</span>` : ''}
        </div>
        <div class="tool-footer">
            <a href="${tool.url}" target="_blank" class="tool-link" rel="noopener noreferrer">
                Visit Tool <i class="fas fa-external-link-alt"></i>
            </a>
            ${tool.verified ? '<span style="font-size: 0.8rem; color: var(--accent);"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
        </div>
    `;
    
    // Add hover animation
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
    
    return card;
}

// Setup reviews slider
function setupReviewsSlider() {
    if (!reviewsTrack || !sliderDots) return;
    
    reviewsTrack.innerHTML = '';
    sliderDots.innerHTML = '';
    
    reviews.forEach((review, index) => {
        // Create review card
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="review-content">
                <div class="review-quote">"</div>
                <p class="review-text">${review.text}</p>
                <div class="review-author">
                    <div class="review-avatar">${review.avatar}</div>
                    <div class="review-info">
                        <h4>${review.name}</h4>
                        <p>${review.role}</p>
                        <div class="review-rating">
                            ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                        </div>
                    </div>
                </div>
            </div>
        `;
        reviewsTrack.appendChild(reviewCard);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            goToReview(index);
        });
        sliderDots.appendChild(dot);
    });
    
    // Setup navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToReview(currentReviewIndex - 1);
            resetAutoSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToReview(currentReviewIndex + 1);
            resetAutoSlide();
        });
    }
    
    // Initialize slider
    updateReviewsSlider();
}

// Go to specific review
function goToReview(index) {
    if (!reviewsTrack) return;
    
    if (index < 0) index = reviews.length - 1;
    if (index >= reviews.length) index = 0;
    
    currentReviewIndex = index;
    updateReviewsSlider();
}

// Update reviews slider display
function updateReviewsSlider() {
    if (!reviewsTrack) return;
    
    const trackWidth = reviewsTrack.clientWidth;
    const cardWidth = trackWidth;
    
    reviewsTrack.style.transform = `translateX(-${currentReviewIndex * cardWidth}px)`;
    
    // Update dots
    if (sliderDots) {
        document.querySelectorAll('.slider-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentReviewIndex);
        });
    }
}

// Start auto slide
function startAutoSlide() {
    if (!reviewsTrack) return;
    
    autoSlideInterval = setInterval(() => {
        goToReview(currentReviewIndex + 1);
    }, 5000);
}

// Reset auto slide timer
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Reset all filters function
window.resetFilters = function() {
    if (!catButtons || catButtons.length === 0) return;
    
    catButtons.forEach(btn => btn.classList.remove('active'));
    const allBtn = document.querySelector('.cat-btn[data-category="all"]');
    if (allBtn) {
        allBtn.classList.add('active');
    }
    
    if (filterButtons && filterButtons.length > 0) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allFilterBtn) {
            allFilterBtn.classList.add('active');
        }
    }
    
    if (searchInput) {
        searchInput.value = '';
    }
    
    if (sortFilter) {
        sortFilter.value = 'featured';
    }
    
    currentCategory = 'all';
    currentFilter = 'all';
    currentSort = 'featured';
    currentSearch = '';
    visibleToolsCount = 12;
    
    loadTools();
};