// Telugu News Website JavaScript - Fixed Event Handling
class TeluguNewsApp {
    constructor() {
        this.currentLanguage = 'te';
        this.currentTheme = 'light';
        this.currentPage = 'homepage';
        this.currentArticle = null;
        this.fontSize = 1;
        
        // Sample data (from the provided JSON)
        this.data = {
            sampleArticles: [
                {
                    id: 1,
                    headline: "తెలంగాణలో కొత్త IT పాలసీ ప్రకటన",
                    summary: "రాష్ట్ర ప్రభుత్వం కొత్త IT పాలసీని ప్రకటించింది. దీనితో వేలాది ఉద్యోగాలు వస్తాయని అంచనా.",
                    category: "Technology",
                    timestamp: "2025-08-02T14:30:00",
                    location: "Hyderabad",
                    author: "వార్తా విభాగం",
                    content: `<p>హైదరాబాద్: తెలంగాణ రాష్ట్ర ప్రభుత్వం కొత్త IT పాలసీని ప్రకటించింది. ఈ పాలసీ ద్వారా రాష్ట్రంలో వేలాది ఉద్యోగాలు వస్తాయని ప్రభుత్వం అంచనా వేస్తోంది.</p>
                        
                    <p>ముఖ్యమంత్రి తెలిపిన వివరాల ప్రకారం, కొత్త IT పాలసీలో స్టార్టప్‌లకు ప్రత్యేక ప్రోత్సాహకాలు ఉంటాయి. టెక్నాలజీ రంగంలో వచ్చే కంపెనీలకు 10-15 సంవత్సరాలు పన్ను మినహాయింపు ఉంటుంది.</p>
                    
                    <p>హైదరాబాద్‌తో పాటు వరంగల్, విజయవాడ, విశాఖపట్నంలో కూడా కొత్త IT హబ్‌లు ఏర్పాటు చేయాలని ప్రభుత్వం యోచిస్తోంది. దీనితో గ్రామీణ ప్రాంతాల్లో కూడా IT ఉద్యోగాలు వస్తాయని అధికారులు తెలిపారు.</p>
                    
                    <p>ఈ పాలసీ వల్ల రాష్ట్రంలో 2 లక్షల మంది యువతకు ప్రత్యక్షంగా మరియు 5 లక్షల మందికి పరోక్షంగా ఉద్యోగావకాశాలు లభిస్తాయని ప్రభుత్వం అంచనా వేస్తోంది.</p>`
                },
                {
                    id: 2,
                    headline: "IPL 2025: హైదరాబాద్ జట్టు గెలుపు",
                    summary: "హైదరాబాద్ సన్‌రైజర్స్ జట్టు 6 వికెట్ల తేడాతో గెలిచింది. అభిమానుల్లో ఆనందం.",
                    category: "Sports",
                    timestamp: "2025-08-02T13:45:00",
                    location: "Hyderabad",
                    author: "క్రీడా విభాగం",
                    content: `<p>హైదరాబాద్: IPL 2025 టోర్నమెంట్‌లో హైదరాబాద్ సన్‌రైజర్స్ జట్టు అద్భుతమైన ప్రదర్శనతో 6 వికెట్ల తేడాతో విజయం సాధించింది.</p>
                    
                    <p>కెప్టెన్ అయ్యర్ అద్భుతమైన బ్యాటింగ్ చేసి 89 రన్స్ చేసాడు. బౌలింగ్‌లో రాషిద్ ఖాన్ 4 వికెట్లు తీసుకున్నాడు.</p>
                    
                    <p>ఈ విజయంతో హైదరాబాద్ జట్టు పాయింట్స్ టేబుల్‌లో రెండో స్థానానికి చేరుకుంది. అభిమానులు ఈ గెలుపును గ్రాండ్‌గా జరుపుకున్నారు.</p>`
                },
                {
                    id: 3,
                    headline: "వరంగల్‌లో కొత్త మెట్రో ప్రాజెక్ట్",
                    summary: "వరంగల్ నగరంలో మెట్రో రైలు ప్రాజెక్ట్ కోసం సర్వే పనులు ప్రారంభం అయ్యాయి.",
                    category: "Telangana",
                    timestamp: "2025-08-02T12:15:00",
                    location: "Warangal",
                    author: "వార్తా విభాగం",
                    content: `<p>వరంగల్: వరంగల్ నగరంలో మెట్రో రైలు ప్రాజెక్ట్ కోసం అధికారిక సర్వే పనులు ప్రారంభం అయ్యాయి. ఈ ప్రాజెక్ట్ వల్ల నగరంలో రవాణా సౌకర్యాలు మెరుగుపడతాయి.</p>
                    
                    <p>మొదటి దశలో 25 కిలోమీటర్ల మార్గంలో మెట్రో నిర్మించాలని యోచిస్తున్నారు. ఈ ప్రాజెక్ట్ వల్ల వేలాది మందికి ఉద్యోగావకాశాలు కలుగుతాయి.</p>
                    
                    <p>కేంద్ర, రాష్ట్ర ప్రభుత్వాలు ఈ ప్రాజెక్ట్‌కు పూర్తి మద్దతు ఇస్తున్నాయని అధికారులు తెలిపారు.</p>`
                }
            ],
            breakingNews: [
                "తెలంగాణలో కొత్త IT పాలసీ ప్రకటన",
                "హైదరాబాద్‌లో భారీ వర్షాలు - ట్రాఫిక్ జామ్",
                "ప్రధానమంత్రి రేపు హైదరాబాద్ సందర్శన",
                "IPL 2025: హైదరాబాద్ జట్టు అద్భుత గెలుపు",
                "వరంగల్‌లో మెట్రో ప్రాజెక్ట్ సర్వే ప్రారంభం"
            ]
        };

        this.translations = {
            te: {
                home: "హోమ్",
                telangana: "తెలంగాణ",
                andhrapradesh: "ఆంధ్రప్రదేశ్",
                national: "జాతీయం",
                international: "అంతర్జాతీయం",
                sports: "క్రీడలు",
                entertainment: "వినోదం",
                business: "వ్యాపారం",
                technology: "టెక్నాలజీ",
                health: "ఆరోగ్యం",
                searchPlaceholder: "వార్తలు వెతకండి...",
                latestNews: "తాజా వార్తలు",
                breakingNews: "బ్రేకింగ్ న్యూస్:",
                readMore: "మరింత చదవండి",
                shareArticle: "వార్తను పంచుకోండి",
                comments: "అభిప్రాయాలు",
                writeComment: "మీ అభిప్రాయం రాయండి...",
                post: "పోస్ట్ చేయండి",
                subscribe: "సబ్‌స్క్రైబ్ చేయండి",
                backToHome: "హోమ్‌కు తిరిగి వెళ్లండి"
            },
            en: {
                home: "Home",
                telangana: "Telangana",
                andhrapradesh: "Andhra Pradesh",
                national: "National",
                international: "International",
                sports: "Sports",
                entertainment: "Entertainment",
                business: "Business",
                technology: "Technology",
                health: "Health",
                searchPlaceholder: "Search news...",
                latestNews: "Latest News",
                breakingNews: "Breaking News:",
                readMore: "Read More",
                shareArticle: "Share Article",
                comments: "Comments",
                writeComment: "Write your comment...",
                post: "Post",
                subscribe: "Subscribe",
                backToHome: "Back to Home"
            }
        };
    }

