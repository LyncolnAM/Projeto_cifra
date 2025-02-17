function menuOpen(){
    var menu = document.querySelector('.moblie-menu')
    if(menu.classList.contains('open')){
        menu.classList.remove('open')
         document.querySelector('.icon').src = './img/menu_white_36dp.svg'
    }else{
        menu.classList.add('open')
        document.querySelector('.icon').src = './img/close_white_36dp.svg'
    }
}



// var click = document.querySelector('.btn')
// click.addEventListener("click", function(){
//     var partitura = document.getElementById('text').value;
//     //[ partitura_res = partitura.length;]
//     // for(i=0; i<partitura.length; i++){
//     //     // partitura = partitura.split(' |')[9];
//     //     console.log(i)
//     // }
//     for(i=0; i<partitura.length; i++){
//         if(partitura == "C"){
//             function C(){
//                 alert ("D")
//             }
//         }
//         else if(partitura == "D"){
//             function D(){
//                 alert ("E")
//             }
//         }
//         var x = C()
//         alert(xS)
        
//     }
    
// })
