import axios from "axios";
import './App.css'
import Fetching from "./Fetching";
import Footer from './Footer';
import { useState } from "react";

function App() {
  const [receipe, setReceipe] = useState("");
  const [data, setData] = useState([]);

  const APP_ID = "5b413bc0"
  const APP_KEY = "d733c57b6bc82fa8389f90f78779d503"
  var url = `https://api.edamam.com/search?q=${receipe}&app_id=${APP_ID}&app_key=${APP_KEY}`

  async function go() {
    const result = await axios.get(url);
    setData(result.data.hits);
    setReceipe("");
  }

  function submission(e) {
    e.preventDefault();
    go();
  }

  return (
    <div className="App">

      <div className="top">
        <div className="heading"><h1>Food receipe plaza</h1></div>
        <div className="formWaala">
          <form onSubmit={submission}>
            <input placeholder="Enter the text to search" type="text" name="receipe" value={receipe} onChange={(e) => setReceipe(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="bottom" id="here">
        {data.map((recipe, i) => {
          return <Fetching recipe={recipe} key={i} />
        })}
      </div>
      <Footer/>

    </div>
  );
}

export default App;
