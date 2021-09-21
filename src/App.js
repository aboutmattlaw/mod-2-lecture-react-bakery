import CakeCard from "./components/CakeCard";
// import Container from "./components/Container"
// import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"
import cakes from "./CakeData";


function App() {
  return (
    <>
   {cakes.map(cake => <CakeCard flavor={cake.flavor} price={cake.price} size={cake.size} image={cake.image} key={cake.flavor} />)
}

    </>
  );
}

export default App;

