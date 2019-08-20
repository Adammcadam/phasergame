class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
        var score = 0;
        var scoreText;
        var lives = 3;
        var livesText;
    }
    preload()
    {
        this.load.image('background', 'assets/sunsetBackground.png')
        this.load.atlas('assets', 'assets/blockbreaker.png', 'assets/blockbreaker.json');
    }
    create() 
    {
        this.background = this.add.image(0, 0, "background").setOrigin(0, 0)
        this.background.alpha = .5;
        
        //  Enables world boundary, but disables the floor
        this.physics.world.setBoundsCollision(true, true, true, false);
        //  Create the blocks in a 10x7 grid
        this.bricks = this.physics.add.staticGroup({
            key: 'assets', frame: [ 'red', 'yellow2', 'yellow1', 'green', 'blue', 'purple1', 'purple2' ],
            frameQuantity: 10,
            gridAlign: { width: 10, height: 7, cellWidth: 64, cellHeight: 32, x: 112, y: 100 }
        });
        this.ball = this.physics.add.image(400, 500, 'assets', 'ball').setCollideWorldBounds(true).setBounce(1);
        this.ball.setData('onPaddle', true);
        this.paddle = this.physics.add.image(400, 550, 'assets', 'paddle').setImmovable();
        //  The colliders
        this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this);
        this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);
        //  Keyboard Input events
        this.input.on('pointermove', function (pointer) {
            //  Keep the paddle within the game
            this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748);
            if (this.ball.getData('onPaddle'))
            {
                this.ball.x = this.paddle.x;
            }
        }, this);
        this.input.on('pointerup', function (pointer) {
            if (this.ball.getData('onPaddle'))
            {
                this.ball.setVelocity(-75, -300);
                this.ball.setData('onPaddle', false);
            }
        }, this);
        this.score = 0;
        this.lives = 3;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });
        this.livesText = this.add.text(625, 16, 'Lives: 3', { fontSize: '32px', fill: '#ffffff' });
    }
    
    hitBrick(ball, brick) 
    {
        brick.disableBody(true, true);
        this.score += 100;
        this.writeScore();
        if (this.bricks.countActive() === 0)
        {
            this.resetLevel();
        }
    }
    writeScore() {
        this.scoreText.setText('Score: ' + this.score);
    }
    writeLives() {
        this.livesText.setText('Lives: ' + this.lives);
    }
    resetBall()
    {
        this.lives -= 1;
        if (this.lives === 0) this.resetLevel();
        this.writeLives();
        this.ball.setVelocity(0);
        this.ball.setPosition(this.paddle.x, 500);
        this.ball.setData('onPaddle', true);
    }
    
    resetLevel()
    {
        if (this.lives !== 0) {
            this.resetBall();
        }
        this.endGame(this.score);
    }
    endGame(score) {
        confirm("Well done, you scored " + score + "! Would you like another game?");
        this.bricks.children.each(function (brick) {
            brick.enableBody(false, 0, 0, true, true);
        });
        this.score = 0;
        this.writeScore();
        this.lives = 3;
        this.writeLives();
    }
    
    hitPaddle(ball, paddle)
    {
        let diff = 0;
        if (ball.x < paddle.x)
        {
            //  Ball is on the left-hand side of the paddle
            diff = paddle.x - ball.x;
            ball.setVelocityX(-10 * diff);
        }
        else if (ball.x > paddle.x)
        {
            //  Ball is on the right-hand side of the paddle
            diff = ball.x -paddle.x;
            ball.setVelocityX(10 * diff);
        }
        else
        {
            //  Ball is perfectly in the middle
            ball.setVelocityX(2 + Math.random() * 8);
        }
    }
    
    update() 
    {
        if (this.ball.y > 600)
        {
            this.resetBall();
        }
    }    
}