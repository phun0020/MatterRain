class Ground {
    constructor(x, y, w, h, options = {}) {
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    render() {
        let pos = this.body.position;
        let angle = this.body.angle;
        noFill();
        stroke(255, 255, 255);
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.w, this.h);

        pop();
        noStroke();
    }
}