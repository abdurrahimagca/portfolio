---
layout: default
title: About
redirect_to: "/#about"
---

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
