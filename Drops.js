class Drops{
    constructor(x,y,r){
        var options={
            'restitution':0.4,
            'density': 0.04,
            'friction':0.1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        ellipse(0,0, this.r);
        pop();

        if(this.body.position.y > 560){
            Matter.Body.setPosition(this.body,{x:random(0,400), y: random(0,600)})
        }
    }
}