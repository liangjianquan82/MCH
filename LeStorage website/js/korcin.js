/**
 * 
 * @authors Korbin 280674094@qq.com
 * @date    2019-07-25 10:51:04
 * @version $Id$
 */

$(function(){
	$(".nav li").hover(function(){
		$(this).find(".sub").show().stop().animate({top:'80px',opacity:'1'},260);
	},function(){
		$(this).find(".sub").stop().animate({top:'70px',opacity:'0'},260,function(){
			$(this).hide();
		});
	});

	$(".omit").each(function (i) {
        var divH = $(this).height();
        var $p = $(".om", $(this)).eq(0);
        var text = $p.text();
		$p.text(text.length > 250 ? (text.substring(0, 250) + '...') : text);
        // while ($p.outerHeight() > divH) {
        //   $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        // };
      });

	// 世界地图
	$(".coordinate-item").hover(function(){
		$(this).find(".city-name").stop().animate({bottom:'40px',opacity:'0'},260,function(){
			$(this).hide();
		});
		$(this).find(".warehouse-detail").show().stop().animate({bottom:'26px',opacity:'1'},200);
	},function(){
		$(this).find(".warehouse-detail").stop().animate({bottom:'50px',opacity:'0'},200,function(){
			$(this).hide();
		});
		$(this).find(".city-name").show().stop().animate({bottom:'26px',opacity:'1'},260);
	});

	$(".coordinate-item").hover(function(){
		$(this).find(".warehouse_dright").show().stop().animate({left:'22px',opacity:'1'},200);
	},function(){
		$(this).find(".warehouse_dright").stop().animate({left:'50px',opacity:'0'},200,function(){
			$(this).hide();
		});
		
	});
	
})