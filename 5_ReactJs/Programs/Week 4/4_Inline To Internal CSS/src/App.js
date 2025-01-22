import "./styles.css";

// Create an object named "styles" to store all the styles.
const styles = {
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  heading: {
    fontSize: "2rem",
    letterSpacing: "2px",
  },
  inputs: {
    padding: "10px",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  buttons: {
    outline: "none",
    paddingBlock: "5px",
    width: "100px",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
  },
};

export default function App() {
  return (
    <div className="App">
      {/* Use the styles object for the form element */}
      <form style={styles.form}>
        {/* Use the styles object for the heading */}
        <h3 style={styles.heading}>Sign Up</h3>
        {/* Use the styles object for the input fields */}
        <input placeholder="Username" style={styles.inputs} />
        <input placeholder="Email" style={styles.inputs} />
        <input placeholder="Password" style={styles.inputs} />
        {/* Use the styles object for the action container */}
        <div style={styles.actions}>
          {/* Use the styles object for the Cancel button */}
          <button style={styles.buttons}>Cancel</button>
          {/* Use the styles object for the Login button */}
          <button style={styles.buttons}>Login</button>
        </div>
      </form>
    </div>
  );
}

