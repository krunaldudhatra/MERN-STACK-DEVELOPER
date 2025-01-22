//Create the class with ES6 standard with mentioned properties and methods.
//Do not alter the starter Code
function main(){
    //Implement your class here
    class Person {
       
        name;
        age;
        gender;
         constructor(name,age,gender)
        {
             this.name=name;
        this.age=age;
        this.gender=gender;
        }
        speak(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
        
        
    }
    class Student {
            person;
            major;
            gpa;
        constructor(person,major,gpa){
            this.person = person;
            this.major=major;
            this.gpa=gpa;
        }
        study()
        {
            console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
        }
        speak()
        {
            console.log(`Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`);
        }
        }
    return {Person,Student};
}