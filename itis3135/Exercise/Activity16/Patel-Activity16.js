$(document).ready(function(){
    //  https://www.flickr.com/services/feeds/docs/photos_public/
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
    $.getJSON(url, function(data){
        var writeHTML = "";
        $.each(data.items, function(i, item){
            writeHTML += "<a href= \"" + item.media.m + "\"data-lightbox= \"buildingImages\" data-title=" 
            + item.title + "><img src=" + item.media.m + "></a>";
        });
    $("#new_building").html(writeHTML);
    });
})