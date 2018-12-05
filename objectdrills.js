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

//   console.log(enrollInSummerSchool(studentData));


function findById(items, idNum){
    for(let i=0; i<items.length; i++){
        if( items[i].id === idNum){
            return items[i]
        }

    }

}
const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];

//   console.log(findById(scratchData, 40));

function validateKeys(object, expectedKeys){
if( Object.keys(object).length !== expectedKeys.length){return false}
for(let i=0; i<Object.keys(object).length; i++){
    if(!Object.keys(object)[i] === expectedKeys[i]){
        return false;
    }
    return true;
}
};

const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];

  
  console.log( validateKeys(objectA, expectedKeys));