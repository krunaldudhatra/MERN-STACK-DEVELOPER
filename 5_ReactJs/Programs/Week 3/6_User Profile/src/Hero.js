// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import React from "react";

function BasicInfo({ name, email, phone, address }) {
  return (
    <div>
      <h2>Basic Information</h2>
      <p><strong>Name:</strong> {name};</p>
      <p><strong>Email:</strong> {email};</p>
      <p><strong>Phone:</strong> {phone};</p>
      <p><strong>Address:</strong> {address};</p>
    </div>
  );
}

export default BasicInfo;

