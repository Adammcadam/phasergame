var blockBreaker = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function blockBreaker ()
    {
        Phaser.Scene.call(this, { key: 'blockBreaker' });

        this.bricks;
        this.paddle;
        this.ball;
    },

    preload: function ()
    {
        this.load.image('background', 'assets/background2.png')
        this.load.atlas('assets', 'assets/blockbreaker.png', 'assets/blockbreaker.json');
    },

    create: function ()
    {
        //load the background in 
        this.add.image(0, 0, 'background').setOrigin(0, 0)
        
        
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

        //  Input events
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
        
        scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
        livesText = this.add.text(625, 16, 'Lives: 3', { fontSize: '32px', fill: '#000' });
    },

    hitBrick: function (ball, brick)
    {
        brick.disableBody(true, true);

        if (this.bricks.countActive() === 0)
        {
            this.resetLevel();
        }
    },

    resetBall: function ()
    {
        this.ball.setVelocity(0);
        this.ball.setPosition(this.paddle.x, 500);
        this.ball.setData('onPaddle', true);
    },

    resetLevel: function ()
    {
        this.resetBall();

        this.bricks.children.each(function (brick) {

            brick.enableBody(false, 0, 0, true, true);

        });
    },

    hitPaddle: function (ball, paddle)
    {
        var diff = 0;

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
    },
    
    hitBrickScore: function (ball, brick)
    {
         brick.disableBody(true, true);
         
         score += 10;
         scoreText.setText('Score: ' + score);
    },
    
    removeLives: function () 
    {
        this.ball.disableBody(true, true);
        
        lives -= 1;
        livesText.setText('Lives: ' + lives);
    },

    update: function ()
    {
        if (this.ball.y > 600)
        {
            this.resetBall();
        }
        
        if (this.ball.y > 600)
        {
            this.removeLives();
        }
    }

});

var highScore = new Phaser.Class({
    
    Extends: Phaser.scene,
    
    initialize:
    
    function constructor ()
    {
        super({ key: 'Highscore', active: true });
        
        this.player.text;
    },
    
    preload: function () 
    {
        this.load.image('block', 'block.png');
        this.load.image('rub', 'rub.png');
        this.load.image('end', 'end.png');

        this.load.bitmapFont('arcade', 'arcade.png', 'arcade.xml');
    },
    
    create: function () 
    {
        this.add.bitmapText(100, 260, 'arcade', 'RANK  SCORE   NAME').setTint(0xff00ff);
        this.add.bitmapText(100, 310, 'arcade', '1ST   50000').setTint(0xff0000);

        this.playerText = this.add.bitmapText(580, 310, 'arcade', '').setTint(0xff0000);

        this.input.keyboard.enabled = false;

        this.scene.launch('InputPanel');

        let panel = this.scene.get('InputPanel');

        panel.events.on('updateName', this.updateName, this);
        panel.events.on('submitName', this.submitName, this);
    },
    
    submitName: function () 
    {
        this.scene.stop('InputPanel');

        this.add.bitmapText(100, 360, 'arcade', '2ND   40000    ANT').setTint(0xff8200);
        this.add.bitmapText(100, 410, 'arcade', '3RD   30000    .-.').setTint(0xffff00);
        this.add.bitmapText(100, 460, 'arcade', '4TH   20000    BOB').setTint(0x00ff00);
        this.add.bitmapText(100, 510, 'arcade', '5TH   10000    ZIK').setTint(0x00bfff);
    },
    
    updateName: function (name) 
    {
        this.playerText.setText(name);
    }
    
});

var inputPanel = new Phaser.Class({
    
    Extends: Phaser.scene,
    
    initialize:
    
    function constructor()
    {
        
    }
});


var score = 0;
var scoreText;

var lives = 0;
var livesText;


var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ blockBreaker, highScore, inputPanel ],
    physics: {
        default: 'arcade'
    }
};

var game = new Phaser.Game(config);