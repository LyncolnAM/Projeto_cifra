function menuOpen(){
    var menu = document.querySelector('.moblie-menu')
    if(menu.classList.contains('open')){
        menu.classList.remove('open')
         document.querySelector('.icon').src = '../img/menu_white_36dp.svg'
    }else{
        menu.classList.add('open')
        document.querySelector('.icon').src = '../img/close_white_36dp.svg'
    }
}