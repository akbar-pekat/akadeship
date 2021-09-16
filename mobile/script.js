$("#lv_beasiswa").hide();
$("#lv_event").hide();
$("#lv_profil").hide();

$('.navbottom .menu').click(function () {
    $('.navbottom .menu').removeClass("active");
    $(this).addClass("active");
});

$("#home").click(function () {
    $("#home_ic").attr("src", "mobile/icons/home_bold.svg");
    $("#beasiswa_ic").attr("src", "mobile/icons/teacher_linear.svg");
    $("#event_ic").attr("src", "mobile/icons/calendar_linear.svg");
    $("#profil_ic").attr("src", "mobile/icons/user_linear.svg");

    $("#lv_home").fadeIn();
    $("#lv_beasiswa").hide();
    $("#lv_event").hide();
    $("#lv_profil").hide();
});

$("#beasiswa").click(function () {
    $("#home_ic").attr("src", "mobile/icons/home_linear.svg");
    $("#beasiswa_ic").attr("src", "mobile/icons/teacher_bold.svg");
    $("#event_ic").attr("src", "mobile/icons/calendar_linear.svg");
    $("#profil_ic").attr("src", "mobile/icons/user_linear.svg");

    $("#loading").show();

    $("#lv_home").hide();
    $("#lv_beasiswa").hide();
    setTimeout(function () {
        $("#lv_beasiswa").fadeIn();
        $("#loading").hide();
    }, 1500);
    
    $("#lv_event").hide();
    $("#lv_profil").hide();
});

$("#event").click(function () {
    $("#home_ic").attr("src", "mobile/icons/home_linear.svg");
    $("#beasiswa_ic").attr("src", "mobile/icons/teacher_linear.svg");
    $("#event_ic").attr("src", "mobile/icons/calendar_bold.svg");
    $("#profil_ic").attr("src", "mobile/icons/user_linear.svg");

    $("#loading").show();

    $("#lv_home").hide();
    $("#lv_beasiswa").hide();
    $("#lv_event").hide();
    setTimeout(function () {
        $("#lv_event").fadeIn();
        $("#loading").hide();
    }, 1500);
    $("#lv_profil").hide();
});

$("#profil").click(function () {
    $("#home_ic").attr("src", "mobile/icons/home_linear.svg");
    $("#beasiswa_ic").attr("src", "mobile/icons/teacher_linear.svg");
    $("#event_ic").attr("src", "mobile/icons/calendar_linear.svg");
    $("#profil_ic").attr("src", "mobile/icons/user_bold.svg");

    $("#lv_home").hide();
    $("#lv_beasiswa").hide();
    $("#lv_event").hide();
    $("#lv_profil").fadeIn();
});