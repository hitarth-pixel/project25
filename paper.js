class paper {

    constructor(x, y) {
        var options = {
            isStatic:false,
             // restitution:0.8,
              friction:1.5,
              density:2.0
          }
        this.body = Bodies.circle(x,y,20,options);
         World.add(world, this.body);
         this.image=loadImage("paper.png");

      }
      display(){
        var pos =this.body.position;
       
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       
        imageMode(CENTER);
        image(this.image,0, 0, 40,40);

        pop();
      }




}