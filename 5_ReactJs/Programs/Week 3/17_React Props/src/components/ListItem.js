import React, { Component } from "react";
// Complete this Component
const ListItem = ({ name, icon, link }) => {
  return (
    // <div
    //   className="ListItem"
    //   style={{
    //     height: 30
    //   }}
    // >
    //   <img src="" alt="" />
    //   <a href=""></a>
    // </div>

<div
className="ListItem"
style={{
  display: "flex",
  alignItems: "center",
  marginBottom: 10,
  padding: 10,
  borderRadius: 5,
  backgroundColor: "#f0f0f0",
  textDecoration: "none",
  color: "#000"
}}
>
{/* Render the icon */}
<img
  src={icon}
  alt={`${name} icon`}
  style={{ width: 24, height: 24, marginRight: 10 }}
/>

{/* Render the clickable link */}
<a 
  href={link} 
  target="_blank" 
  rel="noopener noreferrer"
  style={{
    textDecoration: "none",
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  }}
>
  {name}
</a>
</div>

    )
  }
export default ListItem;
