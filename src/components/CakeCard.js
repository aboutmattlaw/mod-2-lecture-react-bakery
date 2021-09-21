





function CakeCard({flavor, size=6, price, image="https://imengine.public.prod.cdr.navigacloud.com/?uuid=D6C3A5AD-C09D-4146-AB8B-51D784743FEA&function=cover&type=preview&source=false&width=1050&height=550"}) {
    return (
        <>
        <h1>Flavor: {flavor}</h1>
        <p>Price: ${price}</p>
        <p>Size: {size}</p>
        <img src={image} width="150px" alt="name"/>
        </>  

    );
  }
  
  export default CakeCard;
  