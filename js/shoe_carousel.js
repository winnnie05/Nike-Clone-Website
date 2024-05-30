document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel1');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    const items = Array.from(carousel.children);
    const itemWidth = items[0].offsetWidth;

    carousel.addEventListener('mousedown', startDrag);
    carousel.addEventListener('touchstart', startDrag, { passive: true });
    carousel.addEventListener('mouseup', endDrag);
    carousel.addEventListener('mouseleave', endDrag);
    carousel.addEventListener('touchend', endDrag, { passive: true });
    carousel.addEventListener('mousemove', drag);
    carousel.addEventListener('touchmove', drag, { passive: true });

    // Add event listeners for the buttons
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    prevButton.addEventListener('click', scrollLeft);
    nextButton.addEventListener('click', scrollRight);

    function startDrag(event) {
        if (event.type === 'touchstart') {
            startPosition = event.touches[0].clientX;
        } else {
            startPosition = event.clientX;
            isDragging = true;
        }
        prevTranslate = currentTranslate;
        carousel.style.transition = 'none';
    }

    function drag(event) {
        if (isDragging) {
            const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
            const diff = currentPosition - startPosition;
            currentTranslate = prevTranslate + diff;
            carousel.style.transform = `translateX(${currentTranslate}px)`;
        }
    }

    function endDrag() {
        isDragging = false;
        carousel.style.transition = 'transform 0.3s ease-out';

        const offset = currentTranslate % itemWidth;
        if (Math.abs(offset) > itemWidth / 2) {
            currentTranslate -= (itemWidth - Math.abs(offset)) * Math.sign(offset);
        } else {
            currentTranslate -= offset;
        }

        currentTranslate = Math.max(currentTranslate, -carousel.scrollWidth + carousel.offsetWidth);
        currentTranslate = Math.min(currentTranslate, 0);

        carousel.style.transform = `translateX(${currentTranslate}px)`;
    }

    function scrollLeft() {
        currentTranslate += itemWidth;
        endDrag();
    }

    function scrollRight() {
        currentTranslate -= itemWidth;
        endDrag();
    }
});
