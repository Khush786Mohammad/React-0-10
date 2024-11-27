import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // const style = {
    //     color: "red",
    //     fontSize: "48px",
    //     textTransform: "uppercase"
    // }
    // <h1 style={style}>This is how you can add inline css</h1>
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h1>Menu</h1>
            <Pizza 
                name="Pizza Spinaci"
                ingredient='Tomato, mozarella, ham, aragula, and burrata cheese'
                photo='pizzas/spinaci.jpg'
                price={250}
            />

            <Pizza 
                name="Pizza Funghi"
                photo='pizzas/funghi.jpg'
                ingredient="Tomato, mushrooms"
                price={100}
            />
        </main>
    );
}

function Pizza(props){
    console.log(props)
    return (
       <div className="pizza">
           <img src={props.photo} alt={props.name}></img>
           <div>
           <h3>{props.name}</h3>
           <p>{props.ingredient}</p>
           <span>{props.price}</span>
           </div>
       </div>
    );
}

function Footer(){
    // const hour = new Date().getHours();
    // const openHour = 12;
    // const closeHour = 22;

    // if(hour >= openHour && hour<=closeHour)
    //     alert("We're currently open!");
    // else
    //     alert("Sorry We're closed");
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()} We are currently open!
        </footer>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);