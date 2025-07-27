# Promotion Landing Page & Responsive Claim Form

## Overview

This repository contains two fully implemented projects:

1. **Promotion Landing Page**  
   A responsive pixel-perfect marketing landing page built using semantic HTML and CSS, designed to adapt seamlessly across mobile and desktop devices. 

2. **Responsive Claim Form**  
   A single-page responsive claim form application built with **[React]** . It follows a detailed Figma design and includes key UI sections like navigation, hero, services, and contact form, styled with SCSS/SASS.

---

## Project Details

### Promotion Landing Page
- Built with clean, semantic HTML5 and CSS.
- JavaScript scripts for form handling and validations
- Fully responsive with mobile and desktop breakpoints.
- Fully functional cta buttons- cta buttons open the form.
- Added a close button to close the form and set back page in the initial state.
- Includes all necessary assets: images, fonts, and stylesheets.
- Cross-browser tested for consistent appearance.
- Focused on performance , pixcel-perfect design and accessibility best practices.

### Responsive Claim Form
- Developed using **[React]** for a modern, component-based architecture.
- Styled with SCSS/SASS, adhering closely to the provided Figma layout.
- Responsive design supporting various screen sizes and devices.
- Page components include:
  - Header with navigation links
  - Hero section with image and promotional text
  - Services section containing 3 cards with icons and descriptive text
  - Contact form- subsection of services with accessible inputs and validations 
- Performance optimizations included, aiming for Google Lighthouse score above 90. Lighthouse score 97
- Accessibility considerations implemented, such as proper form labels and keyboard navigation support.

---

## Optional Features Implemented

- **Performance Optimization:**  
  Code-splitting implemented to enhance load times and runtime performance.

- **Custom Animations:**  
  Subtle UI animations on the Hero Section added to improve user experience, including hover effects and smooth transitions.



## Assumptions

- The main font BrownPro is temporarily replaced by Montserrat 
- Figma design was used as the primary style reference with minor adjustments for responsiveness and accessibility.

## Potential Improvements / Suggestions

- Implement global state management using Redux or Context API for more scalable form handling.
- Add integration with a real backend or Firebase for actual form submissions.
- Enhance UI with animations using Framer Motion for a smoother experience.
- Use Intersection Observer to trigger section transitions or count-up animations.
- Use TypeScript for type safety and better developer experience.
- Add unit/integration tests with Jest and React Testing Library.

---

## Running the Projects

### Promotion Landing Page

1. Extract the ZIP folder.
2. Open `index.html` in any modern browser.


### Responsive Claim Form

1. Clone the repository or extract the ZIP.
2. Open terminal and navigate to the project folder.
3. Install dependencies and run the development server:

   ```bash
   npm install
   npm start
