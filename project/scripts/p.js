$(document).ready(function() {

    $("li a").each(function(){

        $(this).click(function(){

            $.ajax({
                type: "get",
                url: "json_files/" + this.title + ".json", 
                error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
                },

                dataType: "json",

                success: function(data) {
                    $("main").empty();

                    $.each(data, function(){

                        $.each(this, function(key, value){
                            $("main").append(
                                $("<h1>" + value.name + "</h1>" + "<h2>" + value.title + "</h2>" + "<h3>" + value.bio + "</h3>")
                            );
                        })
                    });
                }
            })
        });
    });
}); 