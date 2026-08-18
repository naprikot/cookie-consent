# Cookie Consent Banner

A solution to the [Cookie Consent](https://roadmap.sh/projects/cookie-consent) challenge on [roadmap.sh](https://roadmap.sh).

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Project-blue?style=for-the-badge&logo=vercel)](https://naprikot.github.io/cookie-consent) 


## The Challenge

Create a simple cookie consent popup using HTML, CSS, and JavaScript that appears when a user visits the page. The user must be able to accept or decline the consent, which dismisses the banner. 

**Bonus Objective:** Persist the user's consent using cookies or local storage to prevent the popup from appearing on subsequent visits.

## Approach

- **State Persistence (Bonus Completed)**: Utilizes the browser's `localStorage` API. Upon clicking either "Accept" or "Decline", the preference is saved (`localStorage.setItem('cookieConsent', status)`). On page load, JavaScript checks for this key and bypasses rendering the banner entirely if a preference exists.
- **Animation & DOM Lifecycle**: The banner starts with the native HTML `hidden` attribute to ensure it is fully removed from the accessibility tree. When triggered, JS removes the attribute and uses `requestAnimationFrame` to apply a `.is-visible` class, triggering a smooth, hardware-accelerated CSS slide-up transition (`transform` and `opacity`).
- **Accessibility (A11y)**: The aside container uses `aria-live="polite"`. This guarantees that screen readers will announce the privacy message when it dynamically mounts, without aggressively interrupting the user's current task. Focus states are clearly defined for keyboard navigation.
- **Responsive Layout**: Designed with a mobile-first column flex layout that snaps into a horizontal row structure on viewports `600px` and wider. Styled using the dark Kanagawa Dragon palette.

## Built With

- Semantic HTML5
- CSS (Custom properties, Flexbox, Transitions)
- Vanilla JavaScript (DOM manipulation, `localStorage`, `requestAnimationFrame`)

