class Paper {

    constructor(x, y, radius){

    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 1,
        density: 1.2
    }

        this.body = Bodies.circle(x, y, radius, options)
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("Foil.png");
        this.image.width = 160;
        this.image.height = 200;
    }

    display(){
        //circleMode(CENTER);
        fill("white");
        image(this.image,this.body.position.x,this.body.position.y, this.radius*2+80, this.radius*2);
    }


}