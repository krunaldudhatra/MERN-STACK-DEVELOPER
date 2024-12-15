const heading = React.createElement("h1", null, "Hello");

const para = React.createElement(
  "p",
  { className: "para" },
  "Welcome to the session"
);

const btn = React.createElement("button", { className: "btn" }, "Click");

const div = React.createElement("div", {
  className: "App",
  children: [heading, para, btn],
});

ReactDOM.createRoot(document.getElementById("root")).render(div);
