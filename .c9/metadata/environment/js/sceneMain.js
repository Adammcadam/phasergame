{"filter":false,"title":"sceneMain.js","tooltip":"/js/sceneMain.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":19,"column":28},"end":{"row":19,"column":29},"action":"insert","lines":["g"],"id":199},{"start":{"row":19,"column":29},"end":{"row":19,"column":30},"action":"insert","lines":["n"]},{"start":{"row":19,"column":30},"end":{"row":19,"column":31},"action":"insert","lines":["G"]},{"start":{"row":19,"column":31},"end":{"row":19,"column":32},"action":"insert","lines":["r"]},{"start":{"row":19,"column":32},"end":{"row":19,"column":33},"action":"insert","lines":["i"]},{"start":{"row":19,"column":33},"end":{"row":19,"column":34},"action":"insert","lines":["d"]}],[{"start":{"row":19,"column":34},"end":{"row":19,"column":36},"action":"insert","lines":["()"],"id":200}],[{"start":{"row":19,"column":35},"end":{"row":19,"column":36},"action":"insert","lines":["g"],"id":201},{"start":{"row":19,"column":36},"end":{"row":19,"column":37},"action":"insert","lines":["r"]},{"start":{"row":19,"column":37},"end":{"row":19,"column":38},"action":"insert","lines":["i"]}],[{"start":{"row":19,"column":35},"end":{"row":19,"column":38},"action":"remove","lines":["gri"],"id":202},{"start":{"row":19,"column":35},"end":{"row":19,"column":45},"action":"insert","lines":["gridConfig"]}],[{"start":{"row":19,"column":46},"end":{"row":19,"column":47},"action":"insert","lines":[";"],"id":203}],[{"start":{"row":19,"column":47},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":204},{"start":{"row":20,"column":0},"end":{"row":20,"column":8},"action":"insert","lines":["        "]},{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"insert","lines":["t"]},{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["h"]},{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"insert","lines":["i"]},{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":["s"]}],[{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["."],"id":205},{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["a"]}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"remove","lines":["a"],"id":206},{"start":{"row":20,"column":13},"end":{"row":20,"column":18},"action":"insert","lines":["aGrid"]}],[{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["."],"id":207},{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":["s"]},{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["h"]},{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["o"]},{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["w"]},{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["N"]},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["u"]},{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"insert","lines":["m"]}],[{"start":{"row":20,"column":26},"end":{"row":20,"column":27},"action":"insert","lines":["b"],"id":208},{"start":{"row":20,"column":27},"end":{"row":20,"column":28},"action":"insert","lines":["e"]},{"start":{"row":20,"column":28},"end":{"row":20,"column":29},"action":"insert","lines":["r"]},{"start":{"row":20,"column":29},"end":{"row":20,"column":30},"action":"insert","lines":["s"]}],[{"start":{"row":20,"column":30},"end":{"row":20,"column":32},"action":"insert","lines":["()"],"id":209}],[{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":[";"],"id":210}],[{"start":{"row":14,"column":0},"end":{"row":20,"column":33},"action":"remove","lines":["        var gridConfig = {","            'scene': this,","            \"cols\": 10,","            \"rows\": 10","        }","        this.aGrid = new AlignGrid(gridConfig);","        this.aGrid.showNumbers();"],"id":211}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":11},"action":"remove","lines":["// "],"id":212},{"start":{"row":12,"column":8},"end":{"row":12,"column":11},"action":"remove","lines":["// "]}],[{"start":{"row":13,"column":8},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":213},{"start":{"row":14,"column":0},"end":{"row":14,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":14,"column":8},"end":{"row":57,"column":101},"action":"insert","lines":["//  Enables world boundary, but disables the floor","        this.physics.world.setBoundsCollision(true, true, true, false);","","        //  Create the blocks in a 10x7 grid","        this.bricks = this.physics.add.staticGroup({","            key: 'assets', frame: [ 'red', 'yellow2', 'yellow1', 'green', 'blue', 'purple1', 'purple2' ],","            frameQuantity: 10,","            gridAlign: { width: 10, height: 7, cellWidth: 64, cellHeight: 32, x: 112, y: 100 }","        });","","        this.ball = this.physics.add.image(400, 500, 'assets', 'ball').setCollideWorldBounds(true).setBounce(1);","        this.ball.setData('onPaddle', true);","","        this.paddle = this.physics.add.image(400, 550, 'assets', 'paddle').setImmovable();","","        //  The colliders","        this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this);","        this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);","","        //  Keyboard Input events","        this.input.on('pointermove', function (pointer) {","","            //  Keep the paddle within the game","            this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748);","","            if (this.ball.getData('onPaddle'))","            {","                this.ball.x = this.paddle.x;","            }","","        }, this);","","        this.input.on('pointerup', function (pointer) {","","            if (this.ball.getData('onPaddle'))","            {","                this.ball.setVelocity(-75, -300);","                this.ball.setData('onPaddle', false);","            }","","        }, this);","        ","        scoreText = this.add.text(16, 16, 'Score: ' + score, { fontSize: '32px', fill: '#ffffff' });","        livesText = this.add.text(625, 16, 'Lives: ' + lives, { fontSize: '32px', fill: '#ffffff' });"],"id":214}],[{"start":{"row":64,"column":1},"end":{"row":65,"column":0},"action":"insert","lines":["",""],"id":215},{"start":{"row":65,"column":0},"end":{"row":66,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":66,"column":0},"end":{"row":70,"column":14},"action":"insert","lines":["let score = 0;","let scoreText;","","let lives = 3;","let livesText;"],"id":216}],[{"start":{"row":62,"column":8},"end":{"row":70,"column":9},"action":"insert","lines":["        if (this.ball.y > 600)","        {","            this.resetBall();","        }","        ","        if (this.ball.y > 600)","        {","            this.removeLives();","        }"],"id":217}],[{"start":{"row":62,"column":16},"end":{"row":62,"column":20},"action":"insert","lines":["    "],"id":218}],[{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"remove","lines":["    "],"id":219}],[{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"remove","lines":["    "],"id":220}],[{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"remove","lines":["    "],"id":221}],[{"start":{"row":71,"column":5},"end":{"row":72,"column":0},"action":"insert","lines":["",""],"id":222},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"insert","lines":["    "]},{"start":{"row":72,"column":4},"end":{"row":73,"column":0},"action":"insert","lines":["",""]},{"start":{"row":73,"column":0},"end":{"row":73,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":59,"column":5},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":223},{"start":{"row":60,"column":0},"end":{"row":60,"column":4},"action":"insert","lines":["    "]},{"start":{"row":60,"column":4},"end":{"row":61,"column":0},"action":"insert","lines":["",""]},{"start":{"row":61,"column":0},"end":{"row":61,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":60,"column":4},"end":{"row":61,"column":0},"action":"insert","lines":["",""],"id":224},{"start":{"row":61,"column":0},"end":{"row":61,"column":4},"action":"insert","lines":["    "]},{"start":{"row":61,"column":4},"end":{"row":61,"column":5},"action":"insert","lines":["h"]},{"start":{"row":61,"column":5},"end":{"row":61,"column":6},"action":"insert","lines":["i"]},{"start":{"row":61,"column":6},"end":{"row":61,"column":7},"action":"insert","lines":["t"]},{"start":{"row":61,"column":7},"end":{"row":61,"column":8},"action":"insert","lines":["B"]}],[{"start":{"row":61,"column":4},"end":{"row":61,"column":8},"action":"remove","lines":["hitB"],"id":225},{"start":{"row":61,"column":4},"end":{"row":61,"column":12},"action":"insert","lines":["hitBrick"]}],[{"start":{"row":61,"column":12},"end":{"row":61,"column":13},"action":"insert","lines":[" "],"id":226}],[{"start":{"row":61,"column":13},"end":{"row":61,"column":15},"action":"insert","lines":["()"],"id":227}],[{"start":{"row":61,"column":15},"end":{"row":61,"column":16},"action":"insert","lines":[" "],"id":228},{"start":{"row":61,"column":16},"end":{"row":62,"column":0},"action":"insert","lines":["",""]},{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"insert","lines":["    "]},{"start":{"row":62,"column":4},"end":{"row":62,"column":5},"action":"insert","lines":["{"]},{"start":{"row":62,"column":5},"end":{"row":62,"column":6},"action":"insert","lines":["}"]}],[{"start":{"row":62,"column":5},"end":{"row":64,"column":4},"action":"insert","lines":["","        ","    "],"id":229}],[{"start":{"row":61,"column":14},"end":{"row":61,"column":15},"action":"insert","lines":["b"],"id":230},{"start":{"row":61,"column":15},"end":{"row":61,"column":16},"action":"insert","lines":["a"]},{"start":{"row":61,"column":16},"end":{"row":61,"column":17},"action":"insert","lines":["l"]},{"start":{"row":61,"column":17},"end":{"row":61,"column":18},"action":"insert","lines":["l"]},{"start":{"row":61,"column":18},"end":{"row":61,"column":19},"action":"insert","lines":[","]}],[{"start":{"row":61,"column":19},"end":{"row":61,"column":20},"action":"insert","lines":[" "],"id":231},{"start":{"row":61,"column":20},"end":{"row":61,"column":21},"action":"insert","lines":["b"]},{"start":{"row":61,"column":21},"end":{"row":61,"column":22},"action":"insert","lines":["r"]},{"start":{"row":61,"column":22},"end":{"row":61,"column":23},"action":"insert","lines":["i"]},{"start":{"row":61,"column":23},"end":{"row":61,"column":24},"action":"insert","lines":["c"]},{"start":{"row":61,"column":24},"end":{"row":61,"column":25},"action":"insert","lines":["k"]}],[{"start":{"row":61,"column":20},"end":{"row":61,"column":25},"action":"remove","lines":["brick"],"id":232},{"start":{"row":61,"column":20},"end":{"row":61,"column":26},"action":"insert","lines":["bricks"]}],[{"start":{"row":61,"column":25},"end":{"row":61,"column":26},"action":"remove","lines":["s"],"id":233}],[{"start":{"row":63,"column":8},"end":{"row":68,"column":9},"action":"insert","lines":["brick.disableBody(true, true);","","        if (this.bricks.countActive() === 0)","        {","            this.resetLevel();","        }"],"id":234}],[{"start":{"row":70,"column":4},"end":{"row":71,"column":0},"action":"insert","lines":["",""],"id":235},{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"insert","lines":["    "]},{"start":{"row":71,"column":4},"end":{"row":72,"column":0},"action":"insert","lines":["",""]},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"insert","lines":["    "]},{"start":{"row":72,"column":4},"end":{"row":73,"column":0},"action":"insert","lines":["",""]},{"start":{"row":73,"column":0},"end":{"row":73,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"remove","lines":["    "],"id":236},{"start":{"row":71,"column":4},"end":{"row":72,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":71,"column":4},"end":{"row":71,"column":5},"action":"insert","lines":["r"],"id":237},{"start":{"row":71,"column":5},"end":{"row":71,"column":6},"action":"insert","lines":["e"]},{"start":{"row":71,"column":6},"end":{"row":71,"column":7},"action":"insert","lines":["s"]},{"start":{"row":71,"column":7},"end":{"row":71,"column":8},"action":"insert","lines":["e"]},{"start":{"row":71,"column":8},"end":{"row":71,"column":9},"action":"insert","lines":["t"]},{"start":{"row":71,"column":9},"end":{"row":71,"column":10},"action":"insert","lines":["B"]},{"start":{"row":71,"column":10},"end":{"row":71,"column":11},"action":"insert","lines":["V"]}],[{"start":{"row":71,"column":10},"end":{"row":71,"column":11},"action":"remove","lines":["V"],"id":238}],[{"start":{"row":71,"column":10},"end":{"row":71,"column":11},"action":"insert","lines":["a"],"id":239},{"start":{"row":71,"column":11},"end":{"row":71,"column":12},"action":"insert","lines":["l"]},{"start":{"row":71,"column":12},"end":{"row":71,"column":13},"action":"insert","lines":["l"]}],[{"start":{"row":71,"column":13},"end":{"row":71,"column":14},"action":"insert","lines":[" "],"id":240}],[{"start":{"row":71,"column":14},"end":{"row":71,"column":16},"action":"insert","lines":["()"],"id":241}],[{"start":{"row":71,"column":16},"end":{"row":72,"column":0},"action":"insert","lines":["",""],"id":242},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":72,"column":4},"end":{"row":76,"column":5},"action":"insert","lines":["{","        this.ball.setVelocity(0);","        this.ball.setPosition(this.paddle.x, 500);","        this.ball.setData('onPaddle', true);","    }"],"id":243}],[{"start":{"row":76,"column":5},"end":{"row":77,"column":0},"action":"insert","lines":["",""],"id":244},{"start":{"row":77,"column":0},"end":{"row":77,"column":4},"action":"insert","lines":["    "]},{"start":{"row":77,"column":4},"end":{"row":78,"column":0},"action":"insert","lines":["",""]},{"start":{"row":78,"column":0},"end":{"row":78,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":78,"column":4},"end":{"row":78,"column":5},"action":"insert","lines":["r"],"id":245},{"start":{"row":78,"column":5},"end":{"row":78,"column":6},"action":"insert","lines":["e"]},{"start":{"row":78,"column":6},"end":{"row":78,"column":7},"action":"insert","lines":["s"]},{"start":{"row":78,"column":7},"end":{"row":78,"column":8},"action":"insert","lines":["e"]},{"start":{"row":78,"column":8},"end":{"row":78,"column":9},"action":"insert","lines":["t"]}],[{"start":{"row":78,"column":4},"end":{"row":78,"column":9},"action":"remove","lines":["reset"],"id":246},{"start":{"row":78,"column":4},"end":{"row":78,"column":14},"action":"insert","lines":["resetLevel"]}],[{"start":{"row":78,"column":14},"end":{"row":78,"column":16},"action":"insert","lines":["()"],"id":247}],[{"start":{"row":78,"column":16},"end":{"row":79,"column":0},"action":"insert","lines":["",""],"id":248},{"start":{"row":79,"column":0},"end":{"row":79,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":79,"column":4},"end":{"row":87,"column":5},"action":"insert","lines":["{","        this.resetBall();","","        this.bricks.children.each(function (brick) {","","            brick.enableBody(false, 0, 0, true, true);","","        });","    }"],"id":249}],[{"start":{"row":71,"column":13},"end":{"row":71,"column":14},"action":"remove","lines":[" "],"id":250}],[{"start":{"row":61,"column":12},"end":{"row":61,"column":13},"action":"remove","lines":[" "],"id":251}],[{"start":{"row":89,"column":10},"end":{"row":89,"column":11},"action":"remove","lines":[" "],"id":252}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"remove","lines":[" "],"id":253}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"remove","lines":[" "],"id":254}],[{"start":{"row":88,"column":4},"end":{"row":89,"column":0},"action":"insert","lines":["",""],"id":255},{"start":{"row":89,"column":0},"end":{"row":89,"column":4},"action":"insert","lines":["    "]},{"start":{"row":89,"column":4},"end":{"row":90,"column":0},"action":"insert","lines":["",""]},{"start":{"row":90,"column":0},"end":{"row":90,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":90,"column":4},"end":{"row":90,"column":5},"action":"insert","lines":["h"],"id":256},{"start":{"row":90,"column":5},"end":{"row":90,"column":6},"action":"insert","lines":["i"]},{"start":{"row":90,"column":6},"end":{"row":90,"column":7},"action":"insert","lines":["t"]},{"start":{"row":90,"column":7},"end":{"row":90,"column":8},"action":"insert","lines":["P"]}],[{"start":{"row":90,"column":4},"end":{"row":90,"column":8},"action":"remove","lines":["hitP"],"id":257},{"start":{"row":90,"column":4},"end":{"row":90,"column":13},"action":"insert","lines":["hitPaddle"]}],[{"start":{"row":90,"column":13},"end":{"row":90,"column":15},"action":"insert","lines":["()"],"id":258}],[{"start":{"row":90,"column":14},"end":{"row":90,"column":15},"action":"insert","lines":["b"],"id":259},{"start":{"row":90,"column":15},"end":{"row":90,"column":16},"action":"insert","lines":["a"]},{"start":{"row":90,"column":16},"end":{"row":90,"column":17},"action":"insert","lines":["l"]},{"start":{"row":90,"column":17},"end":{"row":90,"column":18},"action":"insert","lines":["l"]},{"start":{"row":90,"column":18},"end":{"row":90,"column":19},"action":"insert","lines":[","]}],[{"start":{"row":90,"column":19},"end":{"row":90,"column":20},"action":"insert","lines":[" "],"id":260},{"start":{"row":90,"column":20},"end":{"row":90,"column":21},"action":"insert","lines":["p"]},{"start":{"row":90,"column":21},"end":{"row":90,"column":22},"action":"insert","lines":["a"]},{"start":{"row":90,"column":22},"end":{"row":90,"column":23},"action":"insert","lines":["d"]},{"start":{"row":90,"column":23},"end":{"row":90,"column":24},"action":"insert","lines":["d"]},{"start":{"row":90,"column":24},"end":{"row":90,"column":25},"action":"insert","lines":["l"]},{"start":{"row":90,"column":25},"end":{"row":90,"column":26},"action":"insert","lines":["e"]}],[{"start":{"row":90,"column":27},"end":{"row":91,"column":0},"action":"insert","lines":["",""],"id":266},{"start":{"row":91,"column":0},"end":{"row":91,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":91,"column":4},"end":{"row":111,"column":5},"action":"insert","lines":["{","        let diff = 0;","","        if (ball.x < paddle.x)","        {","            //  Ball is on the left-hand side of the paddle","            diff = paddle.x - ball.x;","            ball.setVelocityX(-10 * diff);","        }","        else if (ball.x > paddle.x)","        {","            //  Ball is on the right-hand side of the paddle","            diff = ball.x -paddle.x;","            ball.setVelocityX(10 * diff);","        }","        else","        {","            //  Ball is perfectly in the middle","            ball.setVelocityX(2 + Math.random() * 8);","        }","    }"],"id":267}],[{"start":{"row":111,"column":5},"end":{"row":112,"column":0},"action":"insert","lines":["",""],"id":268},{"start":{"row":112,"column":0},"end":{"row":112,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":112,"column":4},"end":{"row":113,"column":0},"action":"insert","lines":["",""],"id":269},{"start":{"row":113,"column":0},"end":{"row":113,"column":4},"action":"insert","lines":["    "]},{"start":{"row":113,"column":4},"end":{"row":114,"column":0},"action":"insert","lines":["",""]},{"start":{"row":114,"column":0},"end":{"row":114,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":114,"column":4},"end":{"row":114,"column":5},"action":"insert","lines":["h"],"id":270},{"start":{"row":114,"column":5},"end":{"row":114,"column":6},"action":"insert","lines":["i"]},{"start":{"row":114,"column":6},"end":{"row":114,"column":7},"action":"insert","lines":["t"]},{"start":{"row":114,"column":7},"end":{"row":114,"column":8},"action":"insert","lines":["B"]},{"start":{"row":114,"column":8},"end":{"row":114,"column":9},"action":"insert","lines":["r"]},{"start":{"row":114,"column":9},"end":{"row":114,"column":10},"action":"insert","lines":["i"]},{"start":{"row":114,"column":10},"end":{"row":114,"column":11},"action":"insert","lines":["c"]},{"start":{"row":114,"column":11},"end":{"row":114,"column":12},"action":"insert","lines":["k"]}],[{"start":{"row":114,"column":4},"end":{"row":114,"column":12},"action":"remove","lines":["hitBrick"],"id":271},{"start":{"row":114,"column":4},"end":{"row":114,"column":17},"action":"insert","lines":["hitBrickScore"]}],[{"start":{"row":114,"column":17},"end":{"row":114,"column":19},"action":"insert","lines":["()"],"id":272}],[{"start":{"row":114,"column":19},"end":{"row":115,"column":0},"action":"insert","lines":["",""],"id":273},{"start":{"row":115,"column":0},"end":{"row":115,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":115,"column":4},"end":{"row":120,"column":5},"action":"insert","lines":["{","         brick.disableBody(true, true);","         ","         score += 10;","         scoreText.setText('Score: ' + score);","    }"],"id":274}],[{"start":{"row":120,"column":5},"end":{"row":121,"column":0},"action":"insert","lines":["",""],"id":275},{"start":{"row":121,"column":0},"end":{"row":121,"column":4},"action":"insert","lines":["    "]},{"start":{"row":121,"column":4},"end":{"row":122,"column":0},"action":"insert","lines":["",""]},{"start":{"row":122,"column":0},"end":{"row":122,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":114,"column":18},"end":{"row":114,"column":19},"action":"insert","lines":["b"],"id":276},{"start":{"row":114,"column":19},"end":{"row":114,"column":20},"action":"insert","lines":["a"]},{"start":{"row":114,"column":20},"end":{"row":114,"column":21},"action":"insert","lines":["l"]},{"start":{"row":114,"column":21},"end":{"row":114,"column":22},"action":"insert","lines":["l"]},{"start":{"row":114,"column":22},"end":{"row":114,"column":23},"action":"insert","lines":[","]}],[{"start":{"row":114,"column":23},"end":{"row":114,"column":24},"action":"insert","lines":[" "],"id":277},{"start":{"row":114,"column":24},"end":{"row":114,"column":25},"action":"insert","lines":["b"]},{"start":{"row":114,"column":25},"end":{"row":114,"column":26},"action":"insert","lines":["r"]},{"start":{"row":114,"column":26},"end":{"row":114,"column":27},"action":"insert","lines":["i"]},{"start":{"row":114,"column":27},"end":{"row":114,"column":28},"action":"insert","lines":["c"]},{"start":{"row":114,"column":28},"end":{"row":114,"column":29},"action":"insert","lines":["k"]}],[{"start":{"row":121,"column":4},"end":{"row":122,"column":0},"action":"insert","lines":["",""],"id":278},{"start":{"row":122,"column":0},"end":{"row":122,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":122,"column":4},"end":{"row":122,"column":5},"action":"insert","lines":["r"],"id":279},{"start":{"row":122,"column":5},"end":{"row":122,"column":6},"action":"insert","lines":["e"]},{"start":{"row":122,"column":6},"end":{"row":122,"column":7},"action":"insert","lines":["m"]},{"start":{"row":122,"column":7},"end":{"row":122,"column":8},"action":"insert","lines":["o"]},{"start":{"row":122,"column":8},"end":{"row":122,"column":9},"action":"insert","lines":["v"]},{"start":{"row":122,"column":9},"end":{"row":122,"column":10},"action":"insert","lines":["e"]},{"start":{"row":122,"column":10},"end":{"row":122,"column":11},"action":"insert","lines":["L"]},{"start":{"row":122,"column":11},"end":{"row":122,"column":12},"action":"insert","lines":["i"]},{"start":{"row":122,"column":12},"end":{"row":122,"column":13},"action":"insert","lines":["v"]}],[{"start":{"row":122,"column":13},"end":{"row":122,"column":14},"action":"insert","lines":["e"],"id":280},{"start":{"row":122,"column":14},"end":{"row":122,"column":15},"action":"insert","lines":["d"]},{"start":{"row":122,"column":15},"end":{"row":122,"column":16},"action":"insert","lines":["s"]}],[{"start":{"row":122,"column":15},"end":{"row":122,"column":16},"action":"remove","lines":["s"],"id":281},{"start":{"row":122,"column":14},"end":{"row":122,"column":15},"action":"remove","lines":["d"]}],[{"start":{"row":122,"column":14},"end":{"row":122,"column":15},"action":"insert","lines":["s"],"id":282}],[{"start":{"row":122,"column":15},"end":{"row":122,"column":17},"action":"insert","lines":["()"],"id":283}],[{"start":{"row":122,"column":17},"end":{"row":123,"column":0},"action":"insert","lines":["",""],"id":284},{"start":{"row":123,"column":0},"end":{"row":123,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":123,"column":4},"end":{"row":128,"column":5},"action":"insert","lines":["{","        this.ball.disableBody(true, true);","        ","        lives -= 1;","        livesText.setText('Lives: ' + lives);","    }"],"id":285}],[{"start":{"row":116,"column":9},"end":{"row":116,"column":10},"action":"insert","lines":["i"],"id":286},{"start":{"row":116,"column":10},"end":{"row":116,"column":11},"action":"insert","lines":["f"]}],[{"start":{"row":116,"column":11},"end":{"row":116,"column":12},"action":"insert","lines":[" "],"id":287},{"start":{"row":116,"column":12},"end":{"row":116,"column":13},"action":"insert","lines":["("]}],[{"start":{"row":116,"column":42},"end":{"row":116,"column":43},"action":"insert","lines":[")"],"id":288}],[{"start":{"row":116,"column":43},"end":{"row":116,"column":44},"action":"insert","lines":[" "],"id":289},{"start":{"row":116,"column":44},"end":{"row":116,"column":45},"action":"insert","lines":["{"]},{"start":{"row":116,"column":45},"end":{"row":116,"column":46},"action":"insert","lines":["}"]}],[{"start":{"row":116,"column":45},"end":{"row":118,"column":9},"action":"insert","lines":["","             ","         "],"id":290}],[{"start":{"row":120,"column":9},"end":{"row":121,"column":46},"action":"remove","lines":["score += 10;","         scoreText.setText('Score: ' + score);"],"id":291}],[{"start":{"row":117,"column":13},"end":{"row":118,"column":46},"action":"insert","lines":["score += 10;","         scoreText.setText('Score: ' + score);"],"id":292}],[{"start":{"row":118,"column":9},"end":{"row":118,"column":12},"action":"insert","lines":["   "],"id":293}],[{"start":{"row":126,"column":8},"end":{"row":126,"column":9},"action":"insert","lines":["i"],"id":294},{"start":{"row":126,"column":9},"end":{"row":126,"column":10},"action":"insert","lines":["f"]},{"start":{"row":126,"column":10},"end":{"row":126,"column":11},"action":"insert","lines":["("]}],[{"start":{"row":126,"column":44},"end":{"row":126,"column":45},"action":"insert","lines":[")"],"id":295}],[{"start":{"row":126,"column":45},"end":{"row":126,"column":46},"action":"insert","lines":[" "],"id":296},{"start":{"row":126,"column":46},"end":{"row":126,"column":47},"action":"insert","lines":["{"]},{"start":{"row":126,"column":47},"end":{"row":126,"column":48},"action":"insert","lines":["}"]}],[{"start":{"row":126,"column":47},"end":{"row":128,"column":8},"action":"insert","lines":["","            ","        "],"id":297}],[{"start":{"row":130,"column":8},"end":{"row":131,"column":45},"action":"remove","lines":["lives -= 1;","        livesText.setText('Lives: ' + lives);"],"id":298}],[{"start":{"row":127,"column":12},"end":{"row":128,"column":45},"action":"insert","lines":["lives -= 1;","        livesText.setText('Lives: ' + lives);"],"id":299}],[{"start":{"row":128,"column":8},"end":{"row":128,"column":12},"action":"insert","lines":["    "],"id":300}],[{"start":{"row":131,"column":4},"end":{"row":131,"column":8},"action":"remove","lines":["    "],"id":301},{"start":{"row":131,"column":0},"end":{"row":131,"column":4},"action":"remove","lines":["    "]},{"start":{"row":130,"column":8},"end":{"row":131,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":117,"column":12},"end":{"row":117,"column":13},"action":"remove","lines":[" "],"id":302}],[{"start":{"row":118,"column":12},"end":{"row":118,"column":49},"action":"remove","lines":["scoreText.setText('Score: ' + score);"],"id":303},{"start":{"row":118,"column":8},"end":{"row":118,"column":12},"action":"remove","lines":["    "]},{"start":{"row":118,"column":4},"end":{"row":118,"column":8},"action":"remove","lines":["    "]},{"start":{"row":118,"column":0},"end":{"row":118,"column":4},"action":"remove","lines":["    "]},{"start":{"row":117,"column":24},"end":{"row":118,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":127,"column":0},"end":{"row":127,"column":49},"action":"remove","lines":["            livesText.setText('Lives: ' + lives);"],"id":304},{"start":{"row":126,"column":23},"end":{"row":127,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":3,"column":5},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1564000225260,"hash":"a1b7077f3293214f0f85c3468faf9ff8d711441a"}