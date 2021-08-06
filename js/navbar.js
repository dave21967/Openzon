function showNav() {
    var navItem = document.querySelector('.nav-link');
    if(navItem.style.display == '') {
        $(".nav-item").css("opacity", "0");
        $(".nav-link").css('display', 'block');
        $(".nav-item").animate({opacity: 1});
    }
    else {
        $(".nav-item").animate({opacity: 0});
        $(".nav-link").css('display', '');
    }
}