car1_image="car1.jpg";

car2_image="car2.png";

random_number=Math.floor(Math.random()*4);

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

car1_width=100;

car2_width=100;

car1_height=90;

car2_height=90;

car1X=10;

car2X=10;

car1Y=10;

car2Y=100;

background_image="Circuit.png";


function add(){
    background_tag=new Image();

    background_tag.onload=upload_background;

    background_tag.src=background_image;

    car1_tag=new Image();

    car2_tag=new Image();

    car1_tag.onload=upload_car1;

    car2_tag.onload=upload_car2;

    car1_tag.src=car1_image;

    car2_tag.src=car2_image
}

function upload_background()
{
ctx.drawImage(background_tag, 0, 0, canvas.width, canvas.height);
}

function upload_car1()
{
    ctx.drawImage(car1_tag, car1X, car1Y, car1_width, car1_height);
}

function upload_car2()
{
    ctx.drawImage(car2_tag, car2X, car2Y, car2_width, car2_height);
}

window.addEventListener("keydown", car1_move);

windown.addEventListener("keydown", car2_move);

function car1_move(e)
{
    keypressed=e.keyCode;

    console.log(keypressed);

    if (keypressed==38) {
     console.log("up is pressed");
     up();
    }

    if (keypressed==40) {
        console.log("down is pressed");
        down();
       }

    if (keypressed==37) {
        console.log("left is pressed");
        left();
       }

    if (keypressed==39) {
        console.log("right is pressed");
        right();
       }
}

function car2_move(e)
{
    keypressed=e.keyCode;

    console.log(keypressed);

    if (keypressed==87) {
     console.log("up is pressed");
     up();
    }

    if (keypressed==83) {
        console.log("down is pressed");
        down();
       }

    if (keypressed==65) {
        console.log("left is pressed");
        left();
       }

    if (keypressed==68) {
        console.log("right is pressed");
        right();
       }
    }