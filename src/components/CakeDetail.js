function CakeDetail({cake}){
    return (

        <div>
        <img src={cake.image} style={{width:"200px"}}/>
        <p>Size: {cake.size}</p>
        <p>{cake.flavor}</p>
        <p>${cake.price}</p>
        <p>{cake.description}</p>
        </div>
        )
}

export default CakeDetail;