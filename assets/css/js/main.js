$(document).ready(function(){

$nav=('.nav');
$toggleCollapse=$('toggleCollapse');

/** click event on toggle menu */
$stoggleCollapse.click(function(){
    $nav.toggleClass('collapse');
})

//owl-crousel for blog
$('.owl-carousel').owlCarousel();
 
        loop: true,
        autoplay;false,
        autoplayTimeout;3000,
        dots;false,
        nav;true,
        navText; $('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next'),
        responsive;responsive
});

