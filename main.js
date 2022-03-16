$('.nav-trigger').hover(mouseEnter, mouseLeave);
function mouseEnter() {
    $(".nav").addClass('nav-hover');
};
function mouseLeave() {
    $(".nav").removeClass('nav-hover');
};
$(".nav-title").click(function() {
    window.scrollTo(0, 0);
    console.log('aids');
});
document.getElementById("copyright").innerText += ` ${new Date().getFullYear()}`;