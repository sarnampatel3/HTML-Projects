$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json", //changed to json from xml
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json", //changed to json from xml
        success: function(data) {
            $("#team").html("");
            /*
            $(data).find("management").children().each(function() {
                var xmlDoc = $(this);
                $("#team").append
                ("<h3>" + xmlDoc.find("name").text() + "</h3>" +
                          xmlDoc.find("title").text() + "<br>" +
                          xmlDoc.find("bio").text() + "<br>");
            });
            */
            $.each(data, function(){
                $.each(this, function(key, value){
                    $('#team').append(
                        "<h3>" + value.name + "</h3>" +
                        value.title + "<br>" +
                        value.bio + "<br>" + 
                        "<br>"
                    );
                });
            });
        }
    });
});