// $("button").click(function() {
//   $("h1").css("color","green");
// });
// $("button").keydown(function(event) {
//     $("h1").text(event.key);
// });

// $("button").on("click", function() {
//     $("h1").hide();
// });
// $(".button-class").on("click", function() {
//     $("h1").show();
// });

// $(".button-class").on("click", function() {
//     $("h1").toggle();
// });

// $(".button-class").on("click", function() {
//     $("h1").fadeOut();
// });

// $(".button-class").on("click",function() {
//     $("h1").fadeToggle();
// });

// $(".button-class").on("click", function() {
//    $(".heading-class").slideToggle();
// });

// $(".button-class").on("click", function() {
//    $(".heading-class").animate({opacity: 0.7});
// });

$(".button-class").on("click", function() {
    $(".heading-class").slideToggle().animate({"font-size":"2rem"});
});