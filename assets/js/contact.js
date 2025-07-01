document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('copy-button');
  const emailElement = document.getElementById('email-value');

  if (copyButton && emailElement) {
    copyButton.addEventListener('click', () => {
      const emailValue = 'agcaabdurrahim@outlook.com';
      
      navigator.clipboard.writeText(emailValue).then(() => {
        // Visual feedback - temporarily change the icon and show success
        const icon = copyButton.querySelector('i');
        const originalClass = icon.className;
        
        icon.className = 'fas fa-check';
        copyButton.style.background = '#4CAF50';
        copyButton.title = 'Copied!';
        
        // Reset after 2 seconds
        setTimeout(() => {
          icon.className = originalClass;
          copyButton.style.background = '';
          copyButton.title = 'Copy to clipboard';
        }, 2000);
        
        console.log('Email copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy email: ', err);
        // Show error feedback
        const icon = copyButton.querySelector('i');
        const originalClass = icon.className;
        
        icon.className = 'fas fa-times';
        copyButton.style.background = '#f44336';
        copyButton.title = 'Copy failed';
        
        setTimeout(() => {
          icon.className = originalClass;
          copyButton.style.background = '';
          copyButton.title = 'Copy to clipboard';
        }, 2000);
      });
    });
  }
});
