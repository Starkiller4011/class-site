$(document).ready(function(){
	$("#even").click(function(){
		$(".test").hide();
	});
});
$(document).ready(function(){
	$("#odd").click(function(){
		$(".test2").hide();
	});
});
$(document).ready(function(){
	$("#red").click(function(){
		$("#test3").hide();
	});
});
$(document).ready(function(){
	$("#blueBox").click(function(){
		$("#panel").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#blueBoxText").click(function(){
		$("#panelText").fadeIn();
	});
});
$(document).ready(function(){
	$("#fade").click(function(){
		$("#div1").fadeIn();
		$("#div2").fadeIn("slow");
		$("#div3").fadeIn(3000);
	});
});
$(document).ready(function(){
	$("#animate").click(function(){
		$("#div1, #div2, #div3").animate({
			left: '250px',
			opacity: '0.5',
			height: '150px',
			width: '150px'
		});
	});
});