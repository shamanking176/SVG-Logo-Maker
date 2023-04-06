const { Shape } = require('@svgdotjs/svg.js');
const {Circle,Triangle,Square} = require('../lib/shape');

describe(Shape, () => {
    test('should throw error if render is called', () => {
        const shape = new Shape();
        const err = new Error('Child class must implement render() method');
        expect(() => shape.renderSVG()).toThrow(err);
    })
    })


test('should render a blue triangle', () => {
const shape = new Triangle("tes","green","yellow");
expect(shape.renderSVG()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="yellow"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">tes</text></svg>');
})

test('should render a green square', () => {
    const shape = new Square("tes","purple","red");
    expect(shape.renderSVG()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">tes</text></svg>');
    })


test('should render a red circle', () => {
        const shape = new Circle("tes","red","blue");
        expect(shape.renderSVG()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">tes</text></svg>');
        })