export class artwork {
    constructor(src, name, artist, price) {
        this.src = src
        this.name = name
        this.artist = artist
        this.price = price
    }
    getSrc(){
        
        return this.src
    }

    getName() {
        return this.name
    }
    getArtist() {
        return this.artist
    }
    getPriceInt() {
        return this.price
    }
    getPriceString() {
        return '$'+ this.price
    }
}