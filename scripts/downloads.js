function darkClick()
{
    $(".footer").css("background-color", "#EDF2F4");
    $("body").css("background-color", "#EDF2F4");
    $(".footer-line").css("stroke", "#2B2D42");
    $("#copyright").css("color", "#2B2D42");
    $(".mode-dark").attr("onclick", "lightClick();");
    $(".mode-dark").attr("class", "mode-light bi bi-cloud-moon");
    $(".downloads-only h5").css("color", "#2B2D42");
}
function lightClick()
{
    $(".footer").css("background-color", "#303035");
    $("body").css("background-color", "#303035");
    $(".footer-line").css("stroke", "#EDF2F4");
    $("#copyright").css("color", "#EDF2F4");
    $(".mode-light").attr("onclick", "darkClick();");
    $(".mode-light").attr("class", "mode-dark bi bi-cloud-moon");
    $(".downloads-only h5").css("color", "#EDF2F4");
}
document.getElementById("copyright").innerText += ` ${new Date().getFullYear()}`;