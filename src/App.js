import Catagory from "./Component/Catagory";
import Deleveries from "./Component/Deleveries";
import Featured from "./Component/Featured";
import Footer from "./Component/Footer";
import Meal from "./Component/Meal";
import NewsLetter from "./Component/NewsLetter";
import TopNav from "./Component/TopNav";
import TopPick from "./Component/TopPick";



function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Deleveries/>
      <TopPick/>
      <Meal/>
      <Catagory/>
      <NewsLetter/>
      <Footer/>
      
    </div>
  );
}

export default App;
