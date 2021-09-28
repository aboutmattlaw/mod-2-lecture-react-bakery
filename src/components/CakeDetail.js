function CakeDetail({cake , handleDelete , handleUpdate}){
    return (

        <div>
        <img src={cake.image} style={{width:"200px"}}/>
        <p>Size: {cake.size}</p>
        <p>{cake.flavor}</p>
        <p>${cake.price}</p>
        <p>{cake.description}</p>
        <button onClick={() => handleDelete(cake.id)}>Delete</button>
        <button onClick={() => handleUpdate(cake)}>{cake.liked? "liked" : "unliked"}</button>
        </div>
        )
}

export default CakeDetail;