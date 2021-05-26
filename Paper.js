class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        } 
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 0.5;
        this.image = loadImage("paper.png");
        World.add(myworld, this.body);
    }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            imageMode(CENTER);
            stroke("yellow");
            strokeWeight(5);
            fill("orange");       
            image(this.image, 0, 0, this.radius);     
            pop();
        }
}

   