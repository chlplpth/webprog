$(document).ready(function(){
	$('#searchButton').on('click', function () {
		$('.container').html("");
        var query = $('#searchBox').val();
        console.log(query);
        $.ajax({
            url: 'https://kgsearch.googleapis.com/v1/entities:search',
            data: {
                'query': query,
                'key' : 'AIzaSyDYlT6TkA9rrYYsoaYiE0egehGwSkDkxx0',
            },
            dataType : 'json',
       	    success: function (data) {
       	    	// console.log();
       	    	var row;
        		for (var i = 0; i < data['itemListElement'].length; i++) {

     				if(i%3==0){
     					row = document.createElement("div");
     					row.setAttribute('class','row');
     				}
        			var content = data['itemListElement'][i]['result'];
        			var src = 'noimage.gif';
        			if (typeof content['image'] != 'undefined'){
        				src =content['image']['contentUrl'];
        			}
        			var name = content['name'];
        			var description = content['description'];
        			var card = "<div class='card  one-third column'><br><img src= '"+src+"' width='208'/><br><h4>"+name+"</h4><h6>"+description+"</h6>";
        			if (typeof content['url'] != 'undefined'){
        				var link = content['url'];
        				var lastChar=link.charAt(link.length-1);
        				if(lastChar=="/"){
        					link=link.substr(0,link.length-1);
        				}
        				card = card+"<a href = "+link+">"+link+"</a><br><br></div>";
        			}else{
        				card = card+"<br><br></div>"
        			}
        			$(row).append(card);
        			if(i%3==0){
     					$('.container').append(row);
     				}
    				

           		console.log(data['itemListElement'][i]['result']);
           		}
    		}
        })
	});
});
