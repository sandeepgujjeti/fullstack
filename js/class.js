class Student{
    constructor(name,age){
        this.name=name;
        this.age="19"
        
        constructor(name=null, id="student name")
    }
    showDetails(name,age){
        console.log(`Name of the Student is ${this.name}`);
        console.log(`age of the Student is ${this.age}`);
        console.log(`id of the student is ${this.id} `)
        
    }
    logger(){
        console.log(`this function not blocked`)
    }
}
const s = new Student();
const r = new Student("Student 1" ,102);


s.showDetails();
s.logger();
r.showDetails();
r.logger();