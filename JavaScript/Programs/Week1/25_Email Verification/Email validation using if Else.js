// let num = 30;

// if (num < 10) {
//   console.log('Number is lesser than 10');
//   console.log('Number is 30');
// } else {
//   console.log('Number is greater');
// }

//Email Verification
// Input an email
// Length of the email > 11
// after . only 2 or 3 characters allowed
// minimum 3 characters between @ and .

const email = prompt('Enter the email address');

const emailLen = email.length;

const dotIndex = email.lastIndexOf('.');

const atIndex = email.lastIndexOf('@');

const lastIndex = emailLen - 1;

if (
  emailLen < 11 ||
  lastIndex - dotIndex < 2 ||
  lastIndex - dotIndex > 3 ||
  dotIndex - atIndex < 3
) {
  console.log('Invalid Email');
}