document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  // 1. Check local storage for persistent consent data
  const consentStatus = localStorage.getItem('cookieConsent');

  // 2. If no data exists, display the banner
  if (!consentStatus) {
    // Remove HTML hidden attribute so the element enters the document flow
    banner.removeAttribute('hidden');
    
    // Slight delay forces browser to calculate layout before applying animation class
    requestAnimationFrame(() => {
      banner.classList.add('is-visible');
    });
  }

  // 3. Handle closing and persistence
  const handleConsent = (status) => {
    // Save to local storage (fulfills the bonus requirement)
    localStorage.setItem('cookieConsent', status);
    
    // Trigger slide-down exit animation
    banner.classList.remove('is-visible');
    
    // Wait for CSS transition (0.4s) to finish before fully hiding from screen readers
    setTimeout(() => {
      banner.setAttribute('hidden', 'true');
    }, 400); 
  };

  acceptBtn.addEventListener('click', () => handleConsent('accepted'));
  declineBtn.addEventListener('click', () => handleConsent('declined'));
});
