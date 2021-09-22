import CakeCard from "./components/CakeCard";
// import Container from "./components/Container"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import cakes from "./CakeData";
import {useState} from "react"


function App() {

  const [visible, setVisible] = useState(false)
  return (
    <>
    <Header />
    {visible?<SearchBar />:null}
    <button onClick={() => setVisible(!visible)}>{visible?"x":"Form"}</button>

   {cakes.map(cake => <CakeCard cake={cake}/>)}
    </>
  );
}

export default App;

