export default function ProductCard({product}){
    console.log(product.amount)
    return(
        
        <article>
            <div  >
                <img src={product.photoUrl}></img>
            </div>
            <header>
                <h3>{product.name}</h3>
                <p>{product.amount}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
            </header>

        </article>
        
    )
}