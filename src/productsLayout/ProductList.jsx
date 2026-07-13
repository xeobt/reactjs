function ProductList({ products }) {
  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "rows", gap: "30px"}}>
      {products.map((product, index) => (
        <div key={index} style={{
            height: "45vh",
            width: "40vh",
            border: "3px solid white",
            backgroundColor: "rgb(202, 223, 215)"
        }}>
          <h2 style={{color: "black", fonSize: "12rem"}}>{product.name}</h2>
          <p style={{color: "black", fonSize: "12rem"}}>Price: {product.price}</p>
          <p style={{color: "black", fonSize: "12rem"}}>Category: {product.category}</p>
          <img
            src={product.image}
            width="70%"
            height="50%"
          />
          <br></br>
          <button style={{borderRadius: "50px", backgroundColor: "rgb(77, 100, 229)", height: "20%", width: "70%"}}>Buy Now</button>
        </div>
      ))}
    </div>
    
  );
}

export default ProductList;