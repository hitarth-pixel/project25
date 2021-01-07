class dustbin extends BaseClass{
  
    constructor(x,y,width,height){
         
        super(x,y-100,width+20,height*5);
        //this.image=loadImage("dustbingreen.png")
        //610,380,200,20
        //this.boxBottom=new Box(x,y,width,height);
	    this.boxRight=new Box(x+100,y-60,height-10,width-90);
	    this.boxLeft=new Box(x-100,y-60,height-10,width-90);
    }
  
     display()
     {
        
        //this.boxBottom.display();   
       // this.boxLeft.display();
        //this.boxRight.display();
        super.display()  
    }
}