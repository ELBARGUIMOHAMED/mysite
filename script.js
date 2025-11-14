document.addEventListener('DOMContentLoaded', function() {

    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Filtrage des produits
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    const products = [
        { id: 1, name: 'les disjoncteur', category: 'les disjoncteur', image: 'images/products/les disjoncteur.jpg' },
        { id: 2, name: 'Les disjoncteur haut poteau', category: 'Les disjoncteur haut poteau', image: 'images/products/Les disjoncteur haut poteau.jpg' },
        { id: 3, name: 'Interrupteur iacm', category: 'Interrupteur iacm', image: 'images/products/Interrupteur iacm.jpg' },
        { id: 4, name: 'Almelec', category: 'Almelec', image: 'images/products/Almelec.jpg' },
        { id: 5, name: 'Les parafoudres', category: 'Les parafoudres', image: 'images/products/Les parafoudres.jpg' },
        { id: 6, name: 'Pinces d\'ancrages', category: 'Pinces d\'ancrages', image: 'images/products/Pinces d\'ancrages.jpg' },
        { id: 7, name: 'Projecteurs', category: 'Projecteurs', image: 'images/products/Projecteurs.jpg' },
        { id: 8, name: 'Contacteur', category: 'Contacteur', image: 'images/products/Contacteur.jpg' }
    ];

    const productsGrid = document.querySelector('.products-grid');
    
    function renderProducts(filter = 'all') {
        productsGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-category', product.category);
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
    }
    
    renderProducts();
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            renderProducts(filter);
        });
    });

    // Animation des statistiques
    const stats = document.querySelectorAll('.stat .number');
    
    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }

    // --------------------------
    // 📩 FORMULAIRE DE CONTACT + EMAILJS
    // --------------------------

document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {

        // ✅ Initialiser EmailJS avec ton vrai Public Key
        emailjs.init("bS7QwXpkYuDW17OR9");

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // يمنع إعادة تحميل الصفحة
            history.pushState(null, null, location.href); // يمنع الرجوع للـ home

            // ⬇️ récupérer les valeurs du formulaire
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert("⚠️ Merci de remplir tous les champs obligatoires !");
                return;
            }

            const data = { name, email, phone, subject, message };

            // ✅ Envoi du message via EmailJS
            emailjs.send("service_7udyguo", "template_73ua5ni", data)
                .then(() => {
                    alert(`✅ Merci ${name}, votre message a été envoyé avec succès !`);
                    contactForm.reset();
                })
                .catch((err) => {
                    console.error("Erreur EmailJS:", err);
                    alert("❌ Erreur lors de l’envoi : " + JSON.stringify(err));
                });
        });
    }
});


    // --------------------------
    // Menu mobile (optionnel)
    // --------------------------
});
