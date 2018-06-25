class Stream {
    constructor() {
        this.symbols = [];

        this.totalSymbols = round(random(5, 20));
        this.fadeInterval = 1.6;
    }

    generateSymbols(x, y) {
        let opacity = 255;
        for(let i = 0; i <= this.totalSymbols; i++) {
            let symbol = new Symbol(x, y, opacity);
            if(round(random(0, this.totalSymbols)) == i) {
                symbol.color = color(180, 255, 180, opacity);
                symbol.font = 'Arial Bold';
            }
            symbol.setRandomSymbol();
            
            opacity -= 255 / this.totalSymbols / this.fadeInterval;
            this.symbols.push(symbol);
            y += symbol.textSize;
        }
    }

    render() {
        let symbols = this.symbols;
        for(let i = symbols.length - 1; i >= 0; i--) {
            if(symbols[i].isOffCanvas()) {
                let x = symbols[i].x;
                let y = symbols[i].y;
                symbols[i].removeFromWorld();
                symbols.splice(i, 1);
                if(symbols.length === 0) {
                    this.generateSymbols(x, y);
                }
            } else {
                symbols[i].render();
            }
        }
    }
}