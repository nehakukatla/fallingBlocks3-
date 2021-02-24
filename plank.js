class Plank {
    constructor() {
        var options = {
            'restitution': 0.3,
        }

        rand = Math.round(random(1, 5));
        if (frameCount % 10 === 0) {
            this.plank = Bodies.rectangle(random(75, 525), 0, 150, 70, options);
            this.width = 150;
            this.height = 70
            this.plank.velocity.y = 5;
            World.add(world, this.plank);
            switch (rand) {
                case 1: this.image = loadImage("plankImages/blush.png");
                    break;
                case 2: this.image = loadImage("plankImages/green.png");
                    break;
                case 3: this.image = loadImage("plankImages/pink.png");
                    break;
                case 4: this.image = loadImage("plankImages/purple.jpg");
                    break;
                case 5: this.image = loadImage("plankImages/red.png");
                    break;
                default: break;
            }

        }
    }
    display() {
        var angle = this.plank.angle;
        push();
        translate(this.plank.position.x, this.plank.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}