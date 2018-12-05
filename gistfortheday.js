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
console.log(cipher.decodeWords('craft block argon meter bells brown croon droop'));

 //  const decodeWords = senArray.forEach(word => {this.decoder(word);} );