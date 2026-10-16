document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'img/slaid.svg',
        'img/slaid2.svg',
        'img/slaid3.svg'
    ];
    let currentIndex = 0;
    const sliderImage = document.querySelector('.slider_image');
    const prevBtn = document.querySelector('.knopka_nazad');
    const nextBtn = document.querySelector('.knopka_vpered');
    console.log('Кнопка Назад:', prevBtn);
    console.log('Кнопка Вперед:', nextBtn);
    console.log('Изображение:', sliderImage);
    function updateSlider() {
        if (sliderImage) {
            sliderImage.src = images[currentIndex];
            console.log('Текущий слайд:', currentIndex + 1);
        }
    }
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }
    if (nextBtn && prevBtn && sliderImage) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        updateSlider();
        console.log('Слайдер работает!');
    } else {
        console.error('Ошибка: слайдер не работает');
        console.log('prevBtn:', prevBtn);
        console.log('nextBtn:', nextBtn);
        console.log('sliderImage:', sliderImage);
    }
});