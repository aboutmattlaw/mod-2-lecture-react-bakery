import CakeCard from "./components/CakeCard";
// import Container from "./components/Container"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import cakes from "./CakeData";
import {useState, useEffect} from "react"
import CakeDetail from "./components/CakeDetail";
import CakeForm from "./components/CakeForm";
import FilterBar from "./components/FilterBar";
function App() {

  const [visible, setVisible] = useState(false)
  const [selectedCake, setSelectedCake] = useState(null)
  const [cakeList, setCakes] = useState([])
  const [flavorSaver, setFlavorSaver] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/cakes')
    .then(res => res.json())
    .then(data => setCakes(data))

    fetch('http://localhost:4000/flavor')
    .then(res => res.json())
    .then(data => setFlavorSaver(data))

  },[])
  

 function handleAddCake(cake){
   setCakes([
     ...cakeList, cake
   ])
  } 

  return (
    <>
    <Header />
    <FilterBar />
    <CakeForm handleAddCake={handleAddCake}/>
    {visible?<SearchBar />:null}
    <button onClick={() => setVisible(!visible)}>{visible?"x":"Form"}</button>
    {selectedCake ? <CakeDetail cake={selectedCake} /> : null}
   {cakeList.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake}/>)}
   
    </>
  );
}

export default App;

