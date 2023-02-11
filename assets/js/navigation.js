$(function () {
    $('#main-menu').slicknav({
        label: '',
        prependTo: '#navigation',
        closedSymbol: '<span class="icon-chevron-right"></span>',
        openedSymbol: '<span class="icon-chevron-down"></span>',
    });

    $('.slicknav_menu').prepend('<img class="m-2 h-[30px] w-auto inline-block" src="./assets/css/logo-color.png"alt="">');
    $('.slicknav_menu').addClass('sticky top-0 z-50 block md:hidden bg-white text-black');

    // Add the arrows to navigation items
    $('#navigation #main-menu>li.menu-item-has-children > a').append('<span class="pl-5 pr-3 inline-block icon-angle-down"></span>');
    $('#navigation #main-menu>li>ul.sub-menu>li.menu-item-has-children > a').prepend('<span class="pl-0 pr-3 inline-block icon-angle-left"></span>');


    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 450;
    var navbarHeight = $('#navigation').outerHeight();

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
        if (st == 0) {
            $('#navigation').addClass('bg-transparent text-white').removeClass('bg-white text-black shadow-xl');
        } else if (st > 0 && st < 400) {
            $('#navigation').addClass('bg-white text-black shadow-xl').removeClass('bg-transparent text-white');
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


    //// Create tab functionality for the Hero section 

    $('#tabs-nav span:first-child').addClass('active');
    $('.hero-tab-content').hide();
    $('.hero-tab-content:first').show();

    // Click function
    $('#tabs-nav span').on('click', function(){
        console.log('test');
        $('#tabs-nav span').removeClass('active');
        $(this).addClass('active');
        $('.hero-tab-content').hide();
        
        var activeTab = $(this).attr('link');
        $(activeTab).fadeIn();
        return false;
    });


});