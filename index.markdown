---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero" id="hero">
    <div class="hero-bg parallax" data-speed="0.5"></div>
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">
                    <span class="hero-greeting">Hello, I'm</span>
                    <span class="hero-name">Your Name</span>
                </h1>
                <h2 class="hero-subtitle">Full-Stack Developer</h2>
                <p class="hero-description">
                    I craft digital experiences through clean code and innovative solutions. 
                    Specializing in modern web technologies and bringing ideas to life.
                </p>
                <div class="hero-buttons">
                    <a href="#services" class="btn btn-primary">View My Work</a>
                    <a href="#contact" class="btn btn-outline">Get In Touch</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="code-animation">
                    <div class="code-line"></div>
                    <div class="code-line"></div>
                    <div class="code-line"></div>
                    <div class="code-line"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
    </div>
</section>

<!-- About Section -->
<section class="about" id="about">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">About Me</h2>
            <p class="section-subtitle">Passionate developer with a love for creating</p>
        </div>
        
        <div class="about-content">
            <div class="about-text">
                <p>
                    I'm a passionate full-stack developer with over X years of experience creating 
                    digital solutions that make a difference. I love turning complex problems into 
                    simple, beautiful designs.
                </p>
                <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to 
                    open source projects, or sharing knowledge through technical writing.
                </p>
                
                <div class="skills-grid">
                    <div class="skill-category">
                        <h4>Frontend</h4>
                        <div class="skills">
                            <span class="skill">React</span>
                            <span class="skill">Vue.js</span>
                            <span class="skill">TypeScript</span>
                            <span class="skill">CSS/SCSS</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4>Backend</h4>
                        <div class="skills">
                            <span class="skill">Node.js</span>
                            <span class="skill">Python</span>
                            <span class="skill">PostgreSQL</span>
                            <span class="skill">MongoDB</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4>Tools</h4>
                        <div class="skills">
                            <span class="skill">Docker</span>
                            <span class="skill">AWS</span>
                            <span class="skill">Git</span>
                            <span class="skill">Figma</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="about-stats">
                <div class="stat-item">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">Projects Completed</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">3+</span>
                    <span class="stat-label">Years Experience</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Client Satisfaction</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="services" id="services">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Services & Projects</h2>
            <p class="section-subtitle">What I can do for you</p>
        </div>
        
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-code"></i>
                </div>
                <h3>Web Development</h3>
                <p>Custom web applications built with modern technologies and best practices.</p>
                <ul class="service-features">
                    <li>Responsive Design</li>
                    <li>Performance Optimization</li>
                    <li>SEO Implementation</li>
                </ul>
            </div>
            
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h3>Mobile Development</h3>
                <p>Cross-platform mobile applications that deliver excellent user experiences.</p>
                <ul class="service-features">
                    <li>React Native</li>
                    <li>Progressive Web Apps</li>
                    <li>Native Performance</li>
                </ul>
            </div>
            
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-server"></i>
                </div>
                <h3>Backend Development</h3>
                <p>Scalable server-side solutions with robust APIs and database management.</p>
                <ul class="service-features">
                    <li>RESTful APIs</li>
                    <li>Database Design</li>
                    <li>Cloud Deployment</li>
                </ul>
            </div>
        </div>
        
        <!-- Featured Projects -->
        <div class="projects-showcase">
            <h3 class="projects-title">Featured Projects</h3>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h4>E-Commerce Platform</h4>
                        <p>Full-stack e-commerce solution with payment integration and admin dashboard.</p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">PostgreSQL</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h4>Task Management App</h4>
                        <p>Collaborative project management tool with real-time updates and team features.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Express</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h4>Weather Dashboard</h4>
                        <p>Real-time weather application with location-based forecasts and data visualization.</p>
                        <div class="project-tech">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">API Integration</span>
                            <span class="tech-tag">Chart.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="contact" id="contact">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Let's Work Together</h2>
            <p class="section-subtitle">Ready to bring your ideas to life</p>
        </div>
        
        <div class="contact-content">
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-details">
                        <h4>Email</h4>
                        <p>{{ site.email }}</p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="contact-details">
                        <h4>Phone</h4>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="contact-details">
                        <h4>Location</h4>
                        <p>Your City, Country</p>
                    </div>
                </div>
            </div>
            
            <form class="contact-form">
                <div class="form-group">
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                </div>
                
                <div class="form-group">
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                </div>
                
                <div class="form-group">
                    <input type="text" id="subject" name="subject" placeholder="Subject" required>
                </div>
                
                <div class="form-group">
                    <textarea id="message" name="message" rows="6" placeholder="Your Message" required></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
    </div>
</section>
