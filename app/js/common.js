$(function() {


    $(".js-nav a").on("click", function(e) {
        e.preventDefault();
        var currentBlock = $(this).attr("href"),
        currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset - 20
        }, 1000);    
    });
    $("[data-fancybox]").fancybox({
        infobar : true,
        loop : true
	});
});
