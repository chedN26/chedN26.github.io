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
    
    $('#bgVideo').css({
        'margin-top' : -1 * scrollPos + 'px'
    })
    $('h1#welcome2').css({
        'padding' : 50 + scrollPos + 'px'
    })
    $('#bgImage').css({
        'top' : ((-0.2 * scrollPos)+150) + 'px'
    })
    $('#imgleft').css({
        'margin-left' : ((0.1 * scrollPos)-135) + 'px'
    })
    $('#imgcics').css({
        'margin-right' : ((0.1 * scrollPos)-135) + 'px'
    }) 
    $('#imgbsulogoc').css({
        'width' : ((0.1 * scrollPos)+ 100) + 'px'
    }) 
    $('#btt').css({
        'opacity' : (0.5 * scrollPos) + '%'
    })
/*    $('#imgskybg').css({
        'margin-left' : -0.3 * scrollPos + 'px'
    }) */
    console.log(scrollPos)
})

const productContainers = [...document.querySelectorAll('#stcontainer')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})