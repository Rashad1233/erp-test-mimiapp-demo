// Получаем элементы для меню
const menuIcon = document.getElementById('menu-icon');
const ctaSection = document.querySelector('.cta-section');

// Логика для открытия и закрытия меню
menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('open');  // Переключаем состояние кнопки
    ctaSection.classList.toggle('open');  // Переключаем отображение меню
});

// Carousel functionality
const serviceCarousel = document.querySelector('.service-carousel');
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');

let currentIndex = 0;
const items = document.querySelectorAll('.service-card');
const totalItems = 4;  // Получаем реальное количество элементов в карусели
const itemWidth = items[0].offsetWidth + 20; // Включаем промежуток между элементами

// Перемещение карусели влево
leftArrow.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        serviceCarousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});

// Перемещение карусели вправо
rightArrow.addEventListener('click', function() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        serviceCarousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});

