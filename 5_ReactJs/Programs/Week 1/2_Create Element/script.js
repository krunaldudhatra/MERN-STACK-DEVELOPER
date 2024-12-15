// JavaScript Element

// const heading = document.createElement("h1");
// heading.textContent = "Hello";
// heading.className = "header";
// document.getElementById("root").append(heading)


// React Element

const heading = React.createElement("h1", { className: "para", id:"head" /*childrean:"hello" */},"Hello");
ReactDOM.createRoot(document.getElementById("root")).render(heading);