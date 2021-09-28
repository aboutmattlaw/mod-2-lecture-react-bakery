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
  fetch('http://localhost:4000/cakes',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cake)
  })
  .then(res => res.json()) 
  .then(newCake =>{
    setCakes([
      ...cakeList, newCake
    ]);
  });
  };

function handleDelete(id){
  fetch(`http://localhost:4000/cakes/${id}`,{
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(() => {
    const filteredCakes = cakeList.filter(cake => cake.id !== id)
    setCakes(filteredCakes)
    setSelectedCake(null)
  })
}

function handleUpdate(cake){
  fetch(`http://localhost:4000/cakes/${cake.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({liked:!cake.liked}),
  })
    .then(res => res.json())
    .then(updateCake => {
      const updatedCakeList = cakeList.map(clCake => {
        if (clCake.id === cake.id) {
          return updateCake;
        } else {
          return clCake;
        }
        });
        setSelectedCake(updateCake)
        setCakes(updatedCakeList)
      });
    };
        
  





  return (
    <>
    <Header />
    <FilterBar />
    <CakeForm handleAddCake={handleAddCake}/>
    {visible?<SearchBar />:null}
    <button onClick={() => setVisible(!visible)}>{visible?"x":"Form"}</button>
    {selectedCake ? <CakeDetail cake={selectedCake} handleDelete={handleDelete} handleUpdate={handleUpdate}/> : null}
   {cakeList.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake}/>)}
   
    </>
  );
}

export default App;

