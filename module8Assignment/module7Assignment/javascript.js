//fades the section elements in when the window loads
function fade() {
    $('section').each(function(index){
        $(this).hide().delay(1500 * index).fadeIn();
    })
}

$(window).on("load", fade);