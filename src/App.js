import React from 'react';
import './App.css';

const productItems=[
  {name:"Iphone",count:2,price:1200},
  {name:"Airpod",count:3,price:800},
  {name:"Ipad",count:2,price:1600}
];

function Header(props){
  return <h1>Shopping Cart</h1>;
}

function Footer(props){
  return <h2>Total : ${props.total}</h2> 
}

function Items(props){
  return <table>
      <thead>
        <tr>
          <th>name</th>
          <th>count</th>
          <th>price</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {
          props.productItems.map(items=>
            <tr key={items.name}>
              <td>{items.name}</td>
              <td>{items.count}</td>
              <td>${items.price}</td>
              <td>${items.count*items.price}</td>
            </tr>
          )
        }
      </tbody>
  </table>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Items productItems={productItems}/>
      <Footer total={productItems.reduce((a,c)=>(a+c.price*c.count),0)}/>
    </div>
  );
}

export default App;
