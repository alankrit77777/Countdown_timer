import CountdownTimer from "./CountdownTimer";
import "./App.css";

export default function App() {
  return (
    <>
      <h1
        style={{
          marginBottom: "50px",
          marginLeft: "540px",
        }}
      >
        Countdown Timer
      </h1>
      <div className="App">
        <CountdownTimer />
      </div>
    </>
  );
}
