const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#lead-form')?.addEventListener('submit', e => { e.preventDefault(); const data = new FormData(e.target); const msg = document.querySelector('#form-message'); const text = `Hola Edu-Conducir, soy ${data.get('nombre')}. Quiero información sobre ${data.get('licencia') || 'un curso'} y prefiero horario de ${data.get('horario')}. Mi WhatsApp es ${data.get('whatsapp')}.`; msg.textContent = '¡Gracias! Te estamos redirigiendo a WhatsApp para completar la solicitud.'; msg.style.color = '#087a78'; window.open(`https://wa.me/573212822020?text=${encodeURIComponent(text)}`, '_blank'); e.target.reset(); });

// Galería Pexels: imágenes más consistentes y con CDN optimizado.
const pexelsImages = [
  'https://img.freepik.com/free-photo/close-up-view-female-student-driving-car-instructor-holding-checklist_342744-689.jpg',
  'https://img.freepik.com/free-photo/driving-green-neon-color-motorcycle-road-front-view_114579-5033.jpg',
  'https://img.freepik.com/free-photo/driving-instructor-showing-vehicle-dashboard-buttons-student-taking-driving-lessons_342744-691.jpg',
  'https://img.freepik.com/free-photo/driving-green-neon-color-motorcycle-road-front-view_114579-5033.jpg',
  'https://img.freepik.com/free-photo/close-up-view-female-student-driving-car-instructor-holding-checklist_342744-689.jpg',
  'https://img.freepik.com/free-photo/driving-instructor-showing-vehicle-dashboard-buttons-student-taking-driving-lessons_342744-691.jpg',
  'https://img.freepik.com/free-photo/close-up-view-female-student-driving-car-instructor-holding-checklist_342744-689.jpg'
];
document.querySelectorAll('.hero-visual img, .course-image, .gallery-grid img').forEach((img, index) => { if (pexelsImages[index]) img.src = pexelsImages[index]; });
document.querySelectorAll('.gallery-grid img')[0]?.setAttribute('src', pexelsImages[4]);
document.querySelectorAll('.gallery-grid img')[1]?.setAttribute('src', pexelsImages[5]);
document.querySelectorAll('.gallery-grid img')[2]?.setAttribute('src', pexelsImages[6]);
const fallbackImages = { 'Alumna aprendiendo a conducir con un instructor':'assets/promo-a2.png', 'Motocicleta para formación de licencia A2':'assets/horarios-teoria.png', 'Vehículo para formación de licencia B1':'assets/ubicacion.png', 'Vehículos circulando por una vía urbana':'assets/car.svg', 'Vehículo durante una práctica de conducción':'assets/moto.svg', 'Automóvil utilizado para aprender a conducir':'assets/car.svg', 'Vehículo de formación para conducción pública':'assets/school.svg', 'Automóvil en una vía urbana de Bogotá':'assets/car.svg', 'Vehículo utilizado para aprender conducción':'assets/hero-driving.svg', 'Vehículo estacionado para prácticas':'assets/school.svg' };
document.querySelectorAll('img').forEach(img => img.addEventListener('error', () => { const fallback = fallbackImages[img.alt]; if (fallback && img.src !== new URL(fallback, document.baseURI).href) img.src = fallback; }));

const slides = [...document.querySelectorAll('.banner-slide')];
const dots = [...document.querySelectorAll('.banner-dots .dot')];
let currentSlide = 0;
function showSlide(index) { currentSlide = (index + slides.length) % slides.length; slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide)); dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide)); const slide = slides[currentSlide]; document.querySelector('#hero-eyebrow')?.replaceChildren(slide.dataset.eyebrow); document.querySelector('#hero-title')?.replaceChildren(slide.dataset.title); document.querySelector('#hero-lead')?.replaceChildren(slide.dataset.lead); }
document.querySelector('.banner-arrow.next')?.addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.banner-arrow.prev')?.addEventListener('click', () => showSlide(currentSlide - 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
if (slides.length) setInterval(() => showSlide(currentSlide + 1), 6000);

const contactIntro = document.querySelector('.contact-band > div');
if (contactIntro && !contactIntro.querySelector('.contact-map')) {
  const map = document.createElement('div'); map.className = 'contact-map';
  map.innerHTML = '<iframe title="Mapa de Edu-Conducir" src="https://www.google.com/maps?q=Carrera+8+%2311-39+Piso+2,+Bogotá,+Colombia&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  contactIntro.appendChild(map);
}
