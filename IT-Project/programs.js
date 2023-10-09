/*
    Members:
        GARCIA, CHED NEO H.
        DIOKNO, CARL DENVER D.
        TRINIDAD, JAMES ALJANDRO N.
        MAINOT, JONATHAN L.
        FERATER, MIKE REYNIEL L.
*/

$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    
    $('#pofferingbg').css({
        'margin-top' : -223 + (-0.5 * scrollPos) + 'px'
    })
    $('#btt').css({
        'opacity' : (0.5 * scrollPos) + '%'
    })

})