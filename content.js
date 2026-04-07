/**
 * ============================================================
 *  PORTFOLIO CONTENT — Edit this file to customize your site!
 * ============================================================
 *
 *  HOW TO USE:
 *  - Change any text by editing the strings below
 *  - Change any image by replacing the URL with a new one
 *    (you can use Unsplash, Pexels, or upload your own images)
 *  - Add new projects by copying a project block and filling
 *    in your own info
 *  - Save the file, and your site updates automatically!
 *
 * ============================================================
 */

const SITE_CONTENT = {

  // ──────────────────────────────────────────────
  //  SITE BRANDING
  // ──────────────────────────────────────────────
  siteName: "ROSE",        // First part of your logo
  siteNameBold: "ARCH Portfolio",      // Bold part of your logo
  pageTitle: "Architectural Portfolio | Minimalist Design",

  // Navigation links (you can rename these)
  navLinks: [
    { text: "Home", href: "#home" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" }
  ],

  // ──────────────────────────────────────────────
  //  HERO SECTION (the big landing area)
  // ──────────────────────────────────────────────
  hero: {
    // Use <br> for line breaks, <span class="italic"> for italic text
    title: 'Evolving <br><span class="italic">Projects</span> Through Time',
    subtitle: "A 2022 to 2026 Timeline.",
    buttonText: "View Projects",
    buttonLink: "#projects",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    imageAlt: "Modern Architecture"
  },

  // ──────────────────────────────────────────────
  //  PROJECTS SECTION
  // ──────────────────────────────────────────────
  projectsLabel: "01 / Selected Works",
  projectsTitle: "Project Gallery",

  // Add, remove, or edit projects here!
  // Each project needs: title, category, year, location, description, image
  projects: [
    {
      title: "Goatbarn Lane",
      category: "Residential",
      year: "Summer 2025",
      location: "Boulder, Colorado",
      description: "Project focused on documentation and projecting elements via revit | Structural components such as steel beams, flooring, framing, etc.",
      image: "https://github.com/Jennirose2/Jennifer-Portfolio-Site/blob/main/Image1.jpg?raw=true"
    },
    {
      title: "Gwathmey House",
      category: "Residential",
      year: "Fall 2026",
      location: "Amagansett, New York",
      description: "Emphasis on the use of form and materiality | Production through revit with the challenge of unknown measurements and need to model.",
      image: "https://github.com/Jennirose2/Jennifer-Portfolio-Site/blob/main/Image3.jpg?raw=true"
    },
    {
      title: "Multipurpose Space",
      category: "Commercial",
      year: "Winter 2026",
      location: "Baltimore, Maryland",
      description: "Urban sustainability project | Core requirements: Energy saving, Atrium space, Indoor vending, and Office space.",
      image: "https://github.com/Jennirose2/Jennifer-Portfolio-Site/blob/main/Image6.jpg?raw=true"
    },
    {
      title: "Harbor Plaza",
      category: "Assembly",
      year: "Spring 2024",
      location: "Washington, DC",
      description: "An intervention for the need of entertainment and civic space | Focus on the use of SketchUP | Visualization of element flow.",
      image: "https://github.com/Jennirose2/Jennifer-Portfolio-Site/blob/main/Image7.png?raw=true"
    }
  ],

  // ──────────────────────────────────────────────
  //  ABOUT SECTION
  // ──────────────────────────────────────────────
  about: {
    label: "02 / Philosophy",
    // Use <br> for line breaks
    title: "Simplicity is the <br>ultimate sophistication.",
    paragraphs: [
      "Inspired by Adolf Loos critique that ornament in architecture obstructs social progress.",
      "Yet ornamenting structures with the surrounding flora."
    ],
    image: "https://github.com/Jennirose2/Jennifer-Portfolio-Site/blob/main/Image8.png?raw=true",
    imageAlt: "Architectural Detail"
  },

  // ──────────────────────────────────────────────
  //  CONTACT SECTION
  // ──────────────────────────────────────────────
  contact: {
    label: "03 / Connect",
    title: "Let's build <br>something together.",
    address: {
      label: "Address",
      line1: "Frederick, MD",
    },
    inquiries: {
      label: "For Inquiries",
      email: "Jennifer.monterrosa89@gmail.com",
      phone: "+1 (301) 473-6759"
    },
    // Form field labels
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email",
      emailPlaceholder: "Your Email",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project",
      submitText: "Send Message",
      successMessage: "Thank you for your message. We will get back to you soon."
    }
  },

  // ──────────────────────────────────────────────
  //  FOOTER
  // ──────────────────────────────────────────────
  footer: {
    copyright: "© 2026 STUDIOARCH. All rights reserved.",
    socialLinks: [
      { text: "Instagram", url: "#" },
      { text: "LinkedIn", url: "#" },
      { text: "Pinterest", url: "#" }
    ]
  }
};
