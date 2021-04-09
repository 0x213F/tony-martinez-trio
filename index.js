function showabout(name){
    $(`.tmt-personel-selector.${name}`).click();

    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInUp");
    },1400);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutDown");
        $("#about_container").css("display","none");
    },1400);
}
function showcontact(){}
function closecontact(){}
function showevents(){
    $("#events_container").css("display","inherit");
    $("#events_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#events_container").removeClass("animated slideInUp");
    },800);
}
function closeevents(){
    $("#events_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#events_container").removeClass("animated slideOutDown");
        $("#events_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    }, 1750);
}, 750);


const $aboutPhoto = $("#about-photo");
const $personelSelector = $(".tmt-personel-selector");
const $tony = $("#tony"),
      $hanson = $("#hanson"),
      $josh = $("#josh");

$personelSelector.click(function() {
  const $this = $(this),
        thisText = $this.text();

  $(".tmt-personel-selector").removeClass("selected");
  $this.addClass("selected");

  $tony.hide();
  $hanson.hide();
  $josh.hide();

  if(thisText === "Tony") {
    $aboutPhoto.attr("src", "./imgs/tony.jpeg");
    $tony.show();
  } else if(thisText === "Hanson") {
    $aboutPhoto.attr("src", "./imgs/hanson.jpeg");
    $hanson.show();
  } else if(thisText === "Josh") {
    $aboutPhoto.attr("src", "./imgs/josh.jpeg");
    $josh.show();
  }
});
