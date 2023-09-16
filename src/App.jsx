import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-extrabold text-6xl bg-sky-200">Vite + React</h1>
    </>
  );
}

export default App;
