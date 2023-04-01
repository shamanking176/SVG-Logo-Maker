class Shape{
constructor(text,textcolor){
    this.text = text;
    this.textcolor = textcolor;
}}

class Circle extends Shape{
constructor(text,textcolor,shapecolor){
    super(text,textcolor)
    this.shapecolor = shapecolor
}
renderShape(){
    return `<circle cx="150" cy="100" r="80" fill="${this.shapecolor}"/>`
}
setText(){
    if(this.text.length > 3){
        throw new Error("limit three characters")
    }
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
}
renderSVG(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShape()}${this.setText()}</svg>`
}
}

class Triangle extends Shape{
constructor(text,textcolor,shapecolor){
    super(text,textcolor)
    this.shapecolor = shapecolor
}
renderShape(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}"/>`
}
setText(){
    if(this.text.length > 3){
        throw new Error("limit three characters")
    }
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
}
renderSVG(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShape()}${this.setText()}</svg>`
}
}

class Square extends Shape{
    constructor(text,textcolor,shapecolor){
        super(text,textcolor)
        this.shapecolor = shapecolor
}
renderShape(){
    return `<rect x="90" y="40" wdith="120" height="120" fill="${this.shapecolor}"/>`
}
setText(){
    if(this.text.length > 3){
        throw new Error("limit three characters")
    }
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
}
renderSVG(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShape()}${this.setText()}</svg>`
}
}

module.exports={Circle,Triangle,Square}
