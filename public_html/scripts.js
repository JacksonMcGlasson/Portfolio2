$("document").ready(function(){
    //binds picture to click and hide image function
    $("#hideImage").bind("click", hideImage);
    //binds picture to click and show image function
    $("#showImage").bind("click", showImage);
});
// hides halo picture and carousel
function hideImage() {
    $("#halo").animate({opacity: 0, height: "50px"}, 2000, "linear");
    $("#slides").animate({opacity: 0, height: "50px"}, 2000, "linear");
    $("#left").animate({opacity: 0, height: "50px"}, 2000, "linear");
    $("#right").animate({opacity: 0, height: "50px"}, 2000, "linear");
    $("#indicator").animate({opacity: 0, height: "50px"}, 2000, "linear");
    
}
// shows halo picture and carousel
function showImage() {
    $("#halo").animate({opacity: 100, height: "450px"}, 2000, "linear");
    $("#slides").animate({opacity: 100, height: "580px"}, 2000, "linear");
    $("#left").animate({opacity: 100, height: "580px"}, 2000, "linear");
    $("#right").animate({opacity: 100, height: "580px"}, 2000, "linear");
    $("#indicator").animate({opacity: 100, height: "580px"}, 2000, "linear");
}

