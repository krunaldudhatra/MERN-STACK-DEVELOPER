/*if we assign elements in variable it can only contain one element.if we wnt to assign more elements then use div
tag but this is like div inside div tag so use fragment*/

const header = (
    //<React.Fragment></React.Fragment>
    <>
      <h1 className="header">Hello</h1>
      <p className="para">Welcome to the session</p>
      <button className="btn">Click</button>
    </>
  );
  ReactDOM.createRoot(document.getElementById("root")).render(header);
  