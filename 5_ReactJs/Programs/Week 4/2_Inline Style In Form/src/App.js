export default function App() {
  return (
    <div className="App">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          margin: "auto",
          width: "250px",
          height: "225px",
          padding: "2rem",
        }}
      >
        <h1>Register Form</h1>
        <input
          style={{
            width: "100%",
            paddingBlock: "0.5rem",
            border: "1px solid black",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="Name"
        />
        <input
          style={{
            width: "100%",
            paddingBlock: "0.5rem",
            border: "1px solid black",
            borderRadius: "5px",
          }}
          type="email"
          placeholder="Email"
        />
        <input
          style={{
            width: "100%",
            paddingBlock: "0.5rem",
            border: "1px solid black",
            borderRadius: "5px",
          }}
          type="password"
          placeholder="Password"
        />
        <button
          style={{
            paddingBlock: "0.5rem",
            backgroundColor: "black",
            color: "white",
            width: "100%",

            fontSize: "1.035rem",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