    init() {
        console.log('Initializing Telugu News App...');
        
        // Initialize all components
        this.initBreakingNewsTicker();
        this.initNavigation();
        this.initLanguageToggle();
        this.initThemeToggle();
        this.initSearch();
        this.initMobileMenu();
        this.initNewsGrid();
        this.initCategoryCards();
        this.initDistrictNavigation();
        this.initArticlePage();
        this.initSocialSharing();
        this.initComments();
        this.initNewsletterPopup();
        this.initFontControls();
        this.initPrintFunctionality();
        
        // Show newsletter popup after 15 seconds
        setTimeout(() => this.showNewsletterPopup(), 15000);
        
        console.log('Telugu News App initialized successfully');
    }

    initBreakingNewsTicker() {
        const tickerText = document.getElementById('tickerText');
        if (!tickerText) {
            console.warn('Breaking news ticker element not found');
            return;
        }

        let currentIndex = 0;
        const updateTicker = () => {
            if (this.data.breakingNews.length > 0) {
                tickerText.textContent = this.data.breakingNews[currentIndex];
                currentIndex = (currentIndex + 1) % this.data.breakingNews.length;
            }
        };

        // Start immediately
        updateTicker();
        // Update every 5 seconds
        setInterval(updateTicker, 5000);
        console.log('Breaking news ticker initialized');
    }

    initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        console.log('Found navigation links:', navLinks.length);
        
        navLinks.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Navigation link clicked:', link.textContent);
                
                const href = link.getAttribute('href');
                if (!href) return;
                
                const target = href.substring(1); // Remove #
                
                if (target === 'home') {
                    this.navigateToSection('homepage');
                    this.renderNewsGrid(); // Show all news
                } else {
                    this.filterByCategory(target);
                }
                
                // Update active state
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
        
        console.log('Navigation initialized');
    }

    initLanguageToggle() {
        const langButtons = document.querySelectorAll('.lang-btn');
        console.log('Found language buttons:', langButtons.length);
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const lang = btn.getAttribute('data-lang');
                console.log('Language toggle clicked:', lang);
                
                this.switchLanguage(lang);
                
                // Update active state
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        console.log('Language toggle initialized');
    }

    initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) {
            console.warn('Theme toggle button not found');
            return;
        }

        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Theme toggle clicked');
            this.toggleTheme();
        });

        // Initialize theme
        this.applyTheme();
        console.log('Theme toggle initialized');
    }

    initSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        if (!searchInput || !searchBtn) {
            console.warn('Search elements not found');
            return;
        }

        const performSearch = () => {
            const query = searchInput.value.trim();
            console.log('Performing search for:', query);
            
            if (query) {
                this.searchNews(query);
                // Navigate to homepage to show results
                this.navigateToSection('homepage');
            }
        };

        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            performSearch();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
        
        console.log('Search functionality initialized');
    }

    initMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (!mobileMenuToggle || !navMenu) {
            console.warn('Mobile menu elements not found');
            return;
        }

        mobileMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Mobile menu toggle clicked');
            navMenu.classList.toggle('active');
            // Update button text
            mobileMenuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking on nav links
        navMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            }
        });
        
        console.log('Mobile menu initialized');
    }

    initNewsGrid() {
        const newsGrid = document.getElementById('newsGrid');
        if (!newsGrid) {
            console.warn('News grid element not found');
            return;
        }

        this.renderNewsGrid();
        console.log('News grid initialized');
    }

    initCategoryCards() {
        const categoryCards = document.querySelectorAll('.category-card');
        console.log('Found category cards:', categoryCards.length);
        
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const category = card.getAttribute('data-category');
                console.log('Category card clicked:', category);
                this.filterByCategory(category);
            });
        });
        
        console.log('Category cards initialized');
    }

    initDistrictNavigation() {
        const districtBtns = document.querySelectorAll('.district-btn');
        console.log('Found district buttons:', districtBtns.length);
        
        districtBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const district = btn.textContent;
                console.log('District button clicked:', district);
                this.filterByDistrict(district);
                
                // Update active state
                document.querySelectorAll('.district-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        console.log('District navigation initialized');
    }

    initArticlePage() {
        // Use event delegation for dynamically generated content
        document.body.addEventListener('click', (e) => {
            // Check if clicked element is a news item or its child
            const newsItem = e.target.closest('.news-item, .featured-news, .most-read-item, .related-item');
            if (newsItem && !e.target.closest('.share-btn')) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('News item clicked');
                this.openArticle(newsItem);
            }
        });

        // Back to homepage with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentPage === 'articlePage') {
                console.log('Escape pressed, going back to homepage');
                this.navigateToSection('homepage');
            }
        });
        
        console.log('Article page navigation initialized');
    }

    initSocialSharing() {
        document.body.addEventListener('click', (e) => {
            const shareBtn = e.target.closest('.share-btn');
            if (shareBtn) {
                e.preventDefault();
                e.stopPropagation();
                
                const platform = shareBtn.getAttribute('data-platform');
                console.log('Share button clicked:', platform);
                this.shareArticle(platform);
            }
        });
        
        console.log('Social sharing initialized');
    }

    initComments() {
        const submitComment = document.getElementById('submitComment');
        const commentInput = document.getElementById('commentInput');
        
        if (!submitComment || !commentInput) {
            console.warn('Comment elements not found');
            return;
        }

        submitComment.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const comment = commentInput.value.trim();
            if (comment) {
                console.log('Adding comment:', comment);
                this.addComment(comment);
                commentInput.value = '';
            }
        });

        commentInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const comment = commentInput.value.trim();
                if (comment) {
                    this.addComment(comment);
                    commentInput.value = '';
                }
            }
        });
        
        console.log('Comments system initialized');
    }

    initNewsletterPopup() {
        const closePopup = document.getElementById('closePopup');
        const newsletterPopup = document.getElementById('newsletterPopup');
        
        if (!closePopup || !newsletterPopup) {
            console.warn('Newsletter popup elements not found');
            return;
        }

        closePopup.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.hideNewsletterPopup();
        });

        // Close on background click
        newsletterPopup.addEventListener('click', (e) => {
            if (e.target === newsletterPopup) {
                this.hideNewsletterPopup();
            }
        });

        // Handle newsletter subscription
        const subscribeBtn = newsletterPopup.querySelector('.btn--primary');
        const emailInput = newsletterPopup.querySelector('input[type="email"]');
        
        if (subscribeBtn && emailInput) {
            subscribeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const email = emailInput.value.trim();
                if (email) {
                    this.subscribeToNewsletter(email);
                }
            });
        }
        
        console.log('Newsletter popup initialized');
    }

    initFontControls() {
        const fontBtns = document.querySelectorAll('.font-btn');
        console.log('Found font control buttons:', fontBtns.length);
        
        fontBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const action = btn.getAttribute('data-action');
                console.log('Font control clicked:', action);
                this.adjustFontSize(action);
            });
        });
        
        console.log('Font controls initialized');
    }

    initPrintFunctionality() {
        document.body.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-platform') === 'print') {
                e.preventDefault();
                e.stopPropagation();
                console.log('Print button clicked');
                window.print();
            }
        });
        
        console.log('Print functionality initialized');
    }

    // Navigation methods
    navigateToSection(section) {
        console.log('Navigating to section:', section);
        
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.add('hidden');
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(section);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            targetPage.classList.add('active');
            this.currentPage = section;
            console.log('Successfully navigated to:', section);
        } else {
            console.error('Target page not found:', section);
        }

        // Update section title back to default if going to homepage
        if (section === 'homepage') {
            const sectionTitle = document.querySelector('.latest-news .section-title');
            if (sectionTitle) {
                sectionTitle.textContent = this.translations[this.currentLanguage].latestNews;
            }
        }
    }

    openArticle(element) {
        console.log('Opening article from element:', element);
        
        // Try to get article ID from element
        let articleId = element.getAttribute('data-article-id');
        
        // If no ID, try to find article by headline
        if (!articleId) {
            const headline = element.querySelector('.featured-headline, .news-item-headline, h4, h5, h2, h3');
            if (headline) {
                articleId = headline.textContent.trim();
                console.log('Found headline:', articleId);
            }
        }

        // Find the article in our data
        let article = this.data.sampleArticles.find(a => 
            a.id.toString() === articleId || 
            a.headline === articleId ||
            a.headline.includes(articleId)
        );

        // If not found, use the first article as default
        if (!article) {
            console.log('Article not found, using default');
            article = this.data.sampleArticles[0];
        }

        console.log('Selected article:', article.headline);
        
        this.currentArticle = article;
        this.populateArticlePage(article);
        this.navigateToSection('articlePage');
    }

    populateArticlePage(article) {
        console.log('Populating article page with:', article.headline);
        
        const elements = {
            category: document.getElementById('articleCategory'),
            headline: document.getElementById('articleHeadline'),
            author: document.getElementById('articleAuthor'),
            location: document.getElementById('articleLocation'),
            time: document.getElementById('articleTime'),
            body: document.getElementById('articleBody')
        };

        if (elements.category) elements.category.textContent = this.getCategoryInCurrentLanguage(article.category);
        if (elements.headline) elements.headline.textContent = article.headline;
        if (elements.author) elements.author.textContent = article.author;
        if (elements.location) elements.location.textContent = article.location;
        if (elements.time) {
            const date = new Date(article.timestamp);
            elements.time.textContent = this.formatDate(date);
        }

        // Article body content
        if (elements.body) {
            elements.body.innerHTML = article.content || `
                <p>హైదరాబాద్: తెలంగాణ రాష్ట్ర ప్రభుత్వం కొత్త IT పాలసీని ప్రకటించింది. ఈ పాలసీ ద్వారా రాష్ట్రంలో వేలాది ఉద్యోగాలు వస్తాయని ప్రభుత్వం అంచనా వేస్తోంది.</p>
                
                <p>ముఖ్యమంత్రి తెలిపిన వివరాల ప్రకారం, కొత్త IT పాలసీలో స్టార్టప్‌లకు ప్రత్యేక ప్రోత్సాహకాలు ఉంటాయి. టెక్నాలజీ రంగంలో వచ్చే కంపెనీలకు 10-15 సంవత్సరాలు పన్ను మినహాయింపు ఉంటుంది.</p>
                
                <p>హైదరాబాద్‌తో పాటు వరంగల్, విజయవాడ, విశాఖపట్నంలో కూడా కొత్త IT హబ్‌లు ఏర్పాటు చేయాలని ప్రభుత్వం యోచిస్తోంది. దీనితో గ్రామీణ ప్రాంతాల్లో కూడా IT ఉద్యోగాలు వస్తాయని అధికారులు తెలిపారు.</p>
                
                <p>ఈ పాలసీ వల్ల రాష్ట్రంలో 2 లక్షల మంది యువతకు ప్రత్యక్షంగా మరియు 5 లక్షల మందికి పరోక్షంగా ఉద్యోగావకాశాలు లభిస్తాయని ప్రభుత్వం అంచనా వేస్తోంది.</p>
            `;
        }
        
        console.log('Article page populated successfully');
    }

    // Language switching
    switchLanguage(lang) {
        console.log('Switching language to:', lang);
        this.currentLanguage = lang;
        this.updateUILanguage();
    }

    updateUILanguage() {
        const translations = this.translations[this.currentLanguage];
        
        // Update navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const navItems = ['home', 'telangana', 'andhrapradesh', 'national', 'international', 'sports', 'entertainment', 'business', 'technology', 'health'];
        
        navLinks.forEach((link, index) => {
            const key = navItems[index];
            if (translations[key]) {
                link.textContent = translations[key];
            }
        });

        // Update search placeholder
        const searchInput = document.getElementById('searchInput');
        if (searchInput && translations.searchPlaceholder) {
            searchInput.placeholder = translations.searchPlaceholder;
        }

        // Update comment placeholder
        const commentInput = document.getElementById('commentInput');
        if (commentInput && translations.writeComment) {
            commentInput.placeholder = translations.writeComment;
        }

        // Update other text elements
        const elementsToUpdate = [
            { selector: '.latest-news .section-title', key: 'latestNews' },
            { selector: '.ticker-label', key: 'breakingNews' }
        ];

        elementsToUpdate.forEach(item => {
            const elements = document.querySelectorAll(item.selector);
            elements.forEach(el => {
                if (translations[item.key]) {
                    el.textContent = translations[item.key];
                }
            });
        });
        
        console.log('UI language updated to:', lang);
    }

    // Theme switching
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        console.log('Theme switched to:', this.currentTheme);
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-color-scheme', this.currentTheme);
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
        }
    }

    // News rendering
    renderNewsGrid() {
        const newsGrid = document.getElementById('newsGrid');
        if (!newsGrid) {
            console.warn('News grid element not found for rendering');
            return;
        }

        console.log('Rendering news grid with', this.data.sampleArticles.length, 'articles');

        const newsHTML = this.data.sampleArticles.map(article => `
            <div class="news-item" data-article-id="${article.id}" style="cursor: pointer;">
                <div class="news-item-image">📰</div>
                <div class="news-item-content">
                    <span class="news-item-category">${this.getCategoryInCurrentLanguage(article.category)}</span>
                    <h3 class="news-item-headline">${article.headline}</h3>
                    <p class="news-item-summary">${article.summary}</p>
                    <div class="news-item-meta">
                        <span>${article.author}</span>
                        <span>${this.getTimeAgo(article.timestamp)}</span>
                    </div>
                </div>
            </div>
        `).join('');

        newsGrid.innerHTML = newsHTML;
        console.log('News grid rendered successfully');
    }

    // Search functionality
    searchNews(query) {
        console.log('Searching for:', query);
        
        const results = this.data.sampleArticles.filter(article => 
            article.headline.toLowerCase().includes(query.toLowerCase()) ||
            article.summary.toLowerCase().includes(query.toLowerCase()) ||
            article.category.toLowerCase().includes(query.toLowerCase()) ||
            article.location.toLowerCase().includes(query.toLowerCase())
        );

        console.log('Search results found:', results.length);
        this.displaySearchResults(results, query);
    }

    displaySearchResults(results, query) {
        const newsGrid = document.getElementById('newsGrid');
        const sectionTitle = document.querySelector('.latest-news .section-title');
        
        if (sectionTitle) {
            const searchResultsText = this.currentLanguage === 'te' ? 
                `"${query}" కోసం వెతుకుడు ఫలితాలు` : 
                `Search results for "${query}"`;
            sectionTitle.textContent = searchResultsText;
        }

        if (!newsGrid) return;

        if (results.length === 0) {
            const noResultsText = this.currentLanguage === 'te' ? 
                `"${query}" కోసం ఎటువంటి ఫలితాలు లేవు` : 
                `No results found for "${query}"`;
            newsGrid.innerHTML = `<div class="no-results">
                <p>${noResultsText}</p>
            </div>`;
            return;
        }

        const resultsHTML = results.map(article => `
            <div class="news-item" data-article-id="${article.id}" style="cursor: pointer;">
                <div class="news-item-image">📰</div>
                <div class="news-item-content">
                    <span class="news-item-category">${this.getCategoryInCurrentLanguage(article.category)}</span>
                    <h3 class="news-item-headline">${this.highlightSearchTerm(article.headline, query)}</h3>
                    <p class="news-item-summary">${this.highlightSearchTerm(article.summary, query)}</p>
                    <div class="news-item-meta">
                        <span>${article.author}</span>
                        <span>${this.getTimeAgo(article.timestamp)}</span>
                    </div>
                </div>
            </div>
        `).join('');

        newsGrid.innerHTML = resultsHTML;
    }

    highlightSearchTerm(text, term) {
        const regex = new RegExp(`(${term})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    // Category and district filtering
    filterByCategory(category) {
        console.log('Filtering by category:', category);
        
        let filteredArticles;
        let title;
        
        if (category === 'home' || category === 'homepage') {
            filteredArticles = this.data.sampleArticles;
            title = this.translations[this.currentLanguage].latestNews;
        } else {
            // Map category names
            const categoryMap = {
                'sports': 'Sports',
                'telangana': 'Telangana',
                'tech': 'Technology',
                'technology': 'Technology',
                'business': 'Business',
                'entertainment': 'Entertainment',
                'health': 'Health',
                'ap': 'Andhra Pradesh',
                'national': 'National',
                'international': 'International'
            };
            
            const actualCategory = categoryMap[category.toLowerCase()] || category;
            filteredArticles = this.data.sampleArticles.filter(article => 
                article.category.toLowerCase() === actualCategory.toLowerCase()
            );
            
            title = `${this.getCategoryInCurrentLanguage(actualCategory)} వార్తలు`;
        }
        
        console.log('Filtered articles:', filteredArticles.length);
        this.displayFilteredResults(filteredArticles, title);
        this.navigateToSection('homepage');
    }

    filterByDistrict(district) {
        console.log('Filtering by district:', district);
        
        const filteredArticles = this.data.sampleArticles.filter(article => 
            article.location.includes(district) || 
            article.location.toLowerCase().includes(district.toLowerCase())
        );
        
        this.displayFilteredResults(filteredArticles, `${district} వార్తలు`);
        this.navigateToSection('homepage');
    }

    displayFilteredResults(articles, title) {
        const newsGrid = document.getElementById('newsGrid');
        const sectionTitle = document.querySelector('.latest-news .section-title');
        
        if (sectionTitle) {
            sectionTitle.textContent = title;
        }

        if (!newsGrid) return;

        if (articles.length === 0) {
            const noResultsText = this.currentLanguage === 'te' ? 
                'ఈ విభాగంలో వార్తలు లేవు' : 
                'No news found in this category';
            newsGrid.innerHTML = `<div class="no-results"><p>${noResultsText}</p></div>`;
            return;
        }

        const articlesHTML = articles.map(article => `
            <div class="news-item" data-article-id="${article.id}" style="cursor: pointer;">
                <div class="news-item-image">📰</div>
                <div class="news-item-content">
                    <span class="news-item-category">${this.getCategoryInCurrentLanguage(article.category)}</span>
                    <h3 class="news-item-headline">${article.headline}</h3>
                    <p class="news-item-summary">${article.summary}</p>
                    <div class="news-item-meta">
                        <span>${article.author}</span>
                        <span>${this.getTimeAgo(article.timestamp)}</span>
                    </div>
                </div>
            </div>
        `).join('');

        newsGrid.innerHTML = articlesHTML;
    }

    // Social sharing
    shareArticle(platform) {
        if (!this.currentArticle) {
            console.warn('No current article to share');
            return;
        }

        console.log('Sharing article via:', platform);

        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(this.currentArticle.headline);
        const text = encodeURIComponent(this.currentArticle.summary);

        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
            whatsapp: `https://wa.me/?text=${title}%20${url}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            email: `mailto:?subject=${title}&body=${text}%20${url}`,
            print: () => window.print()
        };

        if (platform === 'print') {
            window.print();
        } else if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    }

    // Comments system
    addComment(commentText) {
        const commentsList = document.getElementById('commentsList');
        if (!commentsList) {
            console.warn('Comments list element not found');
            return;
        }

        const now = new Date();
        const userName = this.currentLanguage === 'te' ? 'అనామిక వినియోగదారు' : 'Anonymous User';
        const commentHTML = `
            <div class="comment fade-in">
                <div class="comment-author">${userName}</div>
                <div class="comment-time">${this.getTimeAgo(now.toISOString())}</div>
                <div class="comment-text">${commentText}</div>
            </div>
        `;

        commentsList.insertAdjacentHTML('afterbegin', commentHTML);
        
        // Update comment count
        const commentsTitle = commentsList.closest('.comments-section').querySelector('h3');
        if (commentsTitle) {
            const currentCount = commentsList.children.length;
            const commentsText = this.currentLanguage === 'te' ? 'అభిప్రాయాలు' : 'Comments';
            commentsTitle.textContent = `${commentsText} (${currentCount})`;
        }
        
        console.log('Comment added successfully');
    }

    // Newsletter popup
    showNewsletterPopup() {
        const popup = document.getElementById('newsletterPopup');
        if (popup && !localStorage.getItem('newsletter-dismissed')) {
            popup.classList.remove('hidden');
            console.log('Newsletter popup shown');
        }
    }

    hideNewsletterPopup() {
        const popup = document.getElementById('newsletterPopup');
        if (popup) {
            popup.classList.add('hidden');
            localStorage.setItem('newsletter-dismissed', 'true');
            console.log('Newsletter popup hidden');
        }
    }

    subscribeToNewsletter(email) {
        const successMessage = this.currentLanguage === 'te' ? 
            'వార్తలెట్టర్ కోసం విజయవంతంగా నమోదు అయ్యారు!' : 
            'Successfully subscribed to newsletter!';
        
        console.log('Newsletter subscription for:', email);
        
        // Simulate API call
        setTimeout(() => {
            alert(successMessage);
            this.hideNewsletterPopup();
        }, 1000);
    }

    // Font size controls
    adjustFontSize(action) {
        const articleBody = document.getElementById('articleBody');
        if (!articleBody) {
            console.warn('Article body not found for font adjustment');
            return;
        }

        if (action === 'increase' && this.fontSize < 1.5) {
            this.fontSize += 0.1;
        } else if (action === 'decrease' && this.fontSize > 0.8) {
            this.fontSize -= 0.1;
        }

        articleBody.style.fontSize = `${this.fontSize}em`;
        console.log('Font size adjusted to:', this.fontSize);
    }

    // Utility methods
    getCategoryInCurrentLanguage(category) {
        const categoryMap = {
            'Technology': this.currentLanguage === 'te' ? 'టెక్నాలజీ' : 'Technology',
            'Sports': this.currentLanguage === 'te' ? 'క్రీడలు' : 'Sports',
            'Telangana': this.currentLanguage === 'te' ? 'తెలంగాణ' : 'Telangana',
            'Entertainment': this.currentLanguage === 'te' ? 'వినోదం' : 'Entertainment',
            'Business': this.currentLanguage === 'te' ? 'వ్యాపారం' : 'Business',
            'Health': this.currentLanguage === 'te' ? 'ఆరోగ్యం' : 'Health'
        };
        return categoryMap[category] || category;
    }

    getTimeAgo(timestamp) {
        const now = new Date();
        const articleTime = new Date(timestamp);
        const diffInMinutes = Math.floor((now - articleTime) / (1000 * 60));

        if (diffInMinutes < 60) {
            return this.currentLanguage === 'te' ? `${diffInMinutes} నిమిషాల క్రితం` : `${diffInMinutes} minutes ago`;
        } else if (diffInMinutes < 1440) {
            const hours = Math.floor(diffInMinutes / 60);
            return this.currentLanguage === 'te' ? `${hours} గంటల క్రితం` : `${hours} hours ago`;
        } else {
            const days = Math.floor(diffInMinutes / 1440);
            return this.currentLanguage === 'te' ? `${days} రోజుల క్రితం` : `${days} days ago`;
        }
    }

    formatDate(date) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString(this.currentLanguage === 'te' ? 'te-IN' : 'en-IN', options);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Telugu News App...');
    window.teluguNewsApp = new TeluguNewsApp();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Page visible - resuming activities');
    } else {
        console.log('Page hidden - pausing activities');
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TeluguNewsApp;
}