/*Problem:
   A teacher was correcting the tests and forgot to pass one result to the school's digital app.
   Make an code that can help him to solve this problem: 
*/

const scores  = [ 1,6,9,];

scores.push(4);

const media = (scores[0] + scores[1] + scores[2] + scores[3])  / scores.length;

console.log(media)