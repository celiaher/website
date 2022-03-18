var mode = false;
$(".mode").click(function() {
    if (mode)
    {
        console.log('light mode');
        mode = false;
    }
    else
    {
        console.log('dark mode');
        $(".footer").css("background-color", "#303035");
        $("body").css("background-color", "#303035");
        $(".mode").css("fill", "#EDF2F4");
        $(".link-header").css("color", "#EDF2F4");
        $(".footer-line").css("stroke", "#EDF2F4");
        $("#copyright").css("color", "#EDF2F4");
        $(".links-svg-light").addClass("links-svg-dark");
        mode = true;
    }
});
document.getElementById("copyright").innerText += ` ${new Date().getFullYear()}`;