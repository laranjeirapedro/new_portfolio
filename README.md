# Pedro Laranjeira - Web Developer Portfolio

This is my personal web development portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It showcases some of my skills and projects in the web development field. As a junior web developer, this portfolio reflects my journey and learning path, focusing on both design and development principles.

## Project Overview

This portfolio serves as a showcase of my skills in front-end development, as well as my ability to build modern, responsive, and accessible websites. It includes a variety of sections that demonstrate the technologies I have learned and applied, including my experience with **React**, **Next.js**, **TypeScript**, and **Tailwind CSS**. In addition, it integrates the **GitHub API** to dynamically display real project data from my repositories.

## Features

- **Responsive Design:** The portfolio is fully responsive, ensuring a seamless experience across devices of all sizes.
- **Dynamic GitHub Projects Integration:** Projects are fetched from the GitHub API and filtered by topic. Each project displays title, description, homepage link (if available), and a color-coded language usage bar.
- **Contact Form:** A simple form that allows users to reach out directly. It was created using React Hook Form and Nodemailer.

## Technologies Used

- **React:** Used to build dynamic user interfaces and manage state.
- **Next.js:** Provides server-side rendering, static site generation, and routing. Used for building a fast and SEO-friendly portfolio.
- **TypeScript:** Provides static typing and enhances the development process, ensuring better maintainability and fewer bugs.
- **Tailwind CSS:** A utility-first CSS framework used for styling the components and creating a responsive, modern design.
- **Vercel:** Deployed the portfolio to Vercel, taking advantage of the platform's seamless integration with Next.js for fast deployment.

## Components

### 1. **Header**
- Displays the logo and navigation links for easy access to different sections of the portfolio.
- Uses responsive design to adapt the navigation bar to smaller screens.

### 2. **HeroSection**
- A welcoming section that introduces the developer with a catchy message and CTA (Call to Action) to see the projects.

### 3. **Projects Section**
- Fetches projects dynamically from the GitHub API.
- Filters repositories by the "portfolio" topic.
- Displays title, description, language, homepage link (if provided), and a dynamic language usage bar with color-coded representation.

### 4. **LanguagesBar Component**
- Retrieves data from the GitHub API's language endpoint.
- Calculates the percentage usage of each language per project and renders a visual bar chart with color indicators for each language.

### 5. **Contact Form**
- A simple form that allows users to send messages directly to me.
- Demonstrates basic form handling and validation in React.

## Learning Outcomes

This project allowed me to apply my knowledge and skills in:

- **React:** I used React components to build dynamic and reusable parts of the portfolio, ensuring a clean and organized codebase.
- **Next.js:** By leveraging Next.js, I was able to create a fast, SEO-friendly, and production-ready portfolio. The framework allowed me to implement routing and static site generation effectively.
- **TypeScript:** Using TypeScript helped me write more maintainable code by providing static typing, reducing errors and improving collaboration in a team environment.
- **Tailwind CSS:** Tailwind allowed me to quickly design a responsive and clean layout without the need for custom CSS. It also helped in maintaining consistency in design across the site.
- **GitHub API:** Gained experience in integrating third-party APIs and handling asynchronous data fetching and filtering to enhance user experience.

## Future Improvements

- **API Integration for Blog:** In the future, I plan to integrate an API to dynamically pull blog posts and other content.
- **Advanced Contact Form:** I plan to enhance the contact form with better validation and spam protection.
- **Skills Section:** Showcases the main technologies and frameworks I am proficient in. Designed with a grid layout to display icons for each technology.
- **Accessibility Improvements:** Adding better accessibility features like ARIA roles and focus states to improve the user experience for all visitors.
- **Performance Optimizations:** I plan to analyze and optimize the performance further, using tools like Lighthouse and Web Vitals to ensure the site loads quickly on all devices.

## Conclusion

This portfolio project demonstrates my growth as a junior web developer. It is a reflection of my current skills and my journey towards becoming a well-rounded developer. I am excited to continue learning and improving in web development, and I look forward to future opportunities to apply my skills in real-world projects.

Feel free to explore my portfolio, and don't hesitate to reach out for collaborations, projects, or feedback!

---

**Links:**

- **GitHub Repository:** [https://github.com/pedrolaranjeira/portfolio](https://github.com/pedrolaranjeira/portfolio)
- **Live Version:** [https://pedro-laranjeira-portfolio.vercel.app/](https://pedro-laranjeira-portfolio.vercel.app/)
