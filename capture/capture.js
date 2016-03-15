$(document).ready(function(){
   CameraTool.initCameraOn("camera");
   $("#camera-control").click(function(){
    setTimeout(function(){$("#countdown").html("3");},1000);
    setTimeout(function(){$("#countdown").html("2");},2000);
    setTimeout(function(){$("#countdown").html("1");},3000);
    setTimeout(function(){$("#countdown").html("");},4000);
    setTimeout(function(){CameraTool.captureTo("photo");},4000);
    setTimeout(function(){CameraTool.hideCamera();},4000);
   });

});

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.currentSrc);
}

function drop(ev) {
    ev.preventDefault();
    var image = ev.dataTransfer.getData("text");
    var newNode = document.createElement("img");
    newNode.setAttribute('src',image);
    newNode.setAttribute('class','sticker selected');
    newNode.setAttribute('onClick','toggle(this)');
    newNode.style.position = "absolute";
    newNode.style.top = "10%";
    newNode.style.left = "10%";
    $('#overlay').append(newNode);
}

// $('.stickerOnList').on("click",function(){
//     var newNode = document.createElement("img");
//     newNode.setAttribute('src',$(this).prop('src'));
//     newNode.setAttribute('class','sticker selected');
//     newNode.setAttribute('onClick','toggle()');
//     newNode.style.position = "absolute";
//     newNode.style.top = "10%";
//     newNode.style.left = "10%";
//     //var htmltext="<"+$(this).prop('nodeName')+" src='"+$(this).prop('src')+ "' class = 'sticker selected' onClick='toggle()'"+"/>";
//     $('#overlay').append(newNode);
// });

function toggle(e){
    console.log(e);
    if($(e).hasClass('selected')){
        $(e).removeClass('selected');
    }else{
        $(e).addClass('selected');
    }
}

function getRotationDegrees(obj) {
  var matrix = obj.css("-webkit-transform") ||
  obj.css("-moz-transform")    ||
  obj.css("-ms-transform")     ||
  obj.css("-o-transform")      ||
  obj.css("transform");
  if(matrix !== 'none') {
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
  } else { var angle = 0; }
  return (angle < 0) ? angle +=360 : angle;
}


$(document).keypress(function(e){
    var x = e.which || e.keyCode;
    console.log(x);
    if(x==61){
        $('.sticker.selected').css({
            height: '+=5px'
        });
    }
    if(x==45){
        $('.sticker.selected').css({
            height: '-=5px'
        });
    }
    if(x==93){
        $('.sticker.selected').css({
            width: '+=5px'
        });
    }
    if(x==91){
        $('.sticker.selected').css({
            width: '-=5px'
        });
    }
    if(x==38){
        $('.sticker.selected').css({"top":"-=5"});
    }
    if(x==40){
        $('.sticker.selected').css({"top":"+=5"});
    }
    if(x==37){
        $('.sticker.selected').css({"left":"-=5"});
    }
    if(x==39){
        $('.sticker.selected').css({"left":"+=5"});
    }
    if(x==46){
        $('.sticker.selected').each(function(){
            var an = getRotationDegrees($(this));
            an++;
            $(this).css("transform","rotate(" +an+ "deg)");
        });
    }
    if(x==44){
        $('.sticker.selected').each(function(){
            var an = getRotationDegrees($(this));
            an--;
            $(this).css("transform","rotate(" +an+ "deg)");
        });
    }
    if(x==100){
        $('.sticker.selected').each(function(){
            $(this).remove();
        });
    }
});


