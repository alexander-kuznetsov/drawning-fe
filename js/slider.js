document.querySelectorAll('.slider').forEach(carousel => new Splide(carousel, {
    width: 300,
    autoplay: false,
    arrows: false,
    type: 'loop',
    perPage: 1,
    focus: 'center',
    gap: 30,
    autoWidth: true,
    classes: {
        pagination: 'splide__pagination slider__pagination',
        page      : 'splide__pagination__page slider__pagination-button'
    }
} ).mount());