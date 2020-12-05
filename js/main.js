$('.about__tabs-wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.about__tabs-wrapper').find('.tab-item').removeClass('active-tab-tab-content').hide();
    $('.about__tabs-wrapper .tabs').find('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
    $('#' + id).addClass('active-tab-tab-content').fadeIn();
    return false;
});


let headerMenuList = document.querySelector('.header__menu-list');
document.querySelector('.header__menu-btn').onclick = function() {
    headerMenuList.classList.toggle('active-menu');
};

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        mergeFit: true,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            420: {
                items: 2
            },
            800: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 3100,
        autoplayHoverPause: true,
        smartSpeed: 1500,
    });
});