document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const langContents = document.querySelectorAll('.lang-content');

    if (langButtons.length === 0) return;

    langButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');

            langButtons.forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add('active');

            langContents.forEach(function(content) {
                if (content.getAttribute('data-lang') === lang) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});
