




function CakeCard({cake}) {
    return (
        <>
        <h1>Flavor: {cake.flavor}</h1>
        <p>Price: ${cake.price}</p>
        <p>Size: {cake.size}</p>
        <img src={cake.image} width="150px" alt="name"/>
        </>  

    );
  }
  
  export default CakeCard;
  