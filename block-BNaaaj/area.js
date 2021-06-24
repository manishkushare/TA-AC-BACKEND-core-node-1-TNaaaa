const areaOfSquare = (length=1) => {
    return length**2;
};

const areaOfCircle = (radius = 1) => {
    return 3.14*(radius**2);
};

const areaOfRectangle = (width = 1, length= 2)=>{
    return width*length
};

module.exports = {
    areaOfCircle: areaOfCircle,
    areaOfRectangle: areaOfRectangle,
    areaOfSquare: areaOfSquare,
}