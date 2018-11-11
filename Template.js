
$(document).ready(function(){
    $.get("Data.json",{},function(data){
        // Get animal type
        var ANIMAL=window.location.href.split("?animal=")[1];
        if(Object.keys(data).indexOf(ANIMAL)==-1) ANIMAL="Dog";
        var data=data[ANIMAL];
        console.log(ANIMAL);
        
        // Populate template with data
        $(".content1 h2").text(ANIMAL); 
        $(".content5 h2").text("a " + ANIMAL);
        $(".content6 h3").text(data[data.length-1]);
        console.log(data);
            for(var a=0;a<data.length-1;a++){
                var name = data[a]["Name"];
               var image = data[a]["Image"];
                $(".content2").append($("<div class='wrapper'></div>")
                                  .append("<img src='"+image+"'>")
                                  .append($("<div class='dropdown'></div>")
                                          .append("<div class = 'content'> Adopt "  +name+"</div>"))
               
                                 );
            }
        
        // Setup content config
        $(".dropdown").each(function(i,e){
            console.log($(e));
            $(e).css("--height",($(e).find(".content").height()+140)+"px");
        });
        },"json");
});
