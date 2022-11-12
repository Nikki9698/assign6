class cgIShape {
    constructor () {
        this.points = [];
        this.bary = [];
        this.indices = [];
    }
    
    addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {
        var nverts = this.points.length / 4;
        
        // push first vertex
        this.points.push(x0);  this.bary.push (1.0);
        this.points.push(y0);  this.bary.push (0.0);
        this.points.push(z0);  this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
        
        // push second vertex
        this.points.push(x1); this.bary.push (0.0);
        this.points.push(y1); this.bary.push (1.0);
        this.points.push(z1); this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++
        
        // push third vertex
        this.points.push(x2); this.bary.push (0.0);
        this.points.push(y2); this.bary.push (0.0);
        this.points.push(z2); this.bary.push (1.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
    }
}

class Cube extends cgIShape {
    
    constructor (subdivisions) {
        super();
        this.makeCube (subdivisions);
    }
    
     makeCube (subdivisions) {
        let a=0;
        let b=0;
        let x=0.5;
        let y=0.5;
        let z=0.5;
        while(a<subdivisions){
            for(b=0;b<subdivisions;b++){
                x0=b*(1/subdivisions)-x;
                y0=y-a*(1/subdivisions);
                z0=a*(1/subdivisions)-z;
                x1=(b+1)*(1/subdivisions)-x;
                y1=y-a*(1/subdivisions);
                z1=a*(1/subdivisions)-z;
                x2=b*(1/subdivisions)-x;
                y2=y-(a+1)*(1/subdivisions);
                z2=(a+1)*(1/subdivisions)-z;
                x3=(b+1)*(1/subdivisions)-x;
                y3=y-(a+1)*(1/subdivisions);
                z3=(a+1)*(1/subdivisions)-z;
                makeTriangle(x0,y0,-z,x1,y1,-z,x2,y2,-z);
                makeTriangle(x1,y1,-z,x3,y3,-z,x2,y2,-z);
                makeTriangle(x0,y0,z,x1,y1,z,x2,y2,z);
                makeTriangle(x1,y1,z,x3,y3,z,x2,y2,z);
                makeTriangle(x0,y,z0,x1,y,z1,x2,y,z2);
                makeTriangle(x1,y,z1,x3,y,z3,x2,y,z2);
                makeTriangle(x0,-y,z0,x1,-y,z1,x2,-y,z2);
                makeTriangle(x1,-y,z1,x3,-y,z3,x2,-y,z2);
                makeTriangle(-x,y0,z0,-x,y1,z1,-x,y2,z2);
                makeTriangle(-x,y1,z1,-x,y3,z3,-x,y2,z2);
                makeTriangle(x,y0,z0,x,y1,z1,x,y2,z2);
                makeTriangle(x,y1,z1,x,y3,z3,x,y2,z2);
            }
            a++;
        }
    }
    
     makeTriangle(x0,y0,z0,x1,y1,z1,x2,y2,z2){
        addTriangle(x0,y0,z0,x1,y1,z1,x2,y2,z2);
        addTriangle(x0,y0,z0,x2,y2,z2,x1,y1,z1);
    }
}


class Cylinder extends cgIShape {

    constructor (radialdivision,heightdivision) {
        super();
        this.makeCylinder (radialdivision,heightdivision);
    }
    
    makeCylinder (radialdivision,heightdivision){
        // fill in your cylinder code here
    }
}

class Cone extends cgIShape {

    constructor (radialdivision, heightdivision) {
        super();
        this.makeCone (radialdivision, heightdivision);
    }
    
    
    makeCone (radialdivision, heightdivision) {
    
        // Fill in your cone code here.
    }
}
    
class Sphere extends cgIShape {

    constructor (slices, stacks) {
        super();
        this.makeSphere (slices, stacks);
    }
    
    makeSphere (slices, stacks) {
        // fill in your sphere code here
    }

}


function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

