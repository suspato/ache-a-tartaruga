var canvas = new fabric.Canvas("myCanvas");

playerX=50;
playerY=70;

blockHeight=30;
blockWidth=30;
var playerObject="";
var blockObject="";

function playerUpdate(){
    fabric.Image.fromURL("tartaruga gritando.jpg",function(Img){
    playerObject=Img;
    playerObject.scaleToWidth(20);
    playerObject.scaleToHeight(20);
    playerObject.set({
        top:playerY,
        left:playerX
    })
    canvas.add(playerObject);
})
}