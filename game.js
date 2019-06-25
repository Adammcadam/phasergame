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

    update: function ()
    {
        if (this.ball.y > 600)
        {
            this.resetBall();
        }
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ blockBreaker ],
    physics: {
        default: 'arcade'
    }
};

var game = new Phaser.Game(config);