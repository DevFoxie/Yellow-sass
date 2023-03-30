document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('[data-carousel]');
    const carouselItems = carousel.querySelectorAll('[data-carousel-item]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');

    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach(item => item.classList.add('hidden'));
        carouselItems[index].classList.remove('hidden');

        indicators.forEach(indicator => indicator.removeAttribute('aria-current'));
        indicators[index].setAttribute('aria-current', 'true');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});
