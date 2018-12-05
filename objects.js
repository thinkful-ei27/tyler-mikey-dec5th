'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water / this.flour) * 100;
  }
};
// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

const myObj = {
  foo: 'cat',
  bar: 6,
  fum: 'dumb word',
  quux: 12,
  spam: 'gross'
}

for(const key in myObj){
  // console.log( `${key}: ${myObj[key]}`)
}

const secondObj = {
  meals: ['breakfast', 'secondbreakfast','elevenses','lunch', 'afternoon tea', 'dinner', 'supper']
};

// console.log(secondObj.meals[3]);

const people =[ 
  {
    name: 'david',
    jobTitle: 'plumber',
    boss: 'Gary'
  },

  {
    name: 'Gary',
    jobTitle: 'electrician'
  },
  {
   
    name: 'Mary',
    jobTitle: 'lawyer',
    boss: 'Gary'
  }
];

for(let i = 0; i< people.length; i++){
  if(people[i].hasOwnProperty('boss')){
    // console.log(`${people[i].name} ${people[i].jobTitle} reports to ${people[i].boss}`);
  }else{
    // console.log(`${people[i].name} reports to no one!`);
  }
}

const cipher = { //key gives us abcd cipher[key] gives 1234
  'a' : 1,
  'b' : 2,
  'c' : 3,
  'd' : 4,
  decoder: function(string){
    let answer = '';
    for(const key in cipher){
      if(string.charAt(0) === key){
          answer += string.charAt(cipher[key])
      }
      else answer += ' ';
  }
    return answer;
  },
  decodeWords: function(sentence){
    let decodedSentence = '';
    const senArray = sentence.split(' ');
for(let i=0; i < senArray.length; i ++){
  decodedSentence += cipher.decoder(senArray[i]);
}
return decodedSentence;
    }
  };

// console.log(cipher.decoder('apple'));.....
// console.log(cipher.decodeWords('craft block argon meter bells brown croon droop'));

 //  const decodeWords = senArray.forEach(word => {this.decoder(word);} );

 function CreateCharacter(name, nickname, race, origin, attack, defense){
  this.name = name, 
  this.nickname = nickname,
  this.race = race,
  this.origin = origin,
  this.attack = attack,
  this.defense = defense,
  this.describe = function(){
    console.log(`${this.name} is ${this.race} race from ${this.origin}`)
  },
  this.evaluateFight = function(character){
    let x = 0; // opponent damage
    let y = 0; // your damage
    if(this.defense < character.attack){
      y = character.attack - this.defense}
    if(character.defense < this.attack){
      x = this.attack - character.defense
    }
    console.log(`your opponent takes ${x} damage and you receive ${y} damage`);

      
  };
}

  const characters = [
new CreateCharacter('Gandalf the White', 'Gandalf', 'wizard', 'Middle Earth', 10 ,6),
new CreateCharacter('Bilbo baggins', 'bilbo', 'Hobbit','The Shire', 2, 1),
new CreateCharacter('Frodo Baggins','Frodo', 'Hobbit','The Shire', 3, 2),
new CreateCharacter('Aragorn son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6 , 8),
new CreateCharacter('Legolas', 'legolas','elf', 'woodland Realm', 8, 5)
];


 

characters.push(new CreateCharacter('Arwen Undomiel', 'Arwen', 'Half-Elf', 'Rivendell', 2 , 11));

// console.log(characters);

const aragornDescribe = characters.find(character => { if 
(character.nickname === 'Aragorn'){
  return character.describe();
}
});

// console.log(aragornDescribe)

const hobbits = characters.filter(character => character.race === 'Hobbit');
console.log(hobbits);

const strongCharacters = characters.filter(character => character.attack > 5);
console.log(strongCharacters);


const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  let keys = Object.keys(query);
  





