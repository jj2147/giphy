var topics = ["death note", "fullmetal alchemist", "hunter x hunter", "pokemon", "madoka magica", "monogatari", "steins;gate"];
var APIkey = "nruV0emuOAKMH5q8O4SORsA9x3wbRSo7";

topics.forEach(function(element){
    var button = $("<button class='btn btn-primary '>" + element + "</button>");
    $("#buttonID").append(button);
});

var dataArray = [];


$("form").on("submit", function(){
    console.log($("input").val());
});


$(".btn-primary").on("click", function(){

    var q = ($(this).text().split(" ").join("+"));
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + APIkey + "&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        dataArray = response.data;

        dataArray.forEach(function(element){
            var img = $(`<img state="still" stillURL=${element.images.fixed_height_still.url} animateURL=${element.images.fixed_height.url}>`);
            img.attr("src", img.attr("stillURL"));

            $("#gifsID").append(img);

        });

    });

});


$('body').on('click','img',function(){

    if($(this).attr("state") === "still"){
        $(this).attr("src", $(this).attr("animateURL"));
        $(this).attr("state", "animate");
    }else{
        $(this).attr("src", $(this).attr("stillURL"));
        $(this).attr("state", "still");
    }

});
