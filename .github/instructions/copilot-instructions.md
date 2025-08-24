# Project Overview

This project is an Angular application designed to serve as my personal website. It will
showcase my portfolio, blog posts, photos,contact information etc.

## Context

- I don't like to use services such as Wordpress because I hate the bad ads they put
and I find solutions like Jekyll too limited.
- I want to have a modern, fast, and customizable website that I can easily update and
maintain.
- As an experience mobile developer, I also want to learn and practice Angular, as it is
a popular framework for building web applications.

## Constraints

- The project must be built using **Angular** and **TypeScript**.
- The website must be **responsive** and work well on both desktop and mobile devices.
- The website must be **SEO-friendly** and optimized for search engines.
- The website must be **fast** and have a good performance score.
- The project will likely be hosted on **GitHub Pages** for easy deployment and
maintenance.
- Since I'm still learning Angular, the code should be **clean**, **well-documented**,
with simple architecture and **best practices** at the beginning, so that we can
refactor and improve it later (but not messy).

## Purpose

The purpose of this project is to create a personal website that reflects my skills,
interests, and personality. It will serve as a platform to showcase my work, share my
thoughts, and connect with others. It will also help me learn and practice Angular,
which is a valuable skill for my career as a mobile developer.

## Development Guidelines for the Assistant

- Always act like a **professional software engineer**.
- Follow **best practices** for Angular and TypeScript development.
- Write **clean, modular, and idiomatic TypeScript/Angular** code.
- Use good naming conventions, clear structure, and helpful comments.
- When generating code, **output the full file**, not a diff.
- Correct me if I propose something that goes against best practices.
- Prefer readability over cleverness. This is a maintainable personal website.


# Angular Project Conventions
- Use Angular CLI for project setup and management.
- Follow Angular Style Guide: https://angular.io/guide/styleguide.
- Use TypeScript with strict typing enabled.
- Use RxJS for handling asynchronous operations.
- Use Angular Material or Bootstrap for UI components and styling.
- Write unit tests using Jasmine and Karma.
- Add logging using Angular's built-in logging service for debugging and error tracking.
- Use environment files for configuration settings.

# Plan

Here is the development plan for the Angular blog project:

### **Phase 1: Foundational Setup and Core Components**

Focused on establishing the basic structure of the website. Replace the default Angular landing page with our own, create a clear navigation system, and set up the main layout.

* **1.1. Core Layout and Navigation:**

* ✅ Create a `Header` and a `Footer` components to define the top and bottom sections of the website.
* ✅ Integrate these components into the main `App` component's template.
* Implement a responsive navigation menu within the `Header` that works on both desktop and mobile devices.

* **1.2. Routing:**

* Configure the Angular Router to handle navigation to different sections of the website.
* Define routes for key pages like `Home`, `About`, `Blog`, `Portfolio`, and `Contact`.

* **1.3. Home Page:**

* Develop the `Home` component which will serve as the landing page.
* This page should include an introduction, a call-to-action (e.g., "Read my latest blog post"), and links to other sections.

### **Phase 2: Blog Functionality**

Dedicated to building the core blog features, create the necessary components and services to display a list of posts and individual post details.

* **2.1. Data Service:**

* Create a `BlogService` to manage blog post data. Initially, this service can use a local JSON file or a mock data structure to simulate a data source.
* The service will have methods to fetch all posts and a single post by its slug or ID.

* **2.2. Blog List Page:**

* Create a `BlogList` component to display all blog posts in a list format.
* The component will use the `BlogService` to retrieve the data and display a summary for each post, including the title, a short excerpt, and the publication date.
* **2.3. Blog Post Detail Page:**

* Create a `BlogPost` component to display the full content of a single blog post.
* This component will use the Angular Router to get the post ID from the URL and fetch the specific post data from the `BlogService`.

### **Phase 3: Portfolio and Other Content Pages**

In this phase, we'll build out the remaining content sections of the website, following a similar pattern to the blog section.

* **3.1. Portfolio Page:**

* Create a `Portfolio` component to showcase a list of projects.
* Similar to the blog, create a `PortfolioService` with mock data for projects.
* Each project entry will include a title, description, and links to the live project or a GitHub repository.

* **3.2. About and Contact Pages:**

* Create an `About` component with information about your professional background, skills, and interests.
* Create a `Contact` component with your contact information. Initially, this can be a simple page with an email address, social media links, etc. We can consider adding a contact form later.

### **Phase 4: Design, SEO, and Performance Optimization**

This is the refinement phase where we'll focus on making the website look good and perform well.

* **4.1. Styling and Responsiveness:**

* Integrate a CSS framework like **Angular Material** or **Bootstrap** for a clean, professional look.
* Ensure all components are fully responsive and provide a great user experience on various screen sizes.

* **4.2. SEO and Accessibility:**

* Implement SEO best practices by adding meta tags, structured data, and meaningful titles to each page.
* Ensure the site is accessible to all users by following WCAG guidelines (e.g., using proper semantic HTML, ARIA attributes, and accessible color contrasts).

* **4.3. Performance:**

* Lazy-load modules for the blog, portfolio, and other content-heavy sections to improve initial load times.
* Optimize images and other assets.
* Review and improve performance metrics using tools like Lighthouse.

### **Phase 5: Deployment**

The final phase involves preparing the application for production and deploying it.

* **5.1. Production Build:**

* Use the `ng build --configuration production` command to create an optimized production build.
* Configure the build to be hosted on GitHub Pages by setting the correct `base href` in `angular.json`.

* **5.2. GitHub Pages Workflow:**

* Set up a GitHub Action to automatically build and deploy the application to GitHub Pages whenever changes are pushed to a specific branch (e.g., `main`).
