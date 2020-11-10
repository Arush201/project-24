class Paper{
    constructor(x,y){
        var options ={
            isStatic : false,
            restitution : 0.4,
            fricion : 0.5,
            density : 1.2
        }
        this.radius = 5
        this.body = Bodies.circle(this.x,this.y,this.radius,options)
        World.add(world,this.body)

    }
    display(){
        push()
        var pos = this.body.position
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("pink")
        ellipse(0,0,this.radius,this.radius)
        pop()
        
    }
}