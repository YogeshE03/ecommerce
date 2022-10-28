import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import Cart from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import { useState } from "react";

function App() {
  const [products,setproducts] = useState([
    {
      id:1,
      name: "Iphone 14 pro",
      price: 129900,
      img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/h/r/e/-original-imaghxeeme2n7hy7.jpeg?q=70"
    },
    {
      id:2,
      name: "Samsung galaxy S21 ",
      price: 35999,
      img: "https://rukminim1.flixcart.com/image/312/312/kz7bcsw0/screen-guard/front-and-back-screen-guard/o/p/j/rr44-twenteesky-original-imagb9dh2hm4fzhw.jpeg?q=70"
    },
    {
      id:3,
      name: "Redmi 10 A",
      price: 7549,
      img: "https://rukminim1.flixcart.com/image/312/312/l2f20sw0/mobile/h/c/6/10a-b09xb7hv7q-redmi-original-imagdrgp8pkbzccw.jpeg?q=70"
    },
    {
      id:4,
      name: "Realme GT NEO 3",
      price: 38999,
      img: "https://rukminim1.flixcart.com/image/312/312/l3rmzrk0/mobile/h/a/n/-original-imagetmezh7hj2zk.jpeg?q=70"
    },
    {
      id:5,
      name: "Nokia C21 plus",
      price: 10898,
      img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/x/3/-original-imagg9ujz7brfxk6.jpeg?q=70"
    },
    {
      id:6,
      name: "Vivo v25",
      price: 27999,
      img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/5/q/j/-original-imagh4fnprjvgzzj.jpeg?q=70"
    }
  ])
  const [cartItems,setCartItems]= useState([])

  let addToCart = (product) => {
    setCartItems([...cartItems,product])
  }

  let removeFromCart = (product) => {
  const indexVal = cartItems.findIndex(obj  => obj.id === product.id);
  cartItems.splice(indexVal,1);
  setCartItems([...cartItems])
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
          {
          products.map((product)=>{
            return <Card product={product} addToCart ={addToCart} cartItems ={cartItems}/>
          })
}
          </div>
        </div>

        <div className="col-lg-4">
          <h3>CART</h3>`
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
