class Particle{
    constructor(x, y, radius){
        var options = {
            restitution: 0.5,
            //density: 0.1,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }
}