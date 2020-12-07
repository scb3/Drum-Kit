var numberOfDrums = document.querySelectorAll(".drum").length;


for(var i=0; i<numberOfDrums; i++){

document.querySelectorAll("button")[i].addEventListener( "click",function() {
    alert("clicked");
} );

}
