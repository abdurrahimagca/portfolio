---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero" id="hero">
    <div class="hero-bg"></div>
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">
                    <span class="hero-greeting">{{ site.data.hero.greeting }}</span>
                    <span class="hero-name">{{ site.data.hero.name }}</span>
                </h1>
                <h2 class="hero-subtitle">{{ site.data.hero.subtitle }}</h2>
                <p class="hero-description">
                    {{ site.data.hero.description }}
                </p>
                <div class="hero-buttons">
                    <a href="/about" class="btn btn-primary">About Me</a>
                    <a href="/services" class="btn btn-outline">View My Work</a>
                    <a href="/contact" class="btn btn-outline">Get In Touch</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="code-animation">
                    <div class="window-controls">
                        <div class="control close"></div>
                        <div class="control minimize"></div>
                        <div class="control maximize"></div>
                    </div>
                    <div class="code-content">
                        <div class="json-data">
                            <div class="json-line json-line-1"><span class="json-brace">{</span></div>
                            <div class="json-line json-line-2">  <span class="json-key">"name"</span><span class="json-colon">:</span> <span class="json-string">"{{ site.data.hero.json_animation.name }}"</span><span class="json-comma">,</span></div>
                            <div class="json-line json-line-3">  <span class="json-key">"surname"</span><span class="json-colon">:</span> <span class="json-string">"{{ site.data.hero.json_animation.surname }}"</span><span class="json-comma">,</span></div>
                            <div class="json-line json-line-4">  <span class="json-key">"role"</span><span class="json-colon">:</span> <span class="json-string">"{{ site.data.hero.json_animation.role }}"</span><span class="json-comma">,</span></div>
                            <div class="json-line json-line-5">  <span class="json-key">"status"</span><span class="json-colon">:</span> <span class="json-string">"{{ site.data.hero.json_animation.status }}"</span><span class="json-comma">,</span></div>
                            <div class="json-line json-line-6">  <span class="json-key">"skills"</span><span class="json-colon">:</span> <span class="json-bracket">[</span></div>
                            {% for skill in site.data.hero.json_animation.skills %}
                            <div class="json-line json-line-{{ forloop.index | plus: 6 }}">    <span class="json-string">"{{ skill }}"</span>{% unless forloop.last %}<span class="json-comma">,</span>{% endunless %}</div>
                            {% endfor %}
                            <div class="json-line json-line-11">  <span class="json-bracket">]</span><span class="json-comma">,</span></div>
                            <div class="json-line json-line-12">  <span class="json-key">"location"</span><span class="json-colon">:</span> <span class="json-string">"{{ site.data.hero.json_animation.location }}"</span><span class="json-comma">,</span></div>
                            <div class="json-line json-line-13">  <span class="json-key">"experience"</span><span class="json-colon">:</span> <span class="json-string">"{{ site.data.hero.json_animation.experience }}"</span><span class="json-comma">,</span></div>
                            <div class="json-line json-line-14">  <span class="json-key">"passion"</span><span class="json-colon">:</span> <span class="json-string">"{{ site.data.hero.json_animation.passion }}"</span></div>
                            <div class="json-line json-line-15"><span class="json-brace">}</span></div>
                        </div>
                    </div>
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
            <h2 class="section-title">{{ site.data.about.title }}</h2>
            <p class="section-subtitle">{{ site.data.about.subtitle }}</p>
        </div>
        
        <div class="about-content">
            <div class="about-text">
                {% for paragraph in site.data.about.description %}
                <p>{{ paragraph }}</p>
                {% endfor %}
                
                <div class="skills-grid">
                    <div class="skill-category">
                        <h4>{{ site.data.about.skills.frontend.title }}</h4>
                        <div class="skills">
                            {% for skill in site.data.about.skills.frontend.items %}
                            <span class="skill">{{ skill }}</span>
                            {% endfor %}
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4>{{ site.data.about.skills.backend.title }}</h4>
                        <div class="skills">
                            {% for skill in site.data.about.skills.backend.items %}
                            <span class="skill">{{ skill }}</span>
                            {% endfor %}
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h4>{{ site.data.about.skills.tools.title }}</h4>
                        <div class="skills">
                            {% for skill in site.data.about.skills.tools.items %}
                            <span class="skill">{{ skill }}</span>
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="about-stats">
                {% for stat in site.data.about.stats %}
                <div class="stat-item">
                    <span class="stat-number">{{ stat.number }}</span>
                    <span class="stat-label">{{ stat.label }}</span>
                </div>
                {% endfor %}
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
            <h3 class="projects-title">{{ site.data.services.projects.title }}</h3>
            <div class="projects-grid">
                {% for project in site.data.services.projects.items %}
                <div class="project-card">
                    <div class="project-image">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="{{ project.demo_link }}" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="{{ project.github_link }}" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h4>{{ project.title }}</h4>
                        <p>{{ project.description }}</p>
                        <div class="project-tech">
                            {% for tech in project.technologies %}
                            <span class="tech-tag">{{ tech }}</span>
                            {% endfor %}
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="contact" id="contact">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">{{ site.data.contact.title }}</h2>
            <p class="section-subtitle">{{ site.data.contact.subtitle }}</p>
        </div>
        
        <div class="contact-content">
            <div class="contact-info">
                {% for info in site.data.contact.contact_info %}
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="{{ info.icon }}"></i>
                    </div>
                    <div class="contact-details">
                        <h4>{{ info.title }}</h4>
                        {% if info.title == 'Email' %}
                        <p><a href="mailto:{{ info.value }}">{{ info.value }}</a></p>
                        {% elsif info.title == 'LinkedIn' %}
                        <p><a href="https://{{ info.value }}" target="_blank">{{ info.value }}</a></p>
                        {% elsif info.title == 'GitHub' %}
                        <p><a href="https://{{ info.value }}" target="_blank">{{ info.value }}</a></p>
                        {% elsif info.title == 'Location' %}
                        <p><a href="https://maps.google.com/?q={{ info.value | url_encode }}" target="_blank">{{ info.value }}</a></p>
                        {% else %}
                        <p>{{ info.value }}</p>
                        {% endif %}
                    </div>
                </div>
                {% endfor %}
            </div>
            
            <form class="contact-form">
                {% for field in site.data.contact.form.fields %}
                <div class="form-group">
                    {% if field.type == 'textarea' %}
                    <textarea id="{{ field.name }}" name="{{ field.name }}" rows="{{ field.rows }}" placeholder="{{ field.placeholder }}" {% if field.required %}required{% endif %}></textarea>
                    {% else %}
                    <input type="{{ field.type }}" id="{{ field.name }}" name="{{ field.name }}" placeholder="{{ field.placeholder }}" {% if field.required %}required{% endif %}>
                    {% endif %}
                </div>
                {% endfor %}
                
                <button type="submit" class="btn btn-primary">{{ site.data.contact.form.submit_text }}</button>
            </form>
        </div>
    </div>
</section>
