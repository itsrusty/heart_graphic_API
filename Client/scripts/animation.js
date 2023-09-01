// Simulación de datos de ritmo cardíaco
const heartRateData = [70, 75, 80, 85, 90, 85, 80, 75, 70];
let currentIndex = 0;
const bpm = 60; // Latidos por minuto

// Función para actualizar el valor del ritmo cardíaco
function updateHeartRateValue() {
  const heartRateValue = document.querySelector('.heart-rate-value');
  heartRateValue.textContent = heartRateData[currentIndex];
}

// Función para cambiar al siguiente valor de ritmo cardíaco en bucle
function updateHeartRateIndex() {
  currentIndex = (currentIndex + 1) % heartRateData.length;
}

// Animación con TweenMax para la línea del corazón
function animateHeartLine() {
  const heartLine = document.querySelector('.heart-line');
  
  // Animación que simula latidos del corazón
  gsap.timeline({ repeat: -1 })
    .to(heartLine, { scaleX: 1.2, scaleY: 1.4, duration: 0.2, ease: 'power2.inOut' })
    .to(heartLine, { scaleX: 1, scaleY: 1, duration: 0.4, ease: 'elastic.out(1, 0.3)' });

  // Llamada recursiva para animar los latidos
  setTimeout(animateHeartLine, 60000 / bpm); // 60000 ms (1 minuto) dividido por latidos por minuto
}

// Iniciar la animación cuando la página cargue
window.onload = function () {
  animateHeartLine();
  setInterval(updateHeartRateIndex, 1000);
};
