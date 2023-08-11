const numbers = require('./numbers');

//Returns an area of a rectangle given by width and heigth test
test('area of a rectangle given by width and height function exists', () => {
    expect(numbers.getRectangleArea).toBeDefined();
});
test('area of a rectangle given by width and height function test', () => {
    expect(numbers.getRectangleArea(5, 10)).toBe(50);
});
test('area of a rectangle given by width and height function test', () => {
    expect(numbers.getRectangleArea(5, 5)).toBe(25);
});



//Returns a circumference of circle given by radius test
test('circumference of circle given by radius function exist', () => {
    expect(numbers.getCicleCircumference).toBeDefined();
});
test('circumference of circle given by radius function test', () => {
    expect(numbers.getCicleCircumference(5)).toBe(31.41592653589793);
});
test('circumference of circle given by radius function test', () => {
    expect(numbers.getCicleCircumference(3.14)).toBe(19.729201864543903);
});
test('circumference of circle given by radius function test', () => {
    expect(numbers.getCicleCircumference(0)).toBe(0);
});

//Returns an average of two given numbers.
test('average of two given numbers function exist', () => {
    expect(numbers.getAverage).toBeDefined();
});
test('average of two given numbers function test', () => {
    expect(numbers.getAverage(5, 5)).toBe(5);
});
test('average of two given numbers function test', () => {
    expect(numbers.getAverage(-3, 3)).toBe(0);
});
test('average of two given numbers function test', () => {
    expect(numbers.getAverage(10, 0)).toBe(5);
});


//Returns a distance beetween two points by cartesian coordinates test
test('distance beetween two points by cartesian coordinates function exist', () => {
    expect(numbers.getDistanceBetweenPoints).toBeDefined();
});
test('distance beetween two points by cartesian coordinates function test', () => {
    expect(numbers.getDistanceBetweenPoints(0, 0, 0, 1)).toBe(1);
});
test('distance beetween two points by cartesian coordinates function test', () => {
    expect(numbers.getDistanceBetweenPoints(0, 0, 1, 0)).toBe(1);
});
test('distance beetween two points by cartesian coordinates function test', () => {
    expect(numbers.getDistanceBetweenPoints(-5, 0, 10, -10)).toBe(18.027756377319946);
});
test('distance beetween two points by cartesian coordinates function test', () => {
    expect(numbers.getDistanceBetweenPoints(4, 2, 1, 6)).toBe(5);
});


//Returns a root of linear equation a*x + b = 0 given by coefficients a and b test
test('function for root of linear equation a*x + b = 0 given by coefficients a and b exist', () => {
    expect(numbers.getLinearEquationRoot).toBeDefined();
});
test('function for root of linear equation a*x + b = 0 given by coefficients a and b test', () => {
    expect(numbers.getLinearEquationRoot(5, -10)).toBe(2);
});
test('function for root of linear equation a*x + b = 0 given by coefficients a and b test', () => {
    expect(numbers.getLinearEquationRoot(1, 8)).toBe(-8);
});
test('function for root of linear equation a*x + b = 0 given by coefficients a and b test', () => {
    expect(numbers.getLinearEquationRoot(5, 0)).toBe(0);
});


//Returns an angle (in radians) between two vectors given by xi and yi, coordinates
test ('function that Returns an angle (in radians) between two vectors given by xi and yi, coordinates exist', () => {
    expect(numbers.getAngleBetweenVectors).toBeDefined();
});
test ('function that Returns an angle (in radians) between two vectors given by xi and yi, coordinates test', () => {
    const π = 3.141592653589793;
    expect(numbers.getAngleBetweenVectors(1, 0, 0, 1)).toBe(π/2);
});
test ('function that Returns an angle (in radians) between two vectors given by xi and yi, coordinates test', () => {
    const π = 3.141592653589793;
    expect(numbers.getAngleBetweenVectors(0, 1, 0, -1)).toBe(π);
});
test ('function that Returns an angle (in radians) between two vectors given by xi and yi, coordinates test', () => {
    const π = 3.141592653589793;
    expect(numbers.getAngleBetweenVectors(0, -1, 1, 0)).toBe(π/2);
});
test ('function that Returns an angle (in radians) between two vectors given by xi and yi, coordinates test', () => {
    const π = 3.141592653589793;
    expect(numbers.getAngleBetweenVectors(0, 1, 0, 1)).toBe(0);
});
test ('function that Returns an angle (in radians) between two vectors given by xi and yi, coordinates test', () => {
    const π = 3.141592653589793;
    expect(numbers.getAngleBetweenVectors(0, 1, 1, 2)).not.toBe(0);
});

