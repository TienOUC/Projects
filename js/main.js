$(function () {
    // 显示/隐藏头部serach
    setInterval(function () {
        var client_width =  $(window).width(); 　
        if (client_width <= 420) {
            $("#serach").addClass("hide");
        } else {
            $("#serach").removeClass("hide");
        }
    }, 10);
})