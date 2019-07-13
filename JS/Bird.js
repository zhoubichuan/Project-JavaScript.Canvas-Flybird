class Bird {
    constructor() {
        this.x = game.allImg['bird0_0'].width
        this.x = game.canvas.width / 2 - this.w / 2
        this.y = 10
        this.wing = 0
        this.status = "drop"
        this.changeY = 0
        this.rotate = 0
    }
    update() {
        if (this.status == "drop") {
            this.changeY += 0.5
            this.y += this.changeY
            this.rotate += 0.08
        } else if (this.status == 'up') {
            this.changeY = 0.6
            this.changeY <= 0 ? this.status = "drop" : null
            this.y = this.changeY
            this.y <= 0 ? this.y = 0 : null
            this.wing >= 2 ? this.wing = 0 : this.wing++
        }
        if (this.y >= game.canvas.height - game.allImg['land'].height) {
            this.y = game.canvas.height - game.allImg["land"].height
        }
    }
    render() {
        game.draw.save()
        game.draw.translate(this.x, this.y)
        game.draw.rotate(this.rotate)
        game.draw.drawImage(game.allImg["bird0_" + this.wing], -24, -24)
        game.draw.restore()
    }
    fly() {
        this.changeY = 6
        this.rotate = -1.2
        this.status = "up"
    }
}