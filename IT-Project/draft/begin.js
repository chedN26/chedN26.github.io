/*
var third = document.getElementById('third')
var first = document.getElementById('first')
var second = document.getElementById('second')

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    first.style.left = value + 0.5 + 'px';
    second.style.left = value + 2 + 'px';
    third.style.top = value + 0.5 + 'px';
    console.log(value + 0.5)
})
*/
/*

$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    $('#bgVideo').css({
        'width' : 100 + scrollPos + '%'
    })
}) */

const productContainers = [...document.querySelectorAll('.product-container')];
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