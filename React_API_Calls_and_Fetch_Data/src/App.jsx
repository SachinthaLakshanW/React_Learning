import Axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [generateExcuse, setGenerateExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (response) => {
        setGenerateExcuse(response.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>

      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <button onClick={() => fetchExcuse("children")}>Children</button>

      <h2>{generateExcuse}</h2>
    </div>
  );
}

export default App;
