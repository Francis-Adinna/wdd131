const pi = 3.14;
let area = 0;

function circleArea(radius) {
    const area = radius * radius * pi;
    return area;
};

area = circleArea(5);
console.log(Math.ceil(area));