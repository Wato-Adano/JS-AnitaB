
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
greet(){
    console.log(`Hello my name is ${this.name} amd i am ${this.age} years old`);
}
};
const adam = new person('adam',30);
console.log({adam});
adam.greet();
class Student extends Person{
    constructor(name,age,school){
        super(name,age);
        this.school = school;
    }
    profession(){
        console.log(`I am a student at ${this.school}`);
    }
} ;
const student = new Student('Jane', 21,'AkiraChix')
console.log({student});
student.profession();
student.greet();
class weatherForacast{
    constructor(){
this.weatherData = {};
    }
    addCities = function (cityName,humidity,temp,windspeed) {
let cityData = {"humidity":humidity, "temp":temp,"windspeed":windspeed};
this.weatherData[cityName] = cityData;
    }
}
const city = new weatherForacast()
city.addCities("nairobi",20,25,10.2)
city.addCities("kigali",20,25,10.2)
console.log(city);
