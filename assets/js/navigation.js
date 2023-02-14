var slideNumber=1;

$(function () {
    $('#main-menu').slicknav({
        label: '',
        prependTo: 'body',
        closedSymbol: '<span class="icon-chevron-right"></span>',
        openedSymbol: '<span class="icon-chevron-down"></span>',
        init: function(){
            
            $('.slicknav_menu').prepend('<div class="mobileLogoWrap"><img class="logo-c mobilLogo" src="./assets/images/logo-color.png"alt=""><img class="mobilLogo logo-w" src="./assets/images/logo-w.png"alt=""></div>');
            // Add the arrows to navigation items
            $('#navigation #main-menu>li.menu-item-has-children > a').append('<span class="icon-angle-down"></span>');
            $('#navigation #main-menu>li>ul.sub-menu>li.menu-item-has-children > a').prepend('<span class="icon-angle-left"></span>');

            $('.slicknav_menu').addClass('close');
            $('.slicknav_menu').css('background-color','transparent');
            $('.logo-c').css('display','none');
            $('.logo-w').css('display','block');
            $('.slicknav_menu .slicknav_icon-bar').css('background-color', 'white');
        },
        beforeOpen: function(trigger){
            if($(trigger).hasClass('slicknav_btn')){ 
                $('.slicknav_menu').addClass('open');
                $('.slicknav_menu').css('background-color','white');
                $('.logo-c').css('display','block');
                $('.logo-w').css('display','none');
                $('.slicknav_menu .slicknav_icon-bar').css('background-color', 'black');
            }
        }, 
        afterClose: function(trigger){
            if($(trigger).hasClass('slicknav_btn')){ 
                $('.slicknav_menu').addClass('close');
                $('.slicknav_menu').css('background-color','transparent');
                $('.logo-c').css('display','none');
                $('.logo-w').css('display','block');
                $('.slicknav_menu .slicknav_icon-bar').css('background-color', 'white');
            }
        }
    });



    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 450;
    var navbarHeight = $('#navigation').outerHeight();
    // console.log(navbarHeight);

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        // console.log(lastScrollTop, st, Math.abs(lastScrollTop - st), delta)
        if (st < 10) {
            $('#navigation').addClass('scrolledDown').removeClass('scrolledUp');
        } else if (st > 0 && st < 400) {
            $('#navigation').addClass('scrolledUp').removeClass('scrolledDown');
        }

        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('#navigation').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height() + 200) {
                $('#navigation').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }

    var mottos = $('#tabs-nav span');

    //// Create tab functionality for the Hero section 
    $('#tabs-nav span:first-child').addClass('active');
    $('.hero-tab-content').hide();
    $('.hero-tab-content:first').show();
    
    var autoRotate = setInterval(function() {
        var motto = mottos[slideNumber++];
        $(motto).click();
        if(slideNumber >= mottos.length) i = 0;
    }, 5000); 

    // Click function
    $('#tabs-nav span').on('click', function(){
        var clicked = $(this).attr('id');
        switch(clicked) {
            case "map" : slideNumber=1 ; break;
            case "connect" : slideNumber=2 ; break;
            case "discover" : slideNumber=0 ; break;
        }

        $('#tabs-nav span').removeClass('active');
        $(this).addClass('active');
        $('.hero-tab-content').hide();
        
        var activeTab = $(this).attr('link');
        $(activeTab).show();
        $(activeTab).find('.animate').addClass('animate__animated animate__fadeInRight');
        return false;
    });


    //// Create tab functionality for the Hero section 
    $('#project-tabs-nav li:first').addClass('active');
    $('.project-tab-content').hide();
    $('.project-tab-content:first').show();

    // Click function
    $('#project-tabs-nav li').on('click', function(){
        // console.log('test2');
        $('#project-tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.project-tab-content').hide();
        
        var activeTab = $(this).attr('link');
        $(activeTab).show();
        $(activeTab).find('.projLeft').addClass('animate__animated animate__fadeInLeft');
        $(activeTab).find('.projRight').addClass('animate__animated animate__fadeInRight');
        return false;
    });

});