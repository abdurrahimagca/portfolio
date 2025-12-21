// Blog search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('blog-search');
    const postsGrid = document.getElementById('blog-posts-grid');
    const noResults = document.getElementById('blog-no-results');
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (!searchInput || !postsGrid) return;
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;
        
        blogCards.forEach(card => {
            const title = card.getAttribute('data-title') || '';
            const excerpt = card.getAttribute('data-excerpt') || '';
            
            if (searchTerm === '' || title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show/hide no results message
        if (visibleCount === 0 && searchTerm !== '') {
            noResults.style.display = 'block';
            postsGrid.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            postsGrid.style.display = 'grid';
        }
    }
    
    // Search on input
    searchInput.addEventListener('input', performSearch);
    
    // Clear search on Escape key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch();
            searchInput.blur();
        }
    });
    
    // Make entire card clickable
    blogCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const url = card.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});

