import { useState } from "react";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-bold text-2xl text-violet-500">Hello World</h1>
      <button className=" bg-brand-lilac-500 px-8 py-3 rounded text-white hover:bg-violet-600">Hello</button>
    </>
  );
}

export default App;
