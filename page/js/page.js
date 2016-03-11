$('.tag').on("click",function(){
	var target = $(this).parent().attr('id');
	var trigger=0;
	if($(this).parent().hasClass("slide")){
		$($('#container').children().get().reverse()).each(function(i,j){
			if($(j).hasClass("slide")){
				$(j).removeClass("slide");
				$(j).addClass("slideR");
				if($(j).attr('id')==target){
					return false;
				}
			}
		});
	}else{
		$('#container').children().each(function(i,j){
			if($(j).attr('id')==target){
				return false;
			}else{
				if($(j).hasClass("slideR")){
					$(j).removeClass("slideR");
					$(j).addClass("slide");
				}else{
					$(j).addClass("slide");
				}
			}
			
			

		});
	}
});

