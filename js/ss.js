    <script type="text/javascript">
				$(function(){
				$(window).scroll(function () {
            	if ($(window).scrollTop() > 40) {
                $(".nan").css({
                	"position":"fixed",
                	"top":"0",
                });
                $("nav").css("border-bottom","1px solid #2f8931");
                 $("#ss").css({
                 	"position":"fixed",
                 	"margin-top":"46px",
                 });
            }else{
                $(".nan").css("position","inherit");
                $("nav").css({
                	"border-bottom":"none",
                	"background-color":"#ffffff",
                });
                $("#ss").css({
                	"position":"",
                	"margin-top":"46px",
                });
            }
        })				
				$("#ss").hide();
				$(".nav_li").on("touchend",function(){	
					if($("#ss").is(":hidden")){
					     $("#ss").show();
					     $(this).find("img").attr("src","images/index1_061.png");					    
					}else{
					   $("#ss").hide();
					   $(this).find("img").attr("src","images/index1_062.png");
					}
					return false;
				})	
			
					})
			</script>