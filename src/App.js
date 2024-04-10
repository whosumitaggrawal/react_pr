import "./App.css";
import ImageSlider from "./components/image-slider";
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
      <StarRating noOfStars={10} />
      {/* Image Slider Component */}
      <ImageSlider 
      url={"https:picsum.photos/v2/list"} 
      page= {'1'} 
      limit={10} />
    </div>
  );
}

export default App;
