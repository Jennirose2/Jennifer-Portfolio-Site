/**
 * Minimalist Architectural Portfolio Script
 * Reads content from SITE_CONTENT (defined in content.js)
 * and populates the entire page dynamically.
 */

document.addEventListener('DOMContentLoaded', () => {
    const C = SITE_CONTENT;

    // ── Page Title ──
    document.getElementById('page-title').textContent = C.pageTitle;

    // ── Navigation ──
    const logo = document.getElementById('site-logo');
    logo.innerHTML = `${C.siteName}<span>${C.siteNameBold}</span>`;

    const navLinksContainer = document.getElementById('nav-links');
    C.navLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        navLinksContainer.appendChild(li);
    });

    // ── Hero Section ──
    document.getElementById('hero-title').innerHTML = C.hero.title;
    document.getElementById('hero-subtitle').textContent = C.hero.subtitle;
    const heroBtn = document.getElementById('hero-btn');
    heroBtn.textContent = C.hero.buttonText;
    heroBtn.href = C.hero.buttonLink;
    const heroImg = document.getElementById('hero-image');
    heroImg.src = C.hero.image;
    heroImg.alt = C.hero.imageAlt;

    // ── Projects Section ──
    document.getElementById('projects-label').textContent = C.projectsLabel;
    document.getElementById('projects-title').textContent = C.projectsTitle;

    const projectGrid = document.getElementById('project-grid');
    C.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project', String(index));
        card.innerHTML = `
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.title}" referrerPolicy="no-referrer">
                <div class="project-overlay">
                    <span>View Details</span>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.category} / ${project.year}</p>
            </div>
        `;
        projectGrid.appendChild(card);
    });

    // ── About Section ──
    document.getElementById('about-label').textContent = C.about.label;
    document.getElementById('about-title').innerHTML = C.about.title;
    const aboutParagraphs = document.getElementById('about-paragraphs');
    C.about.paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        aboutParagraphs.appendChild(p);
    });
    const aboutImg = document.getElementById('about-image');
    aboutImg.src = C.about.image;
    aboutImg.alt = C.about.imageAlt;

    // ── Contact Section ──
    document.getElementById('contact-label').textContent = C.contact.label;
    document.getElementById('contact-title').innerHTML = C.contact.title;

    const contactDetails = document.getElementById('contact-details');
    contactDetails.innerHTML = `
        <p><strong>${C.contact.address.label}</strong><br>${C.contact.address.line1}<br>${C.contact.address.line2}</p>
        <p><strong>${C.contact.inquiries.label}</strong><br>${C.contact.inquiries.email}<br>${C.contact.inquiries.phone}</p>
    `;

    // ── Contact Form ──
    const formNameLabel = document.getElementById('form-name-label');
    if (formNameLabel) {
        formNameLabel.textContent = C.contact.form.nameLabel;
    }
    const formNameInput = document.getElementById('name');
    if (formNameInput) {
        formNameInput.placeholder = C.contact.form.namePlaceholder;
    }
    const formEmailLabel = document.getElementById('form-email-label');
    if (formEmailLabel) {
        formEmailLabel.textContent = C.contact.form.emailLabel;
    }
    const formEmailInput = document.getElementById('email');
    if (formEmailInput) {
        formEmailInput.placeholder = C.contact.form.emailPlaceholder;
    }
    const formMessageLabel = document.getElementById('form-message-label');
    if (formMessageLabel) {
        formMessageLabel.textContent = C.contact.form.messageLabel;
    }
    const formMessageInput = document.getElementById('message');
    if (formMessageInput) {
        formMessageInput.placeholder = C.contact.form.messagePlaceholder;
    }
    const formSubmitBtn = document.getElementById('form-submit-btn');
    if (formSubmitBtn) {
        formSubmitBtn.textContent = C.contact.form.submitText;
    }

    // ── Footer ──
    document.getElementById('footer-copyright').innerHTML = C.footer.copyright;
    const socialLinksContainer = document.getElementById('social-links');
    C.footer.socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        socialLinksContainer.appendChild(a);
    });

    // ──────────────────────────────────────────────
    //  MODAL LOGIC
    // ──────────────────────────────────────────────
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    const openModal = (projectIndex) => {
        const project = C.projects[projectIndex];
        if (!project) return;

        const galleryImages = project.images && project.images.length ? project.images : [project.image];
        let currentImageIndex = 0;

        const updateGallery = () => {
            const currentImage = galleryImages[currentImageIndex];
            modalBody.innerHTML = `
                <div class="modal-body-content">
                    <div class="modal-gallery">
                        <div class="gallery-container">
                            <img src="${currentImage}" alt="${project.title} image ${currentImageIndex + 1}" referrerPolicy="no-referrer" class="gallery-image">
                            ${galleryImages.length > 1 ? `
                                <button class="gallery-arrow gallery-arrow-prev" ${currentImageIndex === 0 ? 'disabled' : ''}>&larr;</button>
                                <button class="gallery-arrow gallery-arrow-next" ${currentImageIndex === galleryImages.length - 1 ? 'disabled' : ''}>&rarr;</button>
                            ` : ''}
                        </div>
                        ${galleryImages.length > 1 ? `
                            <div class="gallery-indicators">
                                ${galleryImages.map((_, idx) => `<span class="indicator ${idx === currentImageIndex ? 'active' : ''}" data-index="${idx}"></span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <div class="modal-info">
                        <span class="section-label">Selected Project</span>
                        <h2>${project.title}</h2>
                        <p>${project.description}</p>
                        <ul class="modal-meta">
                            <li><strong>Category</strong> ${project.category}</li>
                            <li><strong>Year</strong> ${project.year}</li>
                            <li><strong>Location</strong> ${project.location}</li>
                        </ul>
                    </div>
                </div>
            `;

            // Add event listeners for arrows
            const prevBtn = modalBody.querySelector('.gallery-arrow-prev');
            const nextBtn = modalBody.querySelector('.gallery-arrow-next');
            const indicators = modalBody.querySelectorAll('.indicator');

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    if (currentImageIndex > 0) {
                        currentImageIndex--;
                        updateGallery();
                    }
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    if (currentImageIndex < galleryImages.length - 1) {
                        currentImageIndex++;
                        updateGallery();
                    }
                });
            }

            indicators.forEach((indicator, idx) => {
                indicator.addEventListener('click', () => {
                    currentImageIndex = idx;
                    updateGallery();
                });
            });
        };

        updateGallery();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectIndex = parseInt(card.getAttribute('data-project'));
            openModal(projectIndex);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // ──────────────────────────────────────────────
    //  MOBILE MENU
    // ──────────────────────────────────────────────
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // ──────────────────────────────────────────────
    //  SCROLL ANIMATIONS
    // ──────────────────────────────────────────────
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // ──────────────────────────────────────────────
    //  FORM SUBMISSION
    // ──────────────────────────────────────────────
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(C.contact.form.successMessage);
                contactForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});
