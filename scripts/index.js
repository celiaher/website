function darkClick()
{
    $(".footer").css("background-color", "#EDF2F4");
    $("body").css("background-color", "#EDF2F4");
    $(".link-header").css("color", "#2B2D42");
    $(".footer-line").css("stroke", "#2B2D42");
    $("#copyright").css("color", "#2B2D42");
    $(".links-svg-dark").attr("class", "links-svg-light");
    $(".mode-dark").attr("onclick", "lightClick();");
    $(".mode-dark").attr("class", "mode-light col-lg-6");
}
function lightClick()
{
    $(".footer").css("background-color", "#303035");
    $("body").css("background-color", "#303035");
    $(".link-header").css("color", "#EDF2F4");
    $(".footer-line").css("stroke", "#EDF2F4");
    $("#copyright").css("color", "#EDF2F4");
    $(".links-svg-light").attr("class", "links-svg-dark");
    $(".mode-light").attr("onclick", "darkClick();");
    $(".mode-light").attr("class", "mode-dark col-lg-6");
}
document.getElementById("copyright").innerText += ` ${new Date().getFullYear()}`;