//Returns a last digit of a integer number test
test('fuction that Returns a last digit of a integer number exist', () => {
    expect(numbers.getLastDigit).toBeDefined();
});
test('fuction that Returns a last digit of a integer number test', () => {
    expect(numbers.getLastDigit(100)).toBe(0);
});
test('fuction that Returns a last digit of a integer number test', () => {
    expect(numbers.getLastDigit(37)).toBe(7);
});
test('fuction that Returns a last digit of a integer number test', () => {
    expect(numbers.getLastDigit(5)).toBe(5);
});
test('fuction that Returns a last digit of a integer number test', () => {
    expect(numbers.getLastDigit(0)).toBe(0);
});


//Returns a number by given string representation
test('function that Returns a number by given string representation exist', () => {
    expect(numbers.parseNumberFromString).toBeDefined();
});
test('function that Returns a number by given string representation test', () => {
    expect(numbers.parseNumberFromString('100')).toBe(100);
});
test('function that Returns a number by given string representation test', () => {
    expect(numbers.parseNumberFromString('37')).toBe(37);
});
test('function that Returns a number by given string representation test', () => {
    expect(numbers.parseNumberFromString('-525.5')).toBe(-525.5);
});


//Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c test
test('function that Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c exist', () => {
    expect(numbers.getParallelipidedDiagonal).toBeDefined();
});
test('function that Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c test', () => {
    expect(numbers.getParallelipidedDiagonal(1, 1, 1)).toBe(1.7320508075688772);
});
test('function that Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c test', () => {
    expect(numbers.getParallelipidedDiagonal(3, 3, 3)).toBe(5.196152422706632);
});
test('function that Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c test', () => {
    expect(numbers.getParallelipidedDiagonal(1, 2, 3)).not.toBe(3.741657386773941);
});


//Returns the number rounded to specified power of 10
test('function that Returns the number rounded to specified power of 10 exist', () => {
    expect(numbers.roundToPowerOfTen).toBeDefined();
});
test('function that Returns the number rounded to specified power of 10 test', () => {
    expect(numbers.roundToPowerOfTen(1234, 0)).toBe(1234);
});
test('function that Returns the number rounded to specified power of 10 test', () => {
    expect(numbers.roundToPowerOfTen(1234, 1)).toBe(1230);
});
test('function that Returns the number rounded to specified power of 10 test', () => {
    expect(numbers.roundToPowerOfTen(1234, 2)).toBe(1200);
});
test('function that Returns the number rounded to specified power of 10 test', () => {
    expect(numbers.roundToPowerOfTen(1234, 3)).toBe(1000);
});
test('function that Returns the number rounded to specified power of 10 test', () => {
    expect(numbers.roundToPowerOfTen(1678, 0)).toBe(1678);
});
test('function that Returns the number rounded to specified power of 10 test', () => {
    expect(numbers.roundToPowerOfTen(1678, 1)).toBe(1680);
});
test('function that Returns the number rounded to specified power of 10 test', () => {
    expect(numbers.roundToPowerOfTen(1678, 2)).toBe(1700);
});
test('function that Returns the number rounded to specified power of 10 test', () => {
    expect(numbers.roundToPowerOfTen(1678, 3)).toBe(2000);
});


//Returns true is the number is prime; otherwise false.
test('function thatReturns true is the number is prime; otherwise false exist', () => {
    expect(numbers.isPrime).toBeDefined();
});
test('function thatReturns true is the number is prime; otherwise false test', () => {
    expect(numbers.isPrime(4)).toBeFalsy();
});
test('function thatReturns true is the number is prime; otherwise false test', () => {
    expect(numbers.isPrime(5)).toBeTruthy();
});
test('function thatReturns true is the number is prime; otherwise false test', () => {
    expect(numbers.isPrime(6)).toBeFalsy();
});
test('function thatReturns true is the number is prime; otherwise false test', () => {
    expect(numbers.isPrime(7)).toBeTruthy();
});
test('function thatReturns true is the number is prime; otherwise false test', () => {
    expect(numbers.isPrime(11)).toBeTruthy();
});
test('function thatReturns true is the number is prime; otherwise false test', () => {
    expect(numbers.isPrime(12)).toBeFalsy();
});
test('function thatReturns true is the number is prime; otherwise false test', () => {
    expect(numbers.isPrime(16)).toBeFalsy();
});
test('function thatReturns true is the number is prime; otherwise false test', () => {
    expect(numbers.isPrime(17)).toBeTruthy();
});


//Tries to convert value to number and returns it if conversion was successfull; 
test('function that convert a number exist', () => {
    expect(numbers.toNumber).toBeDefined();
});
test('function that convert a number test', () => {
    expect(numbers.toNumber(null, 0)).toBe(0);
});
test('function that convert a number test', () => {
    expect(numbers.toNumber('test', 0)).toBe(0);
});
test('function that convert a number test', () => {
    expect(numbers.toNumber('1', 0)).toBe(1);
});
test('function that convert a number test', () => {
    expect(numbers.toNumber(42, 0)).toBe(42);
});
test('function that convert a number test', () => {
    expect(numbers.toNumber(new Number(42), 0)).toBe(42);
});