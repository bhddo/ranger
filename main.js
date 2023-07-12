const { fabric } = require("./fabric");

// Create canvas variable
var canvas = new fabric.canvas('myCanvas');
blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_Image(get_Image)
{
   fabric.Image.fromURL(get_Image function(img){

    block_Image_Object.scaleToWidth(block_Image_Width)
    block_Image_Object.scaleToHeight(block_Image_height)
    block_Image_Object.set({
    top:block_y
    left:block_x
    });

    

    canvas.add(block_Image_Object)
})

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') // adicione os códigos adequados às teclas
   {
       new_Image('rr1.png');
       console.log("r")
   }
   if(keyPressed == '86')
   {
       blockX = 200;
       // enviar ranger verde
   }
   
   if(keyPressed == '65')
   {
       blockX =350;
       // enviar ranger amarelo 
   }
   if(keyPressed == '82')
   {
       blockX = 600;
       // enviar ranger rosa
   }
   if(keyPressed == '73')
   {
       blockX = 700;
   // enviar ranger índigo
   }
   
}
