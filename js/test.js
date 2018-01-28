

// OLD PURE JS BUTTON
// window.onload = function() {

//     var btn1 = document.getElementsByClassName('hello');
//     btn1[0].addEventListener("click", function() {
//         alert('Hello World!');
//     });

// };

$(document).ready(function(){

    //HELLO WORLD BUTTON
    $('.hello').on('click', () => {
        $('.content').fadeToggle('slow');
    });

    // THEME PICKER
    $('.color-pick').on('click', 'span',function(){
        var color = $(this).css('background-color');
        $(':root').get(0).style.setProperty('--bg-color', color);
    });

});