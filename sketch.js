var ball;
var position,database;

function setup(){

    database=firebase.database;

    createCanvas(500,500);
    ball = createSprite(100,100,20,20);
    ball.shapeColor = "blue";

    var ballposition=database.ref('ball/position');
    ballposition.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+3);
    }
    drawSprites();
}
 
function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data){

    position=data.val()
    ballx=position.x;
    ball.y=position.y;

}