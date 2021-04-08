class Umbrella{
    constructor(x,y, radius){
        var options={
            isStatic : true
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.image = loadImage("walking_1.png");
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, 0,0,this.radius);

    }
}