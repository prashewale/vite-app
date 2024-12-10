import { useState, useEffect } from "react";
import Home from "./components/Home";

function App() {
  const [isHomeLoaded, setIsHomeLoaded] = useState(false);

  return (
    <div>
      <button onClick={() => setIsHomeLoaded(!isHomeLoaded)}>
        {isHomeLoaded ? "Hide" : "Show"} Home
      </button>

      <hr />
      <div className="d-flex justify-content-center">
        {isHomeLoaded && <Home />}
      </div>
    </div>
  );
}

export default App;
