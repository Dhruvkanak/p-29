class Slingshot{
constructor (bodyA,pointB){
    var options = {
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 0.04,
    lenght : 1
}
this.slingshot = Constraint.create(options);
this.pointB = pointB;
World.add(world,this.slingshot)
}

fly(){
this.slingshot.bodyA = null;
}

display(){
    if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}

}
