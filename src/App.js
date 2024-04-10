import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/*Accordina Component */}
      <Accordian />
      {/*Random Color Component */}
      <RandomColor />
      {/* Star Rating Component*/}
      <StarRating noOfStars={5}/>
    </div>
  );
}

export default App;
