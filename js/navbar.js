function showNav() {
    var navItem = document.querySelector('.nav-link');
    if(navItem.style.display == '') {
        $(".nav-link").css('display', 'block');
    }
    else {
        $(".nav-link").css('display', '');
    }
}