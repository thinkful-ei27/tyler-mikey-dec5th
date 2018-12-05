'use strict'

function createObject() {
 return {
     foo: 'bar',
     answerToUniverse: 42,
     "olly olly": "oxen free",
     sayHello: function(){
         return 'hello!'
     }
 }
}

function updateObject(obj){
    obj.foo = 'foo',
    obj.bar = 'bar',
    obj.bizz = 'bizz',
    obj.bang = 'bang'
    return obj;
}

function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function(){
          return `${this.firstName} ${this.lastName}`;
      }
    };
    return person;
}

function keyDeleter(obj){
    delete obj.foo;
    delete obj.bar;
    return obj;
}

function makeStudentReports(data){
    return data.map(data => `${data.name}: ${data.grade}`);
}

function enrollInSummerSchool(students){
    // return students.map(student => student.status = 'in summerschool');
    for(let i = 0; i < students.length; i++){
         students[i].status = 'in summer school'
    }return students;
}
const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];

  console.log(enrollInSummerSchool(studentData));