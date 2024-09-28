const student = {
  name: 'Alexa',
  age: 10,
  hobby: 'Dancing',
  100: 'hundred',
  show: function() {
    console.log('This is the Student details section.');
  }
}

console.log(student);
console.log(student.name);
console.log(student['name']);
console.log(student[100]);
student.show();
