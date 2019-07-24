class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload () 
    {
        this.load.image('background', 'assets/sunsetBackground.png')
        this.load.atlas('assets', 'assets/blockbreaker.png', 'assets/blockbreaker.json');
    }
    create () 
    {
        this.background = this.add.image(0, 0, "background").setOrigin(0, 0)
        this.background.alpha = .5;
        

    }
    update () 
    {
        
    }
}