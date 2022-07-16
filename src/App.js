import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h2>Ajay</h2>
      <textarea maxlength="1000" name="w3review" rows="4" cols="50" onChange={handleChange} />
      <p>{text.length}/1000</p>
      
    </div>
  );
}

export default App;
