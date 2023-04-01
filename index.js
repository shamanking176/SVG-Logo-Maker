const inquirer = require('inquirer');
const path = require('path');
const {writeFile} = require('fs/promises');
const { Circle, Triangle, Square } = require("./lib/shape")
// const { Svg } = require('@svgdotjs/svg.js');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'text',
    message: "Enter logo text",
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter text color',
},
{
    type: 'list',
    name: 'shape',
    message: 'Choose shape',
    choices: ['triangle', 'circle', 'square']
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color',
},]
function askquestions() {
    inquirer.prompt(questions).then(({ text, textColor, shape, shapeColor }) => {
        switch (shape) {
            case "circle":
                const circle = new Circle(text, textColor, shapeColor)
                createLogo(circle)
                break;
            case "triangle":
                const triangle = new Triangle(text, textColor, shapeColor)
                createLogo(triangle)
                break;
            case "square":
                const square = new Square(text, textColor, shapeColor)
               createLogo(square)
                break;
            default:
                break;
        }
    })
}
const createLogo =(shape) =>{
    return writeFile(path.join(__dirname,"/examples/","logo.svg"),shape.renderSVG())
}

askquestions();
// var text = "<rect fill='blue' height='50' width='50'>"
// var elem = svg(text);
