
$(document).ready(function() {
    var imgs = new Array();
    var intervalID;

    $('.container img').each(function() {
        imgs.push($(this).attr('src'));
    });

    function setImage() 
    {
        var active = $('.active');
        var currentImageURL = active.attr('src');
        var activeImage = $.inArray(currentImageURL, imgs);
        if(activeImage == (imgs.length - 1)){
            activeImage = -1;
        }

        active.attr('src', imgs[activeImage + 1]);
        
    }

    $(function(){
        intervalID = setInterval(setImage, 2000);
    });
});