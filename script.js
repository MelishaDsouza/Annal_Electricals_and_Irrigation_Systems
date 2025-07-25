console.log("Website Loaded 🚀");
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Automatically close the nav menu after clicking any link (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      document.getElementById("navLinks").classList.remove("show");
    }
  });
});

AOS.init({
  once: false,      // ✅ Ensures animation runs every time the element is scrolled into view
  duration: 800,    // Optional: controls animation duration in ms
  mirror: true      // ✅ Optional: animate elements out while scrolling past them
});

document.querySelector('.cta-button').addEventListener('click', () => {
  const heroSection = document.getElementById('home');
  heroSection.classList.remove('aos-animate');
  setTimeout(() => AOS.refreshHard(), 50);
});


function restartAnimation(el) {
  el.style.animation = 'none';
  el.offsetHeight; // Trigger reflow
  el.style.animation = '';
}

// Example: On scroll
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const content = document.querySelector('.content');
  const card = document.querySelector('.impact-card');

  if (isElementInViewport(hero)) {
    restartAnimation(hero);
    restartAnimation(content);
    restartAnimation(card);
  }
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}


const serviceItems = document.querySelectorAll('.service-item');
const serviceDetails = document.getElementById('service-details');

const serviceContent = {
  irrigation: {
    title: 'Automatic Irrigation Systems',
    description: 'We install smart, automatic irrigation systems for homes, apartments, commercial buildings, gardens, farms, and more. These systems water your plants or landscape automatically, saving you time, water, and effort.',
    features: [
      'No more manual watering',
      'Saves water and reduces your monthly bills',
      'Keeps your garden or landscape green and healthy all year',
      'Perfect for rooftop gardens, apartment landscaping, villas, and offices'
    ],
    whyChooseUs: 'We design systems that match Mangaluru’s climate and water pressure. Our team installs it neatly, explains how to use it, and provides regular maintenance. Whether it’s a small home garden or a large commercial building, we’ve got you covered.'
  },
  electrical: {
    title: 'Electrical & Plumbing Works',
    description: 'We take care of all electrical and plumbing needs for homes, gardens, apartments, and commercial buildings. This includes wiring, pumps, lights, pipelines, and automatic water level control systems for overhead tanks.',
    features: [
      'Safe and reliable service',
      'Fast repairs and full new setups',
      'One team for both electrical and plumbing',
      'Automatic water level systems prevent tank overflows and dry taps'
    ],
    whyChooseUs: 'Our team is trained and experienced. We do the job right — neat, safe, and long-lasting. Whether it’s a small repair or a full setup, we handle it quickly and properly, anywhere in Mangaluru.'
  },
  waterfountains: {
    title: 'Water Fountains',
    description: 'We design and install all kinds of custom fountains for homes, villas, apartments, hotels, and commercial spaces. From simple garden fountains to stylish statement pieces, we do it all.',
    features: [
      'Tiered Fountains – Classic multi-level fountains perfect for large gardens',
      'Wall Fountains – Great for small patios, balconies, or entrances',
      'ZEN Style – Calm bamboo/stone designs for peace and relaxation',
      'Pondless Fountains – No open water, modern and low maintenance',
      'Sculptural Fountains – Unique artistic pieces with lighting'
    ],
    whyChooseUs: 'We use weather-resistant materials like natural stone, fiberglass, and stainless steel — perfect for Mangaluru. From design to lighting, we take care of everything to make it safe, stunning, and long-lasting.'
  },
  swimmingpools: {
    title: 'Swimming Pools',
    description: 'We design custom swimming pools, water features, and garden lighting to transform your outdoor space into a luxurious, peaceful retreat.',
    features: [
      'Smart, low-maintenance swimming pools with LED lights and water jets',
      'Outdoor garden lighting – waterproof, elegant, energy-saving',
      'Decorative water features – koi ponds, small waterfalls, fountains',
      'Automatic pumps and filters for clean, easy maintenance'
    ],
    whyChooseUs: 'Our pools and features are built with high-quality, weather-proof materials suited for Mangaluru’s coastal climate. We offer creative, safe, and long-lasting solutions that enhance your property’s value and beauty.'
  },
  garden: {
    title: 'Garden Lighting & Water Features',
    description: 'We install elegant outdoor lighting and water features like small waterfalls, koi ponds, streams, and decorative jets to transform your garden or outdoor space.',
    features: [
      'Makes your garden look beautiful at night',
      'Adds a calm, relaxing, and stylish vibe',
      'Uses safe, waterproof, and energy-saving lighting',
      'Designed to last in Mangaluru’s coastal weather'
    ],
    whyChooseUs: 'We design lighting and water features that fit your garden perfectly — whether it’s for a villa, apartment, hotel, or office. All materials are durable and weather-resistant, and our work is neat, creative, and built to last in Mangaluru’s coastal climate.'
  }
};

// ✅ Render service details function
function renderService(key) {
  const content = serviceContent[key];
  serviceDetails.innerHTML = `
    <h3>${content.title}</h3>
    <p>${content.description}</p>
    <ul class="features">
      ${content.features.map(f => `<li>✅ ${f}</li>`).join('')}
    </ul>
    <p><strong>Why Choose Us:</strong> ${content.whyChooseUs}</p>
  `;
}

// ✅ Show first service immediately on load
window.addEventListener('DOMContentLoaded', () => {
  const defaultKey = 'irrigation';
  const defaultItem = document.querySelector(`.service-item[data-service="${defaultKey}"]`);
  
  serviceItems.forEach(i => i.classList.remove('active'));
  defaultItem.classList.add('active');

  renderService(defaultKey);
});

// ✅ Listen to clicks and update highlight + content
serviceItems.forEach(item => {
  item.addEventListener('click', () => {
    serviceItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const key = item.getAttribute('data-service');
    renderService(key);
  });
});


// function openPreview(el) {
//   const imgSrc = el.querySelector("img").src;
//   const modal = document.getElementById("previewModal");
//   const previewImage = document.getElementById("previewImage");
//   previewImage.src = imgSrc;
//   modal.classList.add("show");
//   document.body.classList.add("modal-open");
// }

// function closePreview() {
//   const modal = document.getElementById("previewModal");
//   modal.classList.remove("show");
//   document.body.classList.remove("modal-open");
// }

function openPreview(el) {
  // Disable preview for screens narrower than 768px (typical mobile breakpoint)
  if (window.innerWidth < 768) return;

  const imgSrc = el.querySelector("img").src;
  const modal = document.getElementById("previewModal");
  const previewImage = document.getElementById("previewImage");
  previewImage.src = imgSrc;
  modal.classList.add("show");
}

function closePreview() {
  document.getElementById("previewModal").classList.remove("show");
}

  
// Animation on scroll (optional)
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight - 50) {
        card.style.animation = `fadeIn 0.6s ease ${(index + 1) * 0.2}s forwards`;
      }
    });
  });

