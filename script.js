$(document).ready(function(){
  $("p").click(cmdlistShow);
});

$(document).ready(function(){
  $("#main").click(function(){
    $("#maincmd").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#next1").click(function(){
    $("#maincmd").hide();
    $("#main").text("資訊指令")
    $("#infocmd").show()
  });
});


function cmdlistShow() {
  $("p").fadeOut()
  $("#cmdlistpage").show()
}