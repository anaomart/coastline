const imageComparisonSlider = document.querySelector('[data-component="image-comparison-slider"]')

function setSliderstate(e: { type: string; }, element: { querySelector: (arg0: string) => any; removeEventListener: (arg0: string, arg1: (e: any) => void) => void; }) {
    const sliderRange = element.querySelector('[data-image-comparison-range]');

    if (e.type === 'input') {
        sliderRange.classList.add('image-comparison__range--active');
        return;
    }

    sliderRange.classList.remove('image-comparison__range--active');
    element.removeEventListener('mousemove', moveSliderThumb);
}

function moveSliderThumb(e: { layerY: number; }) {
    const sliderRange = document.querySelector('[data-image-comparison-range]');
    const thumb = document.querySelector('[data-image-comparison-thumb]');
    let position = e.layerY - 20;

    if (e.layerY <= sliderRange?.offsetTop) {
        position = -20;
    }

    if (e.layerY >= sliderRange.offsetHeight) {
        position = sliderRange.offsetHeight - 20;
    }

    thumb.style.top = `${position}px`;
}

function moveSliderRange(e: { target: { value: any; }; }, element: { querySelector: (arg0: string) => any; addEventListener: (arg0: string, arg1: (e: any) => void) => void; }) {
    const value = e.target.value;
    const slider = element.querySelector('[data-image-comparison-slider]');
    const imageWrapperOverlay = element.querySelector('[data-image-comparison-overlay]');

    slider.style.left = `${value}%`;
    imageWrapperOverlay.style.width = `${value}%`;

    element.addEventListener('mousemove', moveSliderThumb);
    setSliderstate(e, element);
}

function init(element: Element | null) {
    const sliderRange = element.querySelector('[data-image-comparison-range]');

    if ('ontouchstart' in window === false) {
        sliderRange.addEventListener('mouseup', (e: any) => setSliderstate(e, element));
        sliderRange.addEventListener('mousedown', moveSliderThumb);
    }

    sliderRange.addEventListener('input', (e: any) => moveSliderRange(e, element));
    sliderRange.addEventListener('change', (e: any) => moveSliderRange(e, element));
}

init(imageComparisonSlider);