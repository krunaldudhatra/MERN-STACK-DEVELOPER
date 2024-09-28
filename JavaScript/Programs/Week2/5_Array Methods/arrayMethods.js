/** Arrays in JS are Dynamic */

const cities = [
  'Mumbai',
  'Delhi',
  'Calutta',
  'Jaipur',
  'Chennai',
];

console.log(cities.length);

cities[2] = 'Kolkata';
console.log(cities);

/** Methods on Arrays  */

/*Adding an Element */
//push()

const teams = ['CSK', 'RCB', 'MI', 'LSG'];
const pushArray = teams.push('GT');
console.log(pushArray);

//unshift
teams.unshift('KKR');
console.log(teams);

/** Removing an element */
//pop
teams.pop();
teams.pop();
console.log(teams);

//shift

/** Check the element is present or not */

//indexOf()
const RCBIndex = teams.indexOf('RCB');
console.log(RCBIndex);
const gtIndex = teams.indexOf('GT');
console.log(gtIndex);

//includes()
const rcbIncludes = teams.includes('RCB');
console.log(rcbIncludes);

//slice() and splice()
console.log(teams);
console.log(teams.slice(-1));
console.log(teams);

//splice()

teams.splice(2, 1, 'GT', 'LSG');
console.log(teams);

//concat()

const teams2 = [
  'India',
  'Austrailia',
  'New Zealand',
];
const mergedTeams = teams.concat(teams2);
console.log(mergedTeams);
