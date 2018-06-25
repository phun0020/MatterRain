class Symbol {
    constructor(x, y, opacity) {
        this.x = x;
        this.y = y;
        this.value = '0';
        
        this.body = Bodies.circle(this.x, this.y, RADIUS, {
            restitution: .12,
            frictionStatic: .375, 
            friction: .1,
            density: .01
        });

        World.add(world, this.body);

        this.switchInterval = round(random(5, 20));
        this.color = color(0, 255, 70, opacity);
        this.font = 'Consolas';
        this.textSize = TEXTSIZE;
    }

    setRandomSymbol() {
        let charType = round(random(0, 5));
        if (frameCount % this.switchInterval == 0) {
            if (charType > 1) {
                // set it to Katakana
                this.value = String.fromCharCode(
                    0x30A0 + round(random(0, 96))
                );
            } else {
                // set it to numeric
                this.value = round(random(0,9));
            }
        }
    }

    render() {
        let pos = this.body.position;
        fill(this.color);
        textSize(this.textSize);
        textFont(this.font);
        textAlign(CENTER, CENTER);
        
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        text(this.value, 0, 0);

        if(DEBUG) {
            noFill();
            stroke(255,255,255);
            ellipse(0, 0, RADIUS * 2);
        }
        
        pop();
        this.setRandomSymbol();
    }

    isOffCanvas() {
        let pos = this.body.position;
        return (pos.y > height) ? true : false;
    }

    removeFromWorld() {
        Composite.remove(world, this.body);
    }
}