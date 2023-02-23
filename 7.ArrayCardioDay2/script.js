// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

//? some and every check
//? array.prototype.some() // is at least one person 19?

const isAdult = people.some(function(person){
   const currentYear = new Date();
   const year = currentYear.getFullYear()
   if(year - person.year >= 19 ){
    return true;
   }
   
})
//উপরের আর নিচের কোড same 
const isAdult2 = people.some(person=>{
  (new Date()).getFullYear()- person.year >=19;
})

console.log(isAdult);

// array.prototype.find()
// find is like filter but instead returns just the one you are looking for 
//find the comment with the id of 823423

const findComment = comments.find(comment=>comment.id === 823423)
console.log(findComment.text);



// Array.prototype.findIndex()
//find the comment with this ID
// delete the comment with the ID of 823423

const findIndexCommnet= comments.findIndex(comment => comment.id ===823423);
console.log(findIndexCommnet);

 