/*
/import * as fs from 'fs';
const fs = require('fs');
//const fs = import('fs');
const CSVToArray = (data, omitFirstRow = false) =>
    data
        .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\r\n')

var txtFile = ./mogi-quote.txt;
var str = fs.readFileSync(txtFile,'utf8');
var array = CSVToArray(str);
console.log(array)
var length = array.length;
*/




const array = [
    'Mogi is all that ever is, ever was, or ever will be.',
    'He who knows all the answers has not been asked all the questions',
    'You must take your opponent into a deep dark forest where 2+2=5, and the path leading out is only wide enough for one.',
    'Since beginning-less time, darkness thrives in the void, but always yields to purifying light.',
    'When we hit our lowest point, we are open to the greatest change.',
    'Real knowledge is to know the extent of one’s ignorance.',
    'Everything has beauty, but not everyone sees it.',
    'What is right is not always popular, and what is popular is not always right.',
    'If you don’t know who asked, then why are you listening?',
    'I would agree that’s a fair assessment.',
    'Return to Mogi. Its eternal nature humbles human existence.',
    'Long way down when your head is in the clouds.',
    'What the superior man seeks is in himself; what the small man seeks is within others.',
    'The hardest thing of all is to find a black cat in a dark room, especially if there is no cat.',
    'Not everything that counts can be counted and not everything that can be counted counts.',
    'Even if you’re on the right track, you’ll get run over if you just sit there.',
    'If things go wrong, don’t go with them.',
    'Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.',
    'Sometimes the wrong choices bring us to the right places.',
    'The biggest difference between time and space is that you can’t reuse time.',
    'The difference between stupid and genius is that genius has its limits.',
    'A ship in harbor is safe, but that’s not what ships are built for.',
    'Do not allow people or situations to upset you. Both remain powerless without your reaction.',
    'Nature does not hurry, yet everything is accomplished.',
    'An interesting person is interested. - Mogi',
    'In the good of others lies our own.',
    'In the joy of others lies our own.',
    'Our thoughts are a part of our truth.',
    `When you plant lettuce, if it does not grow well, you don't blame the lettuce. You look for reasons it is not doing well. It may need fertilizer, or more water, or less sun. You never blame the lettuce.`,
    'The eyes are useless if the mind is blind.',
    'What you resist tends to persist.',
    'Not wanting things is as good as having them.',
    'The reason to win the game is to exit it.',
    'The threat is stronger than the execution.',
    'All humans are entitled to two things: suffering and death.',
    'Values are caught, not taught.',
    'All suffering is mind made.',
    'The supreme art of war is to subdue the enemy without fighting.',
    'Even lies are real in our experience.',
    'Everything is now. Now is real.',
    'For truth to triumph, you need evidence. For lies to live, confusion is enough.',
    'There is no better truth. Only better lies. In this way, comparison is superficial.',
    'The knife cannot cut itself.',
    'Humans are not separate from nature.',
    'We are causal.',
    'Meaning is orthogonal to morality.',
    'Halves are equal.',
    'Even if it has many paths, the story only respects one.',
    'A bird does not forget to fly half way.',
    'Endless games cannot be won, or lost.',
    'Nothing was never anywhere. That’s why it’s been everywhere.',
    'Language assumes the truth can be told.',
    'The number of ways to choose something is the same as the number of ways to not choose it. In this way, choosing and not choosing are the same.',
    'If you go in a large enough loop, you will think you are going straight.',
    'Larger problems are a guaranteed solution to smaller ones.',
    'The whole thinks it is made of parts and the parts think they are whole.',
    'The opportunity to defeat the enemy is provided by the enemy himself.',
    'Our past is history’s future.',
    'The future is always awaiting us.',
    'All stories wear off.',
    'The difference between medicine and poison is sometimes only dosage.',
    'The early bird gets the worm.',
    'Simplicity is a prerequisite for reliability.',
    'The imbalance responsible for strength is the very same one responsible for weakness.'
  ]
const length = array.length;
/*
const search1 = ;
const search2 = ;
const search3 = ;
const replaceWith = ;
for (let i = 0; i < length; i++) {
    let firstWord = array[i].split(search1).join(replaceWith);
    let secondWord = firstWord.split(search2).join(replaceWith);
    let thirdWord = secondWord.search(search3).join(replaceWith);
    array[i] = thirdWord;
}
*/
function getMogiQuote() {
    var randomNumber = getRandomInt(length)
    document.getElementById("quote-field").innerHTML = array[randomNumber];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  