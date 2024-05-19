function add (num1,num2){
    const sum =num1 + num2;

    console.log({console:sum});
    return{return:sum}

}
console.log(add(2,3));
add(4,5);

//function expression

const subtract = function (num1,num2){
    console.log(num1-num2);

}
    subtract(20,10);
//Arrow functions

const multiply =(num1,num2) => console.log(num1*num2);
multiply(5,6);

//IIFES
(function(){
    console.log('Hello');
})();

//

//revision
class ServiceDue {
    constructor(mileage, lastServiceMileage) {
        this.mileage = mileage;
        this.lastServiceMileage = lastServiceMileage;
    }
    needsServicing() {
        return (this.mileage - this.lastServiceMileage) >= 1000;
    }
}
// Create an instance of the ServiceDue class
const car1 = new ServiceDue(5500, 4000);
// Check if the car needs servicing
const isServicingNeeded = car1.needsServicing();
console.log(isServicingNeeded);