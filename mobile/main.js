var searchsect = 0;
$("#search-menu").click(function() {
  if (searchsect == 0) {
    $(".search-section").css("top", "0px");
    $("nav").css("box-shadow", "none");
    $("#search-menu .iconify").css("color", "#02B888");
    searchsect = 1;
  } else if (searchsect == 1) {
    $(".search-section").css("top", "-100px");
    $("nav").css("box-shadow", "0 7px 10px 0 rgba(0,0,0,.05");
    $("#search-menu .iconify").css("color", "#000");
    searchsect = 0;
  }
});

$('.navbottom .wrapper .item').click(function(){
    $('.navbottom .wrapper .item').removeClass("active");
    $(this).addClass("active");
});