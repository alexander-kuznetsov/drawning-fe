document.querySelectorAll('.slider-cards').forEach(carousel => new Splide(carousel, {
    width: 750,
    autoplay: false,
    arrows: false,
    type: 'loop',
    perPage: 1,
    focus: 'center',
    gap: 20,
    autoWidth: true,
    classes: {
        pagination: 'splide__pagination slider-cards__pagination',
        page      : 'splide__pagination__page slider-cards__pagination-button'
    }
} ).mount());