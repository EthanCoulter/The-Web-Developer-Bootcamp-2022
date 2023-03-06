// function Colour(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Colour.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`
// }

// Colour.prototype.hex = function() {
//     const { r, g, b} = this;
//     return '#' + ((1<<24) + (r << 16) + (g <<8) + b).toString(16).slice(1);
// }

// Colour.prototype.rgba = function(a =1) {
//     const { r, g, b, a} = this;
//     return `rgba(${r},${g},${b},${a})`
// }


class Colour {
    constructor(r,g,b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`
    }
    shout() {
        return `Hello from ${this.name}!`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1<<24) + (r << 16) + (g <<8) + b).toString(16).slice(1);
    }
    rgba (a=1.0) {
        const { r, g, b, a} = this;
        return `rgb(${this.innerRGB()},${a})`
    }
}