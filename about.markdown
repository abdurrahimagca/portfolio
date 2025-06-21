---
layout: default
title: About Me
permalink: /about/
---

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

<script>
  window.location.href = "/#about";
</script>

<section class="redirect-page">
    <div class="container">
        <div class="redirect-content">
            <h1>Redirecting...</h1>
            <p>You're being redirected to the About section on the homepage.</p>
            <p>If you're not redirected automatically, <a href="/#about">click here</a>.</p>
        </div>
    </div>
</section>

<style>
.redirect-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-primary);
    text-align: center;
}

.redirect-content h1 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.redirect-content p {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.redirect-content a {
    color: var(--primary-color);
    text-decoration: underline;
}
</style>
