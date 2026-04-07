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
    title: 'Crafting <br><span class="italic">Timeless</span> Spaces',
    subtitle: "Minimalist architectural solutions that harmonize with nature and human experience.",
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
      title: "Villa Minimal",
      category: "Residential",
      year: "2023",
      location: "Kyoto, Japan",
      description: "A serene residential project focusing on the integration of indoor and outdoor spaces. The design uses natural materials like cedar and stone to create a sense of tranquility.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Concrete Pavilion",
      category: "Public Space",
      year: "2022",
      location: "Berlin, Germany",
      description: "An exploration of raw concrete and light. This public pavilion serves as a community gathering space, with carefully placed apertures that track the sun throughout the day.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Glass House",
      category: "Residential",
      year: "2024",
      location: "Aspen, Colorado",
      description: "A transparent retreat in the mountains. The structure is designed to disappear into the landscape, providing panoramic views while maintaining a minimal environmental footprint.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Urban Loft",
      category: "Interior",
      year: "2023",
      location: "New York, NY",
      description: "A conversion of an industrial warehouse into a minimalist living space. The design preserves original structural elements while introducing clean, modern interventions.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
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
      "We believe that architecture should be a silent backdrop to life. Our studio focuses on the essential, removing the superfluous to reveal the inherent beauty of materials, light, and form.",
      "Founded in 2015, we have completed over 50 projects across three continents, each reflecting our commitment to sustainable and minimalist design."
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000",
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
