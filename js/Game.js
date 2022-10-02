class Game{
    constructor(){
this.resetButton=createButton("reset")
    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
    }
    update(state) {
        database.ref("/").update({
          gameState: state
        });
      }
start(){
    player=new Player()
    playerCount=player.getCount()
    form = new Form();
    form.display();
    paddle1=createSprite(60,windowHeight/2)
    paddle1.addImage("paddle1",paddle1Img)
    paddle1.scale=0.3
    paddle2=createSprite(windowWidth-60,windowHeight/2)
    paddle2.addImage("paddle2",paddle2Img)
    paddle2.scale=0.4
    paddles=[paddle1, paddle2]
    ball=createSprite(windowWidth/2, windowHeight/2)
    ball.addImage("pongBall",ballImg)
    ball.scale=0.13
    
}    
handleResetButton() {
  this.resetButton.mousePressed(() => {
    database.ref("/").set({
      playerCount: 0,
      gameState: 0,
      players: {},
      carsAtEnd: 0
    });
    window.location.reload();
  });
}
handleElements(){
  form.hide()
  this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);
}
play(){
this.handleElements()
this.handleResetButton()
this.handlePlayerControls()
drawSprites()
}
handlePlayerControls(){
  if(keyIsDown("space")){
ball.velocityX=2
ball.velocityY=2
  }
  }
}