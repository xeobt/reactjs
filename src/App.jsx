import ProductList from "./productsLayout/ProductList";
import Header from "./productsLayout/Header";
import Nav from "./productsLayout/Nav";
import Footer from "./productsLayout/Footer";

function App() {
  const products = [
    {
      name: "Laptop",
      price: 800,
      image:"https://freepngimg.com/save/162037-laptop-notebook-free-download-png-hq/2418x1688",
      category: "Laptop"
    },
    {
      name: "Phone",
      price: 500,
      image:"https://png.pngtree.com/png-vector/20250307/ourmid/pngtree-latest-model-mobile-phone-png-image_15739741.png",
      category: "Mobile"
    },
    {
      name: "Headphones",
      price: 100,
      image:"https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp",
      category: "Accessories"
    },
  ];

  return (
    <div>
      <Header title="MyShop"
      nav1="Home"
      nav2="Products"
      nav3="About"
      nav4="Contact"/>
      <Nav 
      filter1="Laptop"
      filter2="Mobile"
      filter3="Accessories"
      filter4="Gaming"
      />
      <h1>Product List</h1>
      <ProductList products={products} />
      <Footer 
      email="myshop@gmail.com"
      phone="+6343525661"
      title="MyShop"
      />
    </div>
  );
}

export default App;