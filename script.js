$( document ).ready(function() {
    $.get( "https://api.giphy.com/v1/gifs/search?q=puppy&api_key=dc6zaTOxFJmzC", function( response ) {
  var i;
    for(i=0;i<3;i+19){
         $( ".inner" ).append('<img src =" ' +response.data[i].images.fixed_height.url+' " >');
    }
});
    
    });
