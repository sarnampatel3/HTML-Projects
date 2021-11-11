$(document).ready(function() {

    $("#image_list a").each(function() {
    var reference = $(this).attr("href");
    var figCaption = $(this).attr("title");
        
    var currentImage = new Image();
    currentImage.src = reference;

    $(this).click(function(event) {
        
    $("caption, #image").fadeOut(2900,
    
    function() {
        $("#image").attr("src", reference);
        $("#caption").text(figCaption);
        $("#caption, #image").fadeIn(2750);
        $("#caption").animate({ fontSize: "2em" });
    });
    event.preventDefault();
});
});
$("li:first-child a").focus();
        
});