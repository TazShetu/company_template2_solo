$(window).on('load', function () { //when window is loaded
    
    /*------------ Preload ----------------*/
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    
    /*------------ Work -------------------*/
    // isotope window on load a use better cz all img load hole filter kaj korbe
    // isotope code copy from webpage
    //initialized isotope
    $(".isotopeC").isotope({
        // here we have no option
    });
    // filter items on button click
    $("#isotope-filters-btn").on( 'click', 'button', function() {
        // get filter value
        var filterValue = $(this).attr('data-filter');
        // filter portfolio
        $(".isotopeC").isotope({
            filter: filterValue
        });
        // active button
        $("#isotope-filters-btn").find('.active').removeClass('active');
        $(this).addClass('active');
    });
    
    
    /*------------Google Map-----------------*/ /*copy code with edit*/
//    var addressString = "Mirpur Stadium Dhaka";
//    var myLatLng = {lat: 23.806728, lng: 90.363658};
//    
//    var map = new google.maps.Map(document.getElementById('map'), {        
//        zoom: 4,
//        center: myLatLng
//    });
//    
//    var marker = new google.maps.Marker({
//        position: myLatLng,
//        map: map
//    });
    
    
    
    /*--------------------------------------
    ---------------ANIMATION----------------
    ---------------------------------------*/
    /*apply animate.css after window load, otherwise we cant see animation cz it happens on background. For this reason we r using JQuery not adding classes on HTML itself*/
    /*only home section window on load a animation add, other section directly kono problem nai*/    
    /*-------HOME-------*/
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    //$("#arrow-down i").addClass("animated fadeInDown infinite"); /*not working here so i added them in html*/


    
    
});


/*$(document).ready(function(){ // long form
  $(function(){ // short form */




$(function () {
    /*------------------------
    -------Team Section--------
    --------------------------*/
    //carousel slider
    $("#team-members").owlCarousel({
        items: 2, // item to show
        autoplay: true,
        smartSpeed: 700, //transation time
        loop: true,
        autoplayHoverPause: true,
        nav: true, // show buttons
        dots: false, // show dot navigation
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });

    /*-----progress bar---*/
    $("#progress-elements").waypoint(function () {
        // each will select each "..."
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
    
    
    /*-------------------------
    -----Service Section--------
    --------------------------*/
    // responsive tabs(code copy kore bosan)
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
    
    
    /*------------------------
    -----------Work-----------
    --------------------------*/
    /*magnifier (copy kore bosam)*/
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    
    /*------------------------
    --------Testimonials--------
    --------------------------*/
    //carousel slider
    $("#testimonial-slider-carousel").owlCarousel({
        items: 1, // item to show
        autoplay: true,
        smartSpeed: 700, //transation time
        loop: true,
        autoplayHoverPause: true,
        nav: true, // show buttons
        dots: false, // show dot navigation
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    
    /*------------------------
    -----------STATS-----------
    --------------------------*/
    // counter-up (copy kore bosan)
    $('.counter').counterUp({
        delay: 15,
        time: 2500
    });
    
    //carousel slider
    $("#client-list").owlCarousel({
        items: 5, // item to show
        autoplay: true,
        smartSpeed: 700, //transation time
        loop: true,
        autoplayHoverPause: true,
        nav: true, // show buttons
        dots: false, // show dot navigation
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 3
            },
            // breakpoint from 576 up
            576: {
                items: 4
            },
            // breakpoint from 768 up
            768: {
                items: 5
            }
        }
    });
    
    
    
    
    
    
    /*---------------------------------
    ---------NavBar (show hide)--------
    ----------------------------------*/
    // if we load page at other section except home
    showHideNav();
    //window on scroll(normal paage load)
    $(window).scroll(function() {
        showHideNav();  
    });
    
        
//    var ffff = $("#navbar > button").click(function () { ///////////////////////////////////
//        return true;
//    });
    
    
    
    function showHideNav() {
        if( $(window).scrollTop() > 50) {
            // show white nav
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            // show back to top btn
            $("#back-to-top").fadeIn();
           
        }else {
            // hide white nav
            $("nav").removeClass("white-nav-top");  
            // show normal logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            // hide back to top btn
            $("#back-to-top").fadeOut(); 
            
            aaaaa();            
        }
    }; 
    
    function aaaaa() {
        if( $(window).scrollTop() < 50) {
            //alert ("sdfdsgdsg");            
            var count = 0;
            $("#navbar > button").click(function () {
                //alert ("click");
                count += 1;
                if (count == 1) {
                    $("nav").addClass("white-nav-top");
                    $(".navbar-brand img").attr("src", "img/logo/logo-dark.png"); 
                }else {
                    count = 0;
                    $("nav").removeClass("white-nav-top");
                    $(".navbar-brand img").attr("src", "img/logo/logo.png");
                }
            });             
        }
    };
    
    
    
    
    
    //////////////////////////////////////////////////////////////////////////////////////
    /*---- Smooth Scrolling (fixed code just add classes to a or button)-----------------*/
    ///////////////////////////////////////////////////////////////////////////////////////
    
    $("a.smooth-scroll").click(function(event) {
        //cancel the default scrolling
        event.preventDefault();
        
        //get section id
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            // scroll to the top of the section
            // ofset has top and left property. here we need top
            // here we decresse top position by 64px close to navBar height
            scrollTop: $(section_id).offset().top - 64
            // third paramiter(1200ms er por) is from eassing. here we use "easeInOutExpo" the name from the website(I donot like easeInOutExpo normal was better)
        }, 1200, "easeInOutExpo");
        
    });  
    
    
    
    /*--------------------------------------
    ---------------ANIMATION----------------
    ---------------------------------------*/
    
    /* initialize wow.js(animate.css helper for scrolling)(instruction webpage a dea)*/
    new WOW().init();
    
    
});













































