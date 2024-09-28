const aprilBatch = ['Tina', 'Madhur'];
const mayBatch = ['Ritik', 'Deepak', 'Shalini'];
const juneBatch = ['Saba', 'Shivani'];
const julyBatch = [];

// function addStudent(batch, student) {
//   batch.push(student);
//   console.log(batch);
// }
// addStudent(aprilBatch, 'Ritu');
// addStudent(mayBatch, 'Sunny');

//Rest ...

function addStudents(batch, ...students) {
  for (let i of students) {
    batch.push(i);
  }
  console.log(batch);
}

addStudents(
  aprilBatch,
  'Sunny',
  'Ritu',
  'Sheena'
);

// Spread ...

const newBatch = [...mayBatch];
// const newBatch = ['Ritik', 'Deepak', 'Shalini']
console.log(newBatch);

mayBatch.push('newStudent');
console.log(mayBatch);
console.log(newBatch